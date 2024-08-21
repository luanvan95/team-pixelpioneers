import React from "react";
import { Chip, Stack, Typography, Box } from "@mui/material";

interface HashtagsDisplayProps {
  hashtags: {
    new_creative_hashtags: string[];
    current_trending_hashtags: string[];
  };
}

const HashtagsDisplay: React.FC<HashtagsDisplayProps> = ({ hashtags }) => {
  return (
    <Box>
      {/* Display New Creative Hashtags */}
      <Box mb={2}>
        <Typography variant="h6" mb={1}>
          New Creative Hashtags
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {hashtags.new_creative_hashtags && hashtags.new_creative_hashtags.map((hashtag, index) => (
            <Chip key={index} label={hashtag} />
          ))}
        </Stack>
      </Box>

      {/* Display Current Trending Hashtags */}
      <Box>
        <Typography variant="h6" mb={1}>
          Current Trending Hashtags
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {hashtags.current_trending_hashtags && hashtags.current_trending_hashtags.map((hashtag, index) => (
            <Chip key={index} label={hashtag} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default HashtagsDisplay;
