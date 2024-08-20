"use client";
import { Button, Typography, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import ReactGantt from "@/app/(DashboardLayout)/components/react-gantt/ReactGantt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { overviewData, overviewAIData } from "@/data/overviewData";
import { useEffect, useLayoutEffect, useState } from "react";
import LoadingPopup from "@/app/(DashboardLayout)/components/shared/LoadingPopup";

const SamplePage2 = (params) => {
  const campaignID = params.id;

  const [ready, setReady] = useState(false);
  const [displayButton, setDisplayButton] = useState(true);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to perform this action?"
    );

    // If the user clicks "OK", proceed with setting the data
    if (confirmed) {
      setPopupOpen(true);
      setDisplayButton(false);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  useLayoutEffect(() => setReady(true));

  return (
    <PageContainer title="Gantt Chart" description="This is Sample page">
      <DashboardCard title="Gantt Chart 2">
        <Box display="flex" flexDirection="column" height="100%">
          <Box flexGrow={1}>
            {displayButton && <ReactGantt dataSource={overviewData} />}
            {! displayButton && <ReactGantt dataSource={overviewAIData} />}
            <LoadingPopup open={isPopupOpen} onClose={handleClosePopup} />
          </Box>
          <Box display="flex" justifyContent="flex-end" pt={1}>
            {ready && displayButton && (
              <Button variant="contained" onClick={handleClick}>
                Generate with AI
                <PsychologyIcon style={{ marginLeft: "5px" }} />
              </Button>
            )}
          </Box>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage2;
