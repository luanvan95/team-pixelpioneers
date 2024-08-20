"use client";
import { Button, Typography, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import ReactGantt from "@/app/(DashboardLayout)/components/react-gantt/ReactGantt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { overviewData, overviewAIData } from "@/data/overviewData";
import { useEffect, useLayoutEffect, useState } from "react";
import LoadingPopup from "@/app/(DashboardLayout)/components/shared/LoadingPopup";
import {
  generateCaptions,
  generateHashTag,
  generateSlogan,
  generateImages,
} from "@/utils/lib/api";
import { useRouter } from "next/navigation";

const SamplePage2 = ({ params }) => {
  const [displayButton, setDisplayButton] = useState(true);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [campaign, setCampaign]: any = useState();
  const [dataSource, setDataSource]: any = useState();

  const fetchCampaign = async (id) => {
    try {
      const response = await fetch(
        "https://www.123rf.com/apicore-texttoimage/campaign/retrieve",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ campaign_id: params.id }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { data } = await response.json();
      setCampaign(data);

      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const handleActionButtonClick = async (props) => {
    if (props) {
      setPopupOpen(true);
      // call API to generate data
      try {
        const [result1, result2, result3] = await Promise.all([
          generateSlogan({ campaign_id: params.id }),
          generateHashTag({ campaign_id: params.id }),
          generateImages({
            campaign_id: params.id,
            design:
              "Modern minimalistic with warm tones, palm leaves, opened coconuts and lavander surrounding the bar of soap",
          }),
          // generateCaptions({ campaign_id: params.id }),
        ]);

        console.log("Result from endpoint1:", result1);
        console.log("Result from endpoint1:", result2);
        console.log("Result from endpoint1:", result3);
        // console.log("Result from endpoint1:", result4);
        handleClosePopup();
      } catch (error) {
        console.error("Error during POST requests:", error);
      }
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setDisplayButton(false);
  };

  useEffect(() => {
    if (params.id) {
      fetchCampaign(params.id);
    }
  }, [params.id]);

  return (
    <PageContainer title="Gantt Chart" description="This is Sample page">
      <DashboardCard
        title="Gantt Chart"
        displayButton={displayButton}
        onActionButtonClick={handleActionButtonClick}
      >
        {campaign && (
          <Box display="flex" flexDirection="column" height="100%">
            {(displayButton || isPopupOpen) && (
              <ReactGantt
                campaignName={campaign.campaign_name}
                dataSource={overviewData}
              />
            )}
            {!displayButton && !isPopupOpen && (
              <ReactGantt
                campaignName={campaign.campaign_name}
                dataSource={overviewAIData}
              />
            )}
            <LoadingPopup open={isPopupOpen} onClose={handleClosePopup} />
          </Box>
        )}
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage2;
