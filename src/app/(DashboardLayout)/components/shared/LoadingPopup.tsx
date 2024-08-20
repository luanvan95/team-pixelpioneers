// components/LoadingPopup.tsx
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, CircularProgress, Typography, Button } from '@mui/material';

interface LoadingPopupProps {
  open: boolean;
  onClose: () => void;
}

const LoadingPopup: React.FC<LoadingPopupProps> = ({ open, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open) {
      // Simulate loading for 5 seconds
      const timer = setTimeout(() => {
        setLoading(false);
        onClose(); // Close the popup after loading is done
      }, 2000);

      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [open, onClose]);

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="loading-popup">
      <DialogContent>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <CircularProgress />
            <Typography variant="h6" style={{ marginTop: '20px' }}>Loading...</Typography>
          </div>
        ) : (
          <Typography variant="h6">Loading Complete!</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoadingPopup;
