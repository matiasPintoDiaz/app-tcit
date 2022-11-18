import React from "react";
import { AppBar, Box, Container, Typography, Toolbar } from "@mui/material";

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} align="center" variant="h6">
              App de Posts TCIT
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
