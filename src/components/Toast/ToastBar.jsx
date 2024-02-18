import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

export default function ToastBar() {
  const [isShowing, setIsShowing] = useState(false);
  const [message, setMessage] = useState('');
  const [toastType, setToastType] = useState('info');

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsShowing(false);
  };

  const clearToast = () => {
    setIsShowing(false);
    setMessage('');
    setToastType('info');
  };

  const handleShowToast = (newMessage, newToastType = 'info') => {
    setMessage(newMessage);
    setToastType(newToastType);
    setIsShowing(true);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div>
      <Snackbar
        open={isShowing}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={toastType} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
