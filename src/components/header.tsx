import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";




const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {

 const router = useRouter();
 const { locale } = router;
 const {i18n } = useTranslation("translation");

 const handlechange = (e: { target: { value: any; }; }) => {
   const language = e.target.value;
   i18n.changeLanguage(language); //change the language
 };

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image src="/siwma_logo.png" alt="Logo" width={50} height={50} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "common.black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <FormControl sx={{ width: 100 }}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // defaultValue={locale}
              // value={locale}
              label="language"
              onChange={handlechange}
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="zn">ZN</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
