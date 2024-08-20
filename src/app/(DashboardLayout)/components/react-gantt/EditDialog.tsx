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
  Tabs,
  Tab,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Data {
  contentWriter: string;
  contentWriter2: string;
  contentWriter3: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

interface FullScreenDialogProps {
  open: boolean;
  onClose: () => void;
  data: Data | null;
  title: String | null;
}

const Transition = React.forwardRef(function Transition(
  props: any,
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-screen-tabpanel-${index}`}
      aria-labelledby={`full-screen-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const FullScreenDialog: React.FC<FullScreenDialogProps> = ({
  open,
  onClose,
  data,
  title,
}) => {
  console.log(title, data);
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const [field1, setField1] = useState(data?.field1 || "a");
  const [field2, setField2] = useState(data?.field2 || "b");

  const handleField1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setField1(event.target.value);
  };

  const handleField2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setField2(event.target.value);
  };

  const handleSave = () => {
    onSave({ field1, field2 });
    onClose(); // Close the dialog after saving
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <DialogTitle style={{ textTransform: "capitalize" }}>
        {data?.TaskName }
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Field 1"
          fullWidth
          variant="outlined"
          value={field1}
          onChange={handleField1Change}
        />
        <TextField
          margin="dense"
          label="Field 2"
          fullWidth
          variant="outlined"
          value={field2}
          onChange={handleField2Change}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClose} color="error">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>

      {/* <DialogContent>
        <Box>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="full-screen dialog tabs"
          >
            <Tab label="Content Writer" />
            <Tab label="Content Writer2" />
            <Tab label="Content Writer3" />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <p>{data?.contentWriter || 'Default Content for Content Writer'}</p>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <p>{data?.contentWriter2 || 'Default Content for Content Writer2'}</p>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <p>{data?.contentWriter3 || 'Default Content for Content Writer3'}</p>
          </TabPanel>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Close
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default FullScreenDialog;
