import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import Stack from '@mui/material/Stack';

export default function CustomDateTimePicker() {

  const [dateWithInitialValue, setDateWithInitialValue] = React.useState(
    dayjs('2023-11-29T00:00'),
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileDateTimePicker
          value={dateWithInitialValue}
          onChange={(newValue) => {
            setDateWithInitialValue(newValue);
          }}
          required
          label="Required"
          onError={console.log}
          minDate={dayjs('2023-11-29T00:00')}
          inputFormat="YYYY/MM/DD hh:mm a"
          mask="____/__/__ __:__ _M"
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
