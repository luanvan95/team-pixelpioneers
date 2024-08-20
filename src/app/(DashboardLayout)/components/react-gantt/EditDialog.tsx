import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, IconButton, Slide, Tabs, Tab, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
}

const Transition = React.forwardRef(function Transition(props: any, ref: React.Ref<unknown>) {
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

const FullScreenDialog: React.FC<FullScreenDialogProps> = ({ open, onClose, data }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <DialogTitle>
        Full-Screen Dialog
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
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
      </DialogActions>
    </Dialog>
  );
};

export default FullScreenDialog;
