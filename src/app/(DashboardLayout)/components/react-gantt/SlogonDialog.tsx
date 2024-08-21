import React, { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  IconButton,
  Slide,
  Paper,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HashtagsDisplay from "@/app/(DashboardLayout)/components/shared/HashtagsDisplay";

interface SlogonDialogProps {
  open: boolean;
  onClose: () => void;
  data: any | null;
  title: any | null;
}

const Transition = React.forwardRef(function Transition(
  props: any,
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SlogonDialog: React.FC<SlogonDialogProps> = ({
  open,
  onClose,
  data,
  title = "",
}) => {
  const [field1, setField1] = useState(data?.caption || "");
  const [field2, setField2] = useState(data?.slogon || "");
  const [field3, setField3] = useState(data?.hashtags || "");
  const [field4, setField4] = useState(data?.images || "");

  const handleSave = () => {
    // onSave({ field1, field2 });
    onClose(); // Close the dialog after saving
  };

  const hashtags = {
    new_creative_hashtags: [
      "#VeganSoapSelfCare",
      "#OrganicSoapRevolution",
      "#SustainableSkincareJourney",
      "#NaturallyNourished",
      "#EcoLuxuryLiving",
    ],
    current_trending_hashtags: [
      "#VeganLife",
      "#CleanBeauty",
      "#SkincareTips",
      "#SustainableLiving",
      "#EcoFriendly",
    ],
  };

  const imageUrls = [
    "https://cdn.leonardo.ai/users/757d52a4-3dc2-4adc-acdf-4f510637c8e7/generations/263bf895-39d4-4312-a1e8-8ab724ea8c13/Default_The_design_features_a_modern_minimalistic_aesthetic_wi_0.jpg",
    "https://cdn.leonardo.ai/users/757d52a4-3dc2-4adc-acdf-4f510637c8e7/generations/263bf895-39d4-4312-a1e8-8ab724ea8c13/Default_The_design_features_a_modern_minimalistic_aesthetic_wi_1.jpg",
    "https://cdn.leonardo.ai/users/757d52a4-3dc2-4adc-acdf-4f510637c8e7/generations/263bf895-39d4-4312-a1e8-8ab724ea8c13/Default_The_design_features_a_modern_minimalistic_aesthetic_wi_2.jpg",
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition} // Ensure Transition is defined or imported
      maxWidth="md"
      fullWidth
    >
      <DialogTitle
        sx={{
          textTransform: "capitalize",
          position: "relative",
          paddingBottom: "0px",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {/* Text Fields for Caption and Slogan */}
        <Box
          mt={3}
          mb={3}
          p={2}
          sx={{ borderRadius: "8px", boxShadow: 1, backgroundColor: "#f5f5f5" }}
        >
          <Typography variant="h6" mb={2}>
            Content
          </Typography>
          <Box mb={3}>
            <TextField
              margin="dense"
              label="Caption"
              fullWidth
              variant="outlined"
              value={field1}
              disabled
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Slogan"
              fullWidth
              variant="outlined"
              value={field2}
              disabled
            />
          </Box>
        </Box>

        {/* Hashtags Display */}
        <Box
          mb={3}
          p={2}
          sx={{ borderRadius: "8px", boxShadow: 1, backgroundColor: "#f5f5f5" }}
        >
          <Typography variant="h6" mb={2}>
            Hashtags
          </Typography>
          <HashtagsDisplay hashtags={hashtags} />
        </Box>

        {/* Image Gallery */}
        {/* {imageUrls.length > 0 && (
          <Box mt={3}>
            <Typography variant="h6" mb={2}>
              Image Gallery
            </Typography>
            <Grid container spacing={2}>
              {imageUrls.map((url, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    elevation={3}
                    sx={{ borderRadius: '8px', overflow: 'hidden' }}
                  >
                    <img
                      src={url}
                      alt={`Image ${index}`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                      }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )} */}
      </DialogContent>

      <DialogActions>
        <Button variant="text" onClick={onClose} color="error">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SlogonDialog;
