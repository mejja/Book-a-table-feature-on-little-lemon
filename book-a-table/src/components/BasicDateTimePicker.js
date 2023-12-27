import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import Stack from '@mui/material/Stack';

export default function CustomDateTimePicker() {

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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} components={MobileDateTimePicker}>
        <MobileDateTimePicker
          value={dateWithInitialValue}
          onChange={(newValue) => {
            setDateWithInitialValue(newValue);
          }}
          onError={(newError) => setError(newError)}
          required
          fullwidth
          clearable
          formatDensity='spacious'
          minTime={sixAM}
          maxTime={tenPM}
          minDate={dayjs(new Date())}
          inputFormat="YYYY/MM/DD hh:mm a"
          mask="____/__/__ __:__ _M"
          slotProps={{ textField: { label:"Required", variant: "outlined", size:"small", helperText: errorMessage}}}
         />
      </Stack>
    </LocalizationProvider>
  );
}
