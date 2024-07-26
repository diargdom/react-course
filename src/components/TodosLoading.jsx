import { Box, Skeleton } from "@mui/material";
import React from "react";

function TodosLoading() {
  return (
    <Box>
      <Skeleton height={60} />
      <Skeleton animation="wave" height={60} />
      <Skeleton animation="wave" height={60} />
      <Skeleton animation="wave" height={60} />
      <Skeleton animation={false} height={60} />
    </Box>
  );
}

export { TodosLoading };
