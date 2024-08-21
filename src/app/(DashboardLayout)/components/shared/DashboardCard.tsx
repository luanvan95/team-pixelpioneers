import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useState } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
  displayButton?: boolean;
  onActionButtonClick?: (data: any) => void;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
  displayButton,
  onActionButtonClick
}: Props) => {
  const handleClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to perform this action?"
    );

    // If the user clicks "OK", proceed with setting the data
    onActionButtonClick(confirmed); // Pass data to parent
   
  };

  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "30px" }}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={"center"}
              mb={3}
            >
              <Box
                flex={1}
                direction="row"
                display="inline-flex"
                justifyContent="space-between"
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  {title ? <Typography variant="h5">{title}</Typography> : ""}

                  {subtitle ? (
                    <Typography variant="subtitle2" color="textSecondary">
                      {subtitle}
                    </Typography>
                  ) : (
                    ""
                  )}
                </Stack>

                {displayButton && (
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    endIcon={<PsychologyIcon />}
                    sx={{
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
                  >
                    Generate with
                  </Button>
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
