import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import img from "../adv.png";
import { useRouter } from "next/router";
import Link from "next/link";

import en from "../locales/en";
import zn from "../locales/zn";
import ResponsiveAppBar from "@/components/header";

function MyCarousel() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : zn;

  const items = [
    {
      src: img,
      alt: "Image 1",
    },
    {
      src: img,
      alt: "Image 2",
    },
    {
      src: img,
      alt: "Image 3",
    },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <main className="flex flex-col justify-between p-8">
        <Carousel>
          {items.map((item, index) => (
            <Paper key={item.alt}>
              <Image
                key={item.alt}
                src={item.src}
                alt={item.alt}
                width={1950}
                height={300}
              />
            </Paper>
          ))}
        </Carousel>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              bgcolor: "#F86262",
              width: 100,
              fontSize: 20,
              color: "white",
              textAlign: "center",
              borderRadius: 2,
            }}
          >
            Buy
          </Box>
          <Typography sx={{ marginLeft: 3, fontSize: 25, fontWeight: "bold" }}>
            Long Beams
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 35, fontWeight: "bold", marginTop: 2 }}>
          $300.00
        </Typography>
        <Divider />
        <Typography sx={{ fontSize: 25, fontWeight: "bold", marginTop: 2 }}>
          {t.description}
        </Typography>
        <Box>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae ligula erat. Proin blandit tortor gravida enim consectetur
            porttitor. Suspendisse at dictum urna. Vestibulum velit velit,
            placerat at magna ut, faucibus posuere dolor. Donec lorem orci,
            venenatis sit amet dapibus a, facilisis sed felis. Sed blandit orci
            facilisis volutpat dapibus. Pellentesque non sapien erat. Sed vitae
            dictum justo. Mauris vitae elementum ante, nec vulputate eros. Ut
            blandit eros ligula, nec ullamcorper sapien volutpat vel.
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 25, fontWeight: "bold", marginTop: 2 }}>
          {t.dimensions}
        </Typography>
        <Box sx={{ display: "flex", gap: 10 }}>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {t.width}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>69mm</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {t.height}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>69mm</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {t.height}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>69mm</Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: "flex", gap: 10 }}>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {t.negotiable}?
            </Typography>
            <Typography sx={{ fontSize: 20 }}>Yes</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {t.unit_price}?
            </Typography>
            <Typography sx={{ fontSize: 20 }}>No</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {t.category}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>Beams</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {t.time_of_post}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>01 Jan 2023</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 10, mt: 2 }}>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {t.owner_of_post}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>Tim Lim</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {t.company}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>Tan’s Metal PTE LTD</Typography>
          </Box>
        </Box>
      </main>
    </>
  );
}

export default MyCarousel;
