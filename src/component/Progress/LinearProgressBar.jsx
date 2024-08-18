import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 20,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 20,
    backgroundColor: theme.palette.mode === "light" ? "#5C4FC3" : "#F5F7F9",
  },
}));

export default function LinearProgressBar({ count }) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={count} />
    </Stack>
  );
}
