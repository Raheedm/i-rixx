import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import './Events.css'; 
// import '../../src/fonts.css'

const Events = () => {
    return (
        <div className="container">
        <Grid container spacing={2} justifyContent="center" alignItems="center"  > {/* Center the grid */}
          <Grid  item xs={12} sm={6} md={4}> {/* Adjust column widths as needed */}
            <Card  className="card" style={{ backgroundColor: '#3b9bbf' }}>
              <CardActionArea component={Link} to="/Gaming">
                <CardContent className="card-content">
                  <Typography variant="h5" component="h2" className="card-title" style={{ fontFamily: 'Blanka' }}>
                    Gaming
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className="card-description">
                    Click here for gaming events.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
      
          <Grid item xs={12} sm={6} md={4}> {/* Adjust column widths as needed */}
            <Card className="card" style={{ backgroundColor: '#3b9bbf' }}>
              <CardActionArea component={Link} to="/eventslist">
                <CardContent className="card-content">
                  <Typography variant="h5" component="h2" className="card-title" style={{ fontFamily: 'Blanka' }}>
                    Technical
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className="card-description">
                    Click here for Technical events.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
      
          <Grid item xs={12} sm={6} md={4}> {/* Adjust column widths as needed */}
            <Card className="card" style={{ backgroundColor: '#3b9bbf' }}>
              <CardActionArea component={Link} to="/Gaming">
                <CardContent className="card-content">
                  <Typography variant="h5" component="h2" className="card-title" style={{ fontFamily: 'Blanka' }}>
                    Cultural
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className="card-description">
                    Click here for Cultural events.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        </div>
      );
      
      
};

export default Events;


// import React, { useState, useEffect } from 'react';
// import Border from '../assets/Flagship.png';
// import Border2 from '../assets/Flagship3.png';
// import blueBorder from '../assets/Flagshipblue.png';
// import blueBorder2 from '../assets/Flagshipblue2.png';
// import hoverAudioFile from '../assets/hoveraudio.mp3'; // Import the audio file
// import './Events.css';

// function Events() {
//   const [audioPlaying, setAudioPlaying] = useState(false);
//   const [userInteracted, setUserInteracted] = useState(false);

//   const playAudioOnHover = () => {
//     if (userInteracted) {
//       const hoverAudio = new Audio(hoverAudioFile); // Create audio element with imported file
//       setAudioPlaying(true);
//       hoverAudio.play();
//     }
//   };

//   useEffect(() => {
//     const handleInteraction = () => {
//       setUserInteracted(true);
//     };

//     document.addEventListener('click', handleInteraction);

//     return () => {
//       document.removeEventListener('click', handleInteraction);
//     };
//   }, []);

//   return (
//     <div className='section'>
//       <div className="title">
//         <h2>Events</h2>
//         <div className="dots">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//       <ul className="list">
//         <li className="item" onMouseEnter={playAudioOnHover}>
//           <a href="/events/flagship" className="link">
//             <img src={Border} className="image initial-image" alt="Initial" />
//             <img src={blueBorder} className="image hover-image" alt="Hover" />
//             <div className="text">Gaming</div>
//           </a>
//         </li>
//         <li className="item" onMouseEnter={playAudioOnHover}>
//           <a href="/events/flagship" className="link">
//             <img src={Border2} className="image initial-image" alt="Initial" />
//             <img src={blueBorder2} className="image hover-image" alt="Hover" />
//             <div className="text">Gaming</div>
//           </a>
//         </li>
//       </ul>
//       {audioPlaying && (
//         <audio autoPlay={false} src={hoverAudioFile} onEnded={() => setAudioPlaying(false)} />
//       )}
//     </div>
//   );
// }

// export default Events;
