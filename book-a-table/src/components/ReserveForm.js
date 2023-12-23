import { FormLabel, Grid, TextField, Typography, Box } from "@mui/material";
import React from "react";
import "../App.css";
import PeopleSlider from "./PeopleSlider";
import OccassionDropDown from "./OccassionDropDown";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Field, Form, Formik} from "formik";
import { object, string } from "yup";
// imports for datepicker
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import Stack from '@mui/material/Stack';






const intialValues = {
  firstName: "",
  lastName: "",
  email: "",
  comments: "",
};

export default function ReserveForm() {
  const [dateWithInitialValue, setDateWithInitialValue] = React.useState("");
  // Set max and Min time
const sixAM = dayjs().set('hour', 6).startOf('hour');
const tenPM = dayjs().set('hour', 22).startOf('hour');

// Show error message
const [error, setError] = React.useState(null);

const errorMessage = React.useMemo(() => {
  switch (error) {
    case 'maxTime':
    case 'minTime': {
      return 'Please select a date and time within normal working hours';
    }

    case 'invalidDate': {
      return 'Your date is not valid';
    }

    default: {
      return '';
    }
  }
}, [error]);

  return (
    <Formik
    initialValues={intialValues}
    onSubmit={(values, formikHelpers) => {
      console.log(values);
      formikHelpers.resetForm();
    }}
    validationSchema={object({
    email: string().email("Please enter a valid email").required("Required"),
    firstName: string().min(3, "Too short 3 char min").required("Required"),
    lastName: string().min(3, "Too short 3 char min").required("Required"),
    })}
    >
      {({errors, isValid, touched, dirty}) => (
      <Form>
        <Typography sx={{ marginBottom: -2 }}>
          <FormLabel
            sx={{
              fontFamily: "Markazi Text,serif",
              fontSize: "1.1em",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Customer's Name:
          </FormLabel>
        </Typography>
        <Grid container sx={{ marginY: 2 }}>
          <Grid
            item
            xs={5.9}
            marginRight={0.2}
            display={"flex"}
            flexDirection={"row"}
          >
            <Field
              name="firstName"
              type="firstName"
              as={TextField}
              id="outlined-required"
              label="First"
              size="small"
              error={Boolean(errors.firstName) && Boolean(touched.firstName)} 
              helperText={Boolean(touched.firstName) && errors.firstName}
            />
          </Grid>
          <Grid item xs={5.9} marginLeft={0.2}>
            <Field
              name="lastName"
              as={TextField}
              id="outlined-required"
              label="Last"
              size="small"
              error={Boolean(errors.lastName) && Boolean(touched.lastName)} 
              helperText={Boolean(touched.firstName) && errors.lastName}
            />
          </Grid>
        </Grid>
        <Typography sx={{ marginBottom: -2, marginTop: -1 }}>
          <FormLabel
            sx={{
              fontFamily: "Markazi Text,serif",
              fontSize: "1.1em",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            E-mail:
          </FormLabel>
        </Typography>
        <Box sx={{ marginY: 2}} marginX={0}>
          <Field
            name="email"
            type="email"
            as={TextField}
            id="outlined"
            label="name@domain.com"
            size="small"
            error={Boolean(errors.email) && Boolean(touched.email)} 
            helperText={Boolean(touched.email) && errors.email}
          />
        </Box>
        <Typography sx={{ marginTop: -1 }}>
          <FormLabel
            id="Data&Time-label"
            sx={{
              fontFamily: "Markazi Text,serif",
              fontSize: "1.1em",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Date & Time:
          </FormLabel>
        </Typography>
        <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} components={MobileDateTimePicker}>
        <MobileDateTimePicker
          value={dateWithInitialValue}
          onChange={(newValue) => {
            setDateWithInitialValue(newValue);
          }}
          name="date"
          onError={(newError) => setError(newError)}
          required
          fullwidth
          clearable
          // label="Required"
          formatDensity='spacious'
          minTime={sixAM}
          maxTime={tenPM}
          minDate={dayjs(new Date())}
          inputFormat="YYYY/MM/DD hh:mm a"
          mask="____/__/__ __:__ _M"
          slotProps={{ textField: { label:"Required", variant: "outlined", size:"small"}}}
         />
      </Stack>
    </LocalizationProvider>
        </Box>
        <Typography sx={{ marginBottom: -3, marginTop: 1 }}>
          <FormLabel
            id="numberOfPeople-label"
            sx={{
              fontFamily: "Markazi Text,serif",
              fontSize: "1.1em",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Number of People:
          </FormLabel>
        </Typography>
        <PeopleSlider />
        <Typography sx={{ marginTop: 3 }}>
          <FormLabel
            id="occasionDropDown-label"
            sx={{
              fontFamily: "Markazi Text,serif",
              fontSize: "1.1em",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Occasion:
          </FormLabel>
        </Typography>
        <OccassionDropDown />
        <Typography>
          <FormLabel
            id="comments-label"
            sx={{
              fontFamily: "Markazi Text,serif",
              fontSize: "1.2em",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Notes:
          </FormLabel>
        </Typography>
        <Field
          name="comments"
          as={TextField}
          id="comments"
          multiline
          maxRows={4}
          label="comments(optional)"
          size="small"
        />
        <FormGroup>
          <FormControlLabel
            required
            control={<Checkbox color="success"/>}
            label="I agree to Little's Lemon terms & condition"
          />
        </FormGroup>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Button
              variant="contained"
              color="success"
              type="submit"
              size="large"
              fullWidth
              disabled={!dirty || !isValid}
            >Submit
            </Button>
          </Grid>
        </Box>
      </Form>
      )}
    </Formik>
  );
}