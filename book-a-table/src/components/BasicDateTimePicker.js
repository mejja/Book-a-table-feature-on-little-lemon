import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import Stack from '@mui/material/Stack';

export default function CustomDateTimePicker() {

  const [dateWithInitialValue, setDateWithInitialValue] = React.useState(
    dayjs(new Date()),
  );
const sixAM = dayjs().set('hour', 6).startOf('hour');
const tenPM = dayjs().set('hour', 10).startOf('hour');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} components={MobileDateTimePicker}>
        <MobileDateTimePicker
          //value={dateWithInitialValue}
          onChange={(newValue) => {
            setDateWithInitialValue(newValue);
          }}
          required
          // label="Required"
          formatDensity='spacious'
          minTime={sixAM}
          maxTime={tenPM}
          onError={console.log}
          minDate={dayjs(new Date())}
          inputFormat="YYYY/MM/DD hh:mm a"
          mask="____/__/__ __:__ _M"
          renderInput={(params) => <TextField {...params} />}
          slotProps={{ textField: { variant: "filled", size:"small", helperText: "Please fill this field" , hidden:"true"},
          field: { clearable: true }}}
         />
      </Stack>
    </LocalizationProvider>
  );
}
