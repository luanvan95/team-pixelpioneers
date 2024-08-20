"use client";
import { Button, Typography, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import ReactGantt from "@/app/(DashboardLayout)/components/react-gantt/ReactGantt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { overviewData, overviewAIData } from "@/data/overviewData";
import { useEffect, useLayoutEffect, useState } from "react";

const SamplePage2 = () => {
  const [ready, setReady] = useState(false);
  const [dataSource, setDataSource] = useState({});
  const [displayButton, setDisplayButton] = useState(true);
 
  const handleClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to perform this action?"
    );

    // If the user clicks "OK", proceed with setting the data
    if (confirmed) {
      setDataSource(overviewAIData);
      setDisplayButton(false);
    }
  };

  useLayoutEffect(() => {
    setDataSource(dataSource);
    setReady(true);
  }, []);

  return (
    <PageContainer title="Gantt Chart" description="This is Sample page">
      <DashboardCard title="Gantt Chart 2">
        <Box display="flex" flexDirection="column" height="100%">
          <Box flexGrow={1}>
            {ready && (
              <ReactGantt ds={dataSource} aiGenerate={displayButton} />
            )}
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
