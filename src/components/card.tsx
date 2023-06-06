import {
  Button,
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import { useRouter } from "next/router";

const ChatNow = () => {
     const router = useRouter();
     const { locale } = router;
  return (
    <Card
      sx={({ palette }) => ({
        width: { md: 250, lg: 300 },
        maxHeight: { md: 300, lg: 400 },
        border: palette.grey[300],
        backgroundColor: palette.grey[100],
      })}
    >
      <CardContent sx={{ pl: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: { sx: 0, md: 0, lg: 3 },
            paddingTop: 1,
            paddingBottom: 2,
            width: { sx: 0 },
          }}
        >
          <Avatar
            sx={({ spacing }) => ({
              mb: spacing(2),
              height: { sx: 21, md: 35, lg: 42 },
              width: { sx: 21, md: 35, lg: 42 },
            })}
          />

          <Box sx={{ pb: { md: 1, lg: 2 }, marginLeft: 2 }}>
            <Typography
              variant="body2"
              fontWeight={500}
              sx={{
                color: "black",
                fontSize: { sx: 8, md: 12, lg: 16 },
              }}
            >
              Hi s Metal
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: 1,
            }}
          >
            {t.chat_now}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChatNow;
