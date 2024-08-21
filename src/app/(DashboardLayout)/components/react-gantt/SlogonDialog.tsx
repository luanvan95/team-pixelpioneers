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
  const [loading, setLoading] = useState<boolean>(false);
  
  const [field1, setField1] = useState(data?.captions[0] || "");
  const [field2, setField2] = useState(data?.slogons[0] || "");
  const [hashtags, setField3] = useState(data?.hashtags || []);
  const [imageUrls, setField4] = useState(data?.imageUrls || []);

  const handleAIGenerate = async () => {
    setLoading(true); // Start loading
    try {
      // Simulate a data generation process with a delay
      setTimeout(() => {
        console.log("Data generated");
        setLoading(false); // Stop loading after the function completes
      }, 2000); // Adjust delay as needed
    } finally {
      // setLoading(false); // Stop loading after the function completes
    }
  };

  const handleSave = () => {
    // onSave({ field1, field2 });
    onClose(); // Close the dialog after saving
  };

  // const hashtags = {
  //   new_creative_hashtags: [
  //     "#VeganSoapSelfCare",
  //     "#OrganicSoapRevolution",
  //     "#SustainableSkincareJourney",
  //     "#NaturallyNourished",
  //     "#EcoLuxuryLiving",
  //   ],
  //   current_trending_hashtags: [
  //     "#VeganLife",
  //     "#CleanBeauty",
  //     "#SkincareTips",
  //     "#SustainableLiving",
  //     "#EcoFriendly",
  //   ],
  // };

  // const imageUrls = [
  //   "https://cdn.leonardo.ai/users/757d52a4-3dc2-4adc-acdf-4f510637c8e7/generations/263bf895-39d4-4312-a1e8-8ab724ea8c13/Default_The_design_features_a_modern_minimalistic_aesthetic_wi_0.jpg",
  //   "https://cdn.leonardo.ai/users/757d52a4-3dc2-4adc-acdf-4f510637c8e7/generations/263bf895-39d4-4312-a1e8-8ab724ea8c13/Default_The_design_features_a_modern_minimalistic_aesthetic_wi_1.jpg",
  //   "https://cdn.leonardo.ai/users/757d52a4-3dc2-4adc-acdf-4f510637c8e7/generations/263bf895-39d4-4312-a1e8-8ab724ea8c13/Default_The_design_features_a_modern_minimalistic_aesthetic_wi_2.jpg",
  // ];

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
        {title}
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: "absolute", right: 15, top: 8 }}
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
            Content Detail
          </Typography>
          <Box mb={3}>
            <TextField
              style={{
                color: "#51585e",
              }}
              margin="dense"
              label="Caption"
              fullWidth
              variant="outlined"
              value={field1}
              // disabled
              sx={{ mb: 2 }}
            />
            <TextField
              style={{
                color: "#51585e",
              }}
              margin="dense"
              label="Slogan"
              fullWidth
              variant="outlined"
              value={field2}
              // disabled
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

        <Box mt={2} display="flex" justifyContent="center">
              <Button
                // variant="contained"
                color="primary"
                onClick={handleAIGenerate}
                sx={{
                  padding: "12px 24px",
                  fontSize: "16px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  transition:
                    "background-color 0.3s, transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    backgroundColor: "#003d79",
                    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
                    transform: "scale(1.05)",
                    color: "#fff",
                  },
                  "&:active": {
                    backgroundColor: "#002c61",
                    transform: "scale(0.98)",
                  },
                  animation: "pulse 1.5s infinite", // Add pulse animation
                }}
                disabled={loading} // Disable button while loading
                endIcon={
                  loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : undefined
                }
              >
                {loading ? "Generating..." : "Regenerate Content"}
              </Button>
            </Box>

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

      {/* <DialogActions sx={{ padding: "15px" }}>
        <Button variant="text" onClick={onClose} color="error">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default SlogonDialog;
