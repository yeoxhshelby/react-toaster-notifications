import * as React from "react";
import { useState } from "react";
import {
  FormControl,
  Typography,
  Divider,
  Button,
  Select,
  ButtonGroup,
  Box,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormGroup,
  FormControlLabel,
  Checkbox,
  // Snackbar,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useMediaQuery, Snackbar } from "@material-ui/core";

// declare types
// type SelectChangeEvent = string

const BuySellListing = () => {
  const [category, setCategory] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width:600px)");

    const anchorOrigin = isDesktop
      ? { vertical: "bottom", horizontal: "right" }
      : { vertical: "top", horizontal: "center" };

  const handleClick = () => {
    setOpen(true);
  };

  const style = {
    variant: "contained",
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormControl
        sx={{
          width: 1,
          bgcolor: "#FFFFFF",
          boxShadow: 2,
          borderRadius: "4px",
        }}
      >
        {/* title */}
        <Box display="flex" justifyContent="space-between">
          <div>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginLeft: 3, marginTop: 3 }}
            >
              Create a listing
            </Typography>
            <Typography variant="subtitle2" sx={{ marginLeft: 3 }}>
              Create a buy or a sell listing to be shared on your profile
            </Typography>
          </div>
          <Button
            variant="contained"
            size="medium"
            sx={{ width: 200, height: 40, mt: 5, mr: 3 }}
            color="error"
          >
            Cancel Listing
          </Button>
        </Box>

        <Divider sx={{ marginLeft: 3, marginTop: 2, marginRight: 3 }} />

        {/* Choose buy/sell post */}
        <ButtonGroup sx={{ "& button": { my: 1, mx: 3 } }}>
          <Button
            variant="contained"
            size="medium"
            sx={{ width: 1 / 2 }}
            defaultChecked
          >
            Buying
          </Button>
          <Button variant="outlined" size="medium" sx={{ width: 1 / 2 }}>
            Selling
          </Button>
        </ButtonGroup>

        {/* Select a category */}
        <Select
          value={category}
          onChange={(e: SelectChangeEvent) => setCategory(e.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ my: 1, mx: 3 }}
        >
          <MenuItem value="">
            <em>Select a category</em>
          </MenuItem>
          <MenuItem value={10}>Beams</MenuItem>
          <MenuItem value={20}>Hollow Section</MenuItem>
          <MenuItem value={30}>Angles</MenuItem>
        </Select>

        <Divider sx={{ marginLeft: 3, marginTop: 2, marginRight: 3 }} />

        {/* sub title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginLeft: 3, marginTop: 2 }}
        >
          Select photos
        </Typography>
        <Typography variant="subtitle2" sx={{ marginLeft: 3 }}>
          Choose images to display for the listing
        </Typography>
        <Button variant="contained" sx={{ width: 300, ml: 3, my: 2 }}>
          Upload the item photo
        </Button>

        <Divider sx={{ marginLeft: 3, marginRight: 3 }} />
        {/* sub title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginLeft: 3, marginTop: 2 }}
        >
          Category Parameters
        </Typography>
        <Typography variant="subtitle2" sx={{ marginLeft: 3 }}>
          Enter the parameters specific to the chosen category
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { mr: 6, width: "25ch" },
            ml: 3,
            my: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="Height"
            placeholder="in metres (m)"
          />
          <TextField
            required
            id="outlined-required"
            label="Breadth"
            placeholder="in metres (m)"
          />
          <TextField
            required
            id="outlined-required"
            label="Width"
            placeholder="in metres (m)"
          />
        </Box>
        <Divider sx={{ marginLeft: 3, marginRight: 3 }} />
        {/* sub title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginLeft: 3, marginTop: 2 }}
        >
          General Information
        </Typography>
        <Typography variant="subtitle2" sx={{ marginLeft: 3 }}>
          Enter the details of the listing below
        </Typography>
        <TextField
          id="listTitle"
          label="Listing Title"
          variant="outlined"
          sx={{ mx: 3, my: 2 }}
        />
        <FormControl sx={{ mx: 3 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <Box sx={{ display: "flex", ml: 4, mb: 1 }}>
          <FormControlLabel control={<Checkbox />} label="Negotiable?" />
          <FormControlLabel control={<Checkbox />} label="Price per unit?" />
        </Box>
        <TextField
          id="outlined-textarea"
          label="Listing Description"
          placeholder="Listing Description"
          multiline
          sx={{ mx: 3, mb: 2 }}
        />
        <Button
          variant="contained"
          size="medium"
          sx={{ mx: 3, mb: 2 }}
          onClick={handleClick}
        >
          Create Listing
        </Button>
        <Snackbar
          anchorOrigin={anchorOrigin}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            variant="outlined"
            severity="success"
            onClose={handleClose}
            sx={{ bgcolor: "white" }}
          >
            <AlertTitle>Success</AlertTitle>
            New listing has been successfully created.
          </Alert>
        </Snackbar>
      </FormControl>
    </main>
  );
};

export default BuySellListing;
