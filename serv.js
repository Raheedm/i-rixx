const express = require('express');
const multer = require('multer');
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rah004@chowgules.ac.in',
    pass: 'Whoisthis@3', 
  },
});

const publicDirectoryPath = path.join(__dirname, 'public/uploads');

if (!fs.existsSync(publicDirectoryPath)){
    fs.mkdirSync(publicDirectoryPath);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, publicDirectoryPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB file size limit
  }
});
//my build folder is in the root directory
const User = mongoose.model('User', {
  representativeName: String, // Add these fields for team registration
  rollNumber: String,
  year: String,
  course: String,
  totalTeamMembers: Number,
  idCardImageName: String,
  idCardImagePath: String,
}, 'users');
// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes and serve 'index.html'
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



// app.post('/api/teamregfile', upload.single('idCardImage'), async (req, res) => {

//   try {
//     console.log('Request body:', req.body);
//     console.log('Request file:', req.file);

//     if (!req.file) {
//       return res.status(400).json({ success: false, msg: 'No file uploaded' });
//     }

//     const { representativeName, rollNumber, year, course, totalTeamMembers } = req.body;
//     const { filename: idCardImageName, path: idCardImagePath } = req.file;

//     if (!representativeName || !rollNumber || !year || !course || !totalTeamMembers || !idCardImageName || !idCardImagePath) {
//       return res.status(400).json({ success: false, msg: 'Incomplete team registration data' });
//     }

//     const formattedData = `Representative Name: ${representativeName}\nRoll Number: ${rollNumber}\nYear: ${year}\nCourse: ${course}\nTotal Team Members: ${totalTeamMembers}\n\n`;

//     fs.appendFileSync('irix_reg.txt', formattedData);

//     console.log(`Sending email with attachments: ${formattedData}, ${idCardImagePath}`);
//     await transporter.sendMail({
//       from: 'rah004@chowgules.ac.in',
//       to: 'raheedmuzawar@gmail.com',
//       subject: 'New Team Registration IRIX 2024',
//       text: 'A new team has registered for IRIX',
//       attachments: [
//         { 
//           filename: 'irix_reg.txt',
//           content: formattedData, 
//         },
//         {
//           filename: idCardImageName,
//           path: idCardImagePath, 
//         },
//       ],
//     });

//     console.log('Email sent successfully');
//     res.status(200).json({ success: true, msg: 'Team registered successfully' });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ success: false, msg: 'Internal server error' });
//   }
// });

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Max requests per windowMs
    keyGenerator: (req) => {
      // Use the first IP address from the X-Forwarded-For header as the key for rate limiting
      const forwardedFor = req.headers['x-forwarded-for'];
      return forwardedFor ? forwardedFor.split(',')[0] : req.ip;
    },
    message: 'Too many requests from this IP, please try again later.',
  });
  
app.use('/api/teamregfile', limiter);

app.post('/api/teamregfile', upload.single('idCardImage'), async (req, res) => {
  try {
    console.log('Request body:', req.body);
    console.log('Request file:', req.file);

    if (!req.file) {
      return res.status(400).json({ success: false, msg: 'No file uploaded' });
    }

    const {
      representativeName,
      rollNumber,
      year,
      course,
      totalTeamMembers,
    } = req.body;
    const { filename: idCardImageName, path: idCardImagePath } = req.file;

    if (
      !representativeName ||
      !rollNumber ||
      !year ||
      !course ||
      !totalTeamMembers ||
      !idCardImageName ||
      !idCardImagePath
    ) {
      return res
        .status(400)
        .json({ success: false, msg: 'Incomplete team registration data' });
    }

    // Save team registration details to the database
    const newTeamRegistration = new User({
      username: representativeName,
      representativeName,
      rollNumber,
      year,
      course,
      totalTeamMembers,
      idCardImageName,
      idCardImagePath,
    });

    // Handle errors during database save using try-catch
    try {
      const savedTeam = await newTeamRegistration.save();
      console.log('Saved to database:', savedTeam);
    } catch (error) {
      console.error('Error saving to database:', error);
      return res.status(500).json({ success: false, msg: 'Internal server error' });
    }

    const formattedData = `Representative Name: ${representativeName}\nRoll Number: ${rollNumber}\nYear: ${year}\nCourse: ${course}\nTotal Team Members: ${totalTeamMembers}\n\n`;

    fs.appendFileSync('irix_reg.txt', formattedData);

    console.log(`Sending email with attachments: ${formattedData}, ${idCardImagePath}`);
    await transporter.sendMail({
      from: 'rah004@chowgules.ac.in',
      to: 'raheedmuzawar@gmail.com',
      subject: 'New Team Registration IRIX 2024',
      text: 'A new team has registered for IRIX',
      attachments: [
        {
          filename: 'irix_reg.txt',
          content: formattedData,
        },
        {
          filename: idCardImageName,
          path: idCardImagePath,
        },
      ],
    });

    console.log('Email sent successfully');
    res.status(200).json({ success: true, msg: 'Team registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, msg: 'Internal server error' });
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});