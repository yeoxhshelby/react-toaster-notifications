import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

import en from "../locales/en";
import zn from "../locales/zn";


const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {

 const router = useRouter();
 const { locale } = router;
 const t = locale === "en" ? en : zn;

 const changeLanguage = (e: { target: { value: any; }; }) => {
   const locale = e.target.value;
   router.push(router.pathname, router.asPath, { locale });
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
              defaultValue={locale}
              value={locale}
              label="language"
              onChange={changeLanguage}
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="zn">ZN</MenuItem>
              <MenuItem value="kr">KR</MenuItem>
              <MenuItem value="span">SPAN</MenuItem>
              <MenuItem value="jpn">JPN</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
