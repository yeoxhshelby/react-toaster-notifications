import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Box,
  Typography,
  Divider,
  Grid,
  Stack,
  Avatar,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import beam1 from "../images/beam1.jpg";
import beam2 from "../images/beam2.jpg";
import beam3 from "../images/beam3.jpg";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import en from "../locales/en";
import zn from "../locales/zn";
import jpn from "../locales/jpn";
import kr from "../locales/kr";
import span from "../locales/span";
import ResponsiveAppBar from "@/components/header";
import StarIcon from "@mui/icons-material/Star";
import AspectRatio from "@mui/joy/AspectRatio";

function MyCarousel() {
  const router = useRouter();
  const { locale } = router;

  let t;
  if (locale === "kr") {
    t = kr;
  } else if (locale === "zn") {
    t = zn;
  } else if (locale === "jpn") {
    t = jpn;
  } else if (locale === "span") {
    t = span;
  } else {
    t = en;
  }

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#00C853",
    },
  });

  const items = [
    {
      src: beam1,
      alt: "beam1",
    },
    {
      src: beam2,
      alt: "beam2",
    },
    {
      src: beam3,
      alt: "beam3",
    },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <Box
        sx={{
          display: "flex-col",
          justifyContent: "space-between",
          px: 10,
          pt: 2,
        }}
      >
        <Carousel sx={{ height: "500px", width: "100%" }}>
          {items.map((item) => (
            <Paper key={item.alt}>
              <AspectRatio objectFit="contain">
                <Image
                  key={item.alt}
                  src={item.src}
                  alt={item.alt}
                  width={1950}
                  height={300}
                />
              </AspectRatio>
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
            {t.listing_tag}
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
            <Typography sx={{ fontSize: 20 }}>{t.yes}</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {t.unit_price}?
            </Typography>
            <Typography sx={{ fontSize: 20 }}>{t.no}</Typography>
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
        <Box sx={{ display: "flex", gap: 10, mt: 2, mb: 2 }}>
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
        <Divider />
        <Box display="flex" sx={{ mt: 2 }}>
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            {t.review}
          </Typography>
          <Button sx={{ fontSize: 15, ml: "300px" }}>{t.add_comment}</Button>
        </Box>
        <Box sx={{ width: 1 / 2, pt: "36px" }}>
          <Grid container>
            <Grid item xs={6}>
              <Box display="flex" sx={{ mb: 2 }}>
                <Avatar />
                <Typography
                  sx={{
                    fontWeight: 600,
                    my: "auto",
                    ml: 1,
                  }}
                >
                  Jimmy Calderon
                </Typography>
              </Box>
              The seller is really nice and he gave me 10% off!
            </Grid>
            <Grid item xs={6}>
              <Stack direction="row" spacing={-1}>
                <Typography sx={{ mx: 2, fontWeight: "bold" }}>{2}</Typography>
                <StyledRating
                  name="half-rating"
                  value={2}
                  precision={0.5}
                  emptyIcon={<StarIcon />}
                  readOnly
                />
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Grid container>
            <Grid item xs={6}>
              <Box display="flex" sx={{ mb: 2 }}>
                <Avatar />
                <Typography
                  sx={{
                    fontWeight: 600,
                    my: "auto",
                    ml: 1,
                  }}
                >
                  Cade Vang
                </Typography>
              </Box>
              The seller is really nice and he gave me 10% off!
            </Grid>
            <Grid item xs={6}>
              <Stack direction="row" spacing={-1}>
                <Typography sx={{ mx: 2, fontWeight: "bold" }}>{2}</Typography>
                <StyledRating
                  name="half-rating"
                  value={2}
                  precision={0.5}
                  emptyIcon={<StarIcon />}
                  readOnly
                />
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 2 }} />
        </Box>
      </Box>
    </>
  );
}

export default MyCarousel;
