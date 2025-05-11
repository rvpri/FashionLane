import { Box, CircularProgress } from "@mui/material";

const Loading = () => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 50 }}>
    <CircularProgress />
  </Box>
);

export default Loading;
