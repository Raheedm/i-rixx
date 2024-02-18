import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Input from '../components/input';
import Button from '../components/button';
import { useDispatch } from 'react-redux';
import { showToastTimer } from '../redux/actions/toast';
import MuiAlert from '@mui/material/Alert';

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

  const dispatch = useDispatch();

  useEffect(() => {
    // Simulating loading completion
    setSubmitting(false);
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

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
          throw new Error('Failed to register team');
        }

        // Reset form
        resetForm();

        // Show toast message
        dispatch(showToastTimer('Team registered successfully', 'success'));
        setAlertMessage('Team registered successfully');
        setAlertType('success');
        setShowAlert(true);
      } catch (error) {
        console.error('Error:', error);

        // Show toast message
        dispatch(showToastTimer('Error registering team', 'error'));
        setAlertMessage('Error registering team');
        setAlertType('error');
        setShowAlert(true);
      } finally {
        setSubmitting(false);
      }
    }
  };

  const resetForm = () => {
    setRepresentativeName('');
    setRollNumber('');
    setYear('');
    setCourse('');
    setTotalTeamMembers('');
    setIdCardImage(null);
  };

  return (
    <Container>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <Grid container spacing={{ lg: 10, xs: 4 }}>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Representative Name"
                placeholder="Representative Name"
                value={representativeName}
                onChange={(e) => setRepresentativeName(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Roll Number"
                placeholder="Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Year"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
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
                onChange={(e) => setTotalTeamMembers(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                type="file"
                label="Upload ID Card Image"
                onChange={(e) => setIdCardImage(e.target.files[0])}
              />
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
