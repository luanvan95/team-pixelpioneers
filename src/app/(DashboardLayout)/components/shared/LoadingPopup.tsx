// components/LoadingPopup.tsx
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  CircularProgress,
  Typography,
  Button,
} from "@mui/material";

interface LoadingPopupProps {
  open: boolean;
  onClose: () => void;
}

const LoadingPopup: React.FC<LoadingPopupProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="loading-popup">
      <DialogContent>
        {open && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <CircularProgress />
            <Typography variant="h6" style={{ marginTop: "20px" }}>
              Loading...
            </Typography>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoadingPopup;
