"use client";
import { Button, Typography, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import ReactGantt from "@/app/(DashboardLayout)/components/react-gantt/ReactGantt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { overviewData, overviewAIData } from "@/data/overviewData";
import { useEffect, useLayoutEffect, useState } from "react";
import LoadingPopup from "@/app/(DashboardLayout)/components/shared/LoadingPopup";
import { postRequest1, postRequest2, postRequest3 } from '@/lib/api';


const SamplePage2 = () => {
  const [displayButton, setDisplayButton] = useState(true);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleActionButtonClick = async (props) => {
    if (props) {
      setPopupOpen(true);
      // call API to generate data
      try {
        // const [result1, result2, result3] = await Promise.all([
        //   postRequest1(data1),
        //   postRequest2(data2),
        //   postRequest3(data3),
        // ]);
  
        // console.log('Result from endpoint1:', result1);
        // console.log('Result from endpoint2:', result2);
        // console.log('Result from endpoint3:', result3);
      } catch (error) {
        console.error('Error during POST requests:', error);
      }
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setDisplayButton(false);
  };

  return (
    <PageContainer title="Gantt Chart" description="This is Sample page">
      <DashboardCard
        title="Gantt Chart"
        displayButton={displayButton}
        onActionButtonClick={handleActionButtonClick}
      >
        <Box display="flex" flexDirection="column" height="100%">
          {(displayButton || isPopupOpen) && <ReactGantt dataSource={overviewData} />}
          {!displayButton && !isPopupOpen && <ReactGantt dataSource={overviewAIData} />}
          <LoadingPopup open={isPopupOpen} onClose={handleClosePopup} />
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage2;
