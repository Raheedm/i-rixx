import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Input from '../components/input';
import Button from '../components/button';
import { useDispatch } from 'react-redux';
import { showToastTimer } from '../redux/actions/toast';
import MuiAlert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';


function TeamRegistration() {
  const [representativeName, setRepresentativeName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [year, setYear] = useState('');
  const [course, setCourse] = useState('');
  const [totalTeamMembers, setTotalTeamMembers] = useState('');
  const [idCardImage, setIdCardImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');

  const allowedYearValues = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  const [yearError, setYearError] = useState('');
  const [rollNumberError, setRollNumberError] = useState('');




  const dispatch = useDispatch();

  useEffect(() => {
    // Simulating loading completion
    setSubmitting(false);
  }, []);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log('Form submitted');

  //   if (representativeName && rollNumber && year && course && totalTeamMembers && idCardImage && !submitting) {
  //     setSubmitting(true);

  //     const formData = new FormData();
  //     formData.append('representativeName', representativeName);
  //     formData.append('rollNumber', rollNumber);
  //     formData.append('year', year);
  //     formData.append('course', course);
  //     formData.append('totalTeamMembers', totalTeamMembers);
  //     formData.append('idCardImage', idCardImage);

  //     try {
  //       // const response = await fetch('https://i-rix.tech/api/teamregfile', {
  //       //   method: 'POST',
  //       //   body: formData,
  //       // });
  //       const response = await fetch('http://localhost:5000/api/teamregfile', {
  //         method: 'POST',
  //         body: formData,
  //       });

  //       if (!response.ok) {
  //         throw new Error('Failed to register team');
  //       }

  //       // Reset form
  //       resetForm();

  //       // Show toast message
  //       dispatch(showToastTimer('Team registered successfully', 'success'));
  //       setAlertMessage('Team registered successfully');
  //       setAlertType('success');
  //       setShowAlert(true);
  //       console.log('Alert displayed s');

  //     } catch (error) {
  //       console.error('Error:', error);

  //       // Show toast message
  //       dispatch(showToastTimer('Error registering team', 'error'));
  //       setAlertMessage('Error registering team');
  //       setAlertType('error');
  //       setShowAlert(true);
  //       console.log('Alert displayed e' );
  //     } finally {
  //       setSubmitting(false);
  //     }
  //   }
  // }; working 


  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log("Form Submitted");

  //   if (representativeName && rollNumber && year && course && totalTeamMembers && idCardImage && !submitting) {
  //     setSubmitting(true);

  //     const formData = new FormData();
  //     formData.append('representativeName', representativeName);
  //     formData.append('rollNumber', rollNumber);
  //     formData.append('year', year);
  //     formData.append('course', course);
  //     formData.append('totalTeamMembers', totalTeamMembers);
  //     formData.append('idCardImage', idCardImage);

  //     try {
  //       const response = await fetch('http://localhost:5000/api/teamregfile', {
  //         method: 'POST',
  //         body: formData,
  //       });

  //       if (!response.ok) {
  //         throw new Error('Failed to register team');
  //       }

  //       // Reset form
  //       resetForm();

  //       // Show toast message
  //       dispatch(showToastTimer('Team registered successfully', 'success'));

  //       // Set alert message and type
  //       setAlertMessage('Team registered successfully');
  //       setAlertType('success');

  //       // Show the alert with a delay
  //       setShowAlert(true);
  //       setTimeout(() => {
  //         console.log("Alert e");
  //         setShowAlert(false);
  //       }, 6000);

  //     } catch (error) {
  //       console.error('Error:', error);

  //       // Show toast message
  //       dispatch(showToastTimer('Error registering team', 'error'));

  //       // Set alert message and type
  //       setAlertMessage('Error registering team');
  //       setAlertType('error');

  //       // Show the alert with a delay
  //       setShowAlert(true);
  //       setTimeout(() => {
  //         console.log("Alert e");
  //         setShowAlert(false);
  //       }, 6000); // Adjust the delay as needed

  //     } finally {
  //       setSubmitting(false);
  //     }
  //   }
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log("Form Submitted");

  //   if (representativeName && rollNumber && year && course && totalTeamMembers && idCardImage && !submitting) {
  //     setSubmitting(true);

  //     const formData = new FormData();
  //     formData.append('representativeName', representativeName);
  //     formData.append('rollNumber', rollNumber);
  //     formData.append('year', year);
  //     formData.append('course', course);
  //     formData.append('totalTeamMembers', totalTeamMembers);
  //     formData.append('idCardImage', idCardImage);

  //     try {
  //       // const response = await fetch('https://i-rix.tech/api/teamregfile', {
  //       //   method: 'POST',
  //       //   body: formData,
  //       // });
  //       const response = await fetch('http://localhost:5000/api/teamregfile', {
  //         method: 'POST',
  //         body: formData,
  //       });

  //       if (!response.ok) {
  //         throw new Error('Failed to register team');
  //       }

  //       // Reset form
  //       resetForm();

  //       // Show toast message
  //       dispatch(showToastTimer('Team registered successfully', 'success'));

  //       // Display alert message
  //       displayAlert('Team registered successfully', 'success');

  //     } catch (error) {
  //       console.error('Error:', error);

  //       // Show toast message
  //       dispatch(showToastTimer('Error registering team', 'error'));

  //       // Display alert message
  //       displayAlert('Error registering team', 'error');

  //     } finally {
  //       setSubmitting(false);
  //     }
  //   }
  // }; working 2 latest

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Submitted");

    if (representativeName && rollNumber && year && course && totalTeamMembers && idCardImage && !submitting) {
      setSubmitting(true);

      const formData = new FormData();
      formData.append('representativeName', representativeName);
      formData.append('rollNumber', rollNumber);
      formData.append('year', year);
      formData.append('course', course);
      formData.append('totalTeamMembers', totalTeamMembers);
      formData.append('idCardImage', idCardImage);

      try {
        const response = await fetch('https://i-rix.tech/api/teamregfile', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          if (response.status === 429) {
            // Too many submissions error
            throw new Error('Too many submissions from this IP');
          } else {
            throw new Error('Failed to register team');
          }
        }

        // Reset form
        resetForm();

        // Show toast message
        dispatch(showToastTimer('Team registered successfully', 'success'));

        // Display alert message
        displayAlert('Team registered successfully', 'success');
        console.log("Alert s");

      } catch (error) {
        console.error('Error:', error);

        if (error.message === 'Too many submissions from this IP') {
          // Display the error message for too many submissions
          displayAlert('Too many submissions from this IP', 'error');
        } else {
          // Show toast message for other errors
          dispatch(showToastTimer('Error registering team', 'error'));

          // Display alert message for other errors
          displayAlert('Error registering team', 'error');
          console.log("Alert e");
        }
      } finally {
        setSubmitting(false);
      }
    }
  };


  const displayAlert = (message, type) => {
    // Set alert message and type
    setAlertMessage(message);
    setAlertType(type);

    // Show the alert with a delay
    setShowAlert(true);
    setTimeout(() => {
      console.log("Alert e");
      setShowAlert(false);
    }, 6000); // Adjust the delay as needed
  };

  const validateField = (value, field) => {
    switch (field) {
      case 'year':
        setYearError(validateYear(value));
        break;
      case 'rollNumber':
        setRollNumberError(validateRollNumber(value));
        break;
      // Add cases for other fields as needed
      default:
        break;
    }
  };


  const validateYear = (value) => {
    // Your validation logic for the Year field
    return allowedYearValues.includes(value) ? null : 'Invalid Year. Please select a valid Year.';
  };

  const validateRollNumber = (value) => {
    // Your validation logic for the Roll Number field
    const regex = /^[A-Za-z0-9]+$/;
    return regex.test(value) ? null : 'Invalid Roll Number. Please enter a valid Roll Number.';
  };





  const resetForm = () => {
    setRepresentativeName('');
    setRollNumber('');
    setYear('');
    setCourse('');
    setTotalTeamMembers('');
    setIdCardImage(null);
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check file size
    if (selectedFile.size > 5 * 1024 * 1024) {
      // Show warning if the file size exceeds 5MB
      setAlertMessage('File size exceeds 5MB. Please choose a smaller file.');
      setAlertType('warning');
      setShowAlert(true);
    } else {
      // Check file type (extension)
      const allowedExtensions = ['png', 'jpg', 'jpeg'];
      const fileExtension = selectedFile.name.split('.').pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        // File type is allowed, set idCardImage
        setIdCardImage(selectedFile);
      } else {
        // Show warning if the file type is not allowed
        setAlertMessage('Please choose a PNG or JPG file.');
        setAlertType('warning');
        setShowAlert(true);
      }
    }
  };


  // return (

  //   <Container>
  //     <form onSubmit={handleFormSubmit} encType="multipart/form-data">
  //       <Grid container spacing={{ lg: 10, xs: 4 }}>
  //         <Grid item lg={6} md={12} sm={12}>
  //           <Input
  //             width="100%"
  //             label="Representative Name"
  //             placeholder="Representative Name"
  //             value={representativeName}
  //             onChange={(e) => {
  //               const inputValue = e.target.value;
  //               if (/^[A-Za-z\s]*$/.test(inputValue)) {
  //                 setRepresentativeName(inputValue);
  //               }
  //             }}
  //           />
  //         </Grid>

  //         <Grid item lg={6} md={12} sm={12}>
  //           <Input
  //             width="100%"
  //             label="Roll Number"
  //             placeholder="Roll Number"
  //             value={rollNumber}
  //             onChange={(e) => setRollNumber(e.target.value)}
  //           />
  //         </Grid>
  //         <Grid item lg={6} md={12} sm={12}>
  //           <Input
  //             width="100%"
  //             label="Year"
  //             placeholder="Year"
  //             value={year}
  //             onChange={(e) => setYear(e.target.value)}
  //           />
  //         </Grid>
  //         <Grid item lg={6} md={12} sm={12}>
  //           <Input
  //             width="100%"
  //             label="Course"
  //             placeholder="Course"
  //             value={course}
  //             onChange={(e) => setCourse(e.target.value)}
  //           />
  //         </Grid>
  //         <Grid item lg={6} md={12} sm={12}>
  //           <Input
  //             width="100%"
  //             label="Total Team Members"
  //             placeholder="Total Team Members"
  //             value={totalTeamMembers}
  //             onChange={(e) => {
  //               // Ensure the entered value is numeric
  //               const numericValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
  //               setTotalTeamMembers(numericValue);
  //             }}
  //           />
  //         </Grid>

  //         <Grid item lg={6} md={12} sm={12}>
  //           <Input
  //             width="100%"
  //             type="file"
  //             label="Upload ID Card Image"
  //             onChange={(e) => setIdCardImage(e.target.files[0])}
  //           />
  //         </Grid>
  //       </Grid>
  //       <div style={{ margin: '3.5rem 0 1.8rem 0', display: 'flex', justifyContent: 'center' }}>
  //         <Button type="submit" disabled={submitting}>
  //           {submitting ? 'Submitting...' : 'Register Team'}
  //         </Button>
  //       </div>
  //     </form>

  //     {showAlert && (
  //       <MuiAlert
  //         severity={alertType}
  //         onClose={() => setShowAlert(false)}
  //         sx={{ position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}
  //       >
  //         {alertMessage}
  //       </MuiAlert>
  //     )}
  //   </Container>
  // );

  return (
    <Container style={{
      marginTop: '5%',
      '@media (max-width: 600px)': {
        marginTop: '12%', // Adjust the value for smaller screens
      },
    }}>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <Grid container spacing={{ lg: 10, xs: 4 }}>
          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Representative Name"
              placeholder="Representative Name"
              value={representativeName}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (/^[A-Za-z\s]*$/.test(inputValue) && inputValue.length <= 30) {
                  setRepresentativeName(inputValue);
                }
              }}
            />
          </Grid>

          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Roll Number"
              placeholder="Roll Number"
              value={rollNumber}
              onChange={(e) => {
                const enteredRollNumber = e.target.value;
                setRollNumber(enteredRollNumber);

                // Validation for Roll Number
                if (!/^\d+$/.test(enteredRollNumber) && !/^[A-Za-z\d]*$/.test(enteredRollNumber)) {
                  setRollNumberError('Invalid Roll Number. It should contain both letters and numbers, or only numbers.');
                } else if (/^[A-Za-z]+$/.test(enteredRollNumber)) {
                  setRollNumberError('Invalid Roll Number. It should contain both letters and numbers, or only numbers.');
                } else if (enteredRollNumber.length > 17) {
                  setRollNumberError('Roll Number should be less than or equal to 17 characters.');
                } else {
                  setRollNumberError('');
                }
              }}
            />
            {rollNumberError && (
               <p style={{ color: 'red', marginTop: '10%' }}>{rollNumberError}</p>
            )}
          </Grid>

          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Year"
              placeholder="Enter Year (e.g., First Year)"
              value={year}
              onChange={(e) => {
                const enteredYear = e.target.value.toLowerCase(); // Convert to lowercase
                setYear(e.target.value);

                // Validation for Year
                if (!allowedYearValues.map(value => value.toLowerCase()).includes(enteredYear)) {
                  setYearError('Invalid Year. Please select a valid Year.');
                } else {
                  setYearError('');
                }
              }}
              onBlur={() => {
                // Additional validation or actions on blur if needed
              }}
            />
            {yearError && (
               <p style={{ color: 'red', marginTop: '10%' }}>{yearError}</p>
            )}
          </Grid>

          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Course"
              placeholder="Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </Grid>

          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Total Team Members"
              placeholder="Total Team Members"
              value={totalTeamMembers}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                setTotalTeamMembers(numericValue);
              }}
            />
            {totalTeamMembers > 22 && (
              <p style={{ color: 'red', marginTop: '10%' }}>Total team members should be less than or equal to 22.</p>
            )}
          </Grid>

          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              type="file"
              label="Upload ID Card Image"
              onChange={(e) => handleFileChange(e)}
            />
            {idCardImage && idCardImage.size > 5 * 1024 * 1024 && (
               <p style={{ color: 'red', marginTop: '10%' }}>File size exceeds 5MB. Please choose a smaller file.</p>
            )}
          </Grid>
        </Grid>

        <div style={{ margin: '3.5rem 0 1.8rem 0', display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Register Team'}
          </Button>
        </div>
      </form>

      {showAlert && (
        <MuiAlert
          severity={alertType}
          onClose={() => setShowAlert(false)}
          sx={{ position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}
        >
          {alertMessage}
        </MuiAlert>
      )}
    </Container>
  );


}


export default TeamRegistration;
