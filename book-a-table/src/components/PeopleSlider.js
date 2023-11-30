import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import GroupsIcon from '@mui/icons-material/Groups';
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';
import { Grid } from '@mui/material';

const people = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 70,
    label: '70',
  },
  {
    value: 80,
    label: '80',
  },
  {
    value: 90,
    label: '90',
  },
  {
    value: 100,
    label: '100',
  },
];
const Input = styled(MuiInput)`
  width: 42px;
`;


function valuetext(value) {
  return  `${value}`;
}
export default function PeopleSlider() {
  const [value, setValue] = React.useState(1);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
   <Box sx={{flexGrow:1 }}>
          <Grid   container spacing={2} alignItems={'center'}>
          <Grid item >
          <GroupsIcon fontSize='large' />
          </Grid>
          <Grid item>
          <Slider
            value={typeof value === 'number' ? value : 1}
            onChange={handleSliderChange}
            arialabel="Always visible"
            defaultValue={1}
            getAriaValueText={valuetext}
            step={1}
            marks={people}
            valueLabelDisplay="auto"
            sx={{ color: "#f4ce14", border: 4, borderColor: "#f4ce14", padding: 0, width:"19em", marginTop: 1, }} />
             </Grid>
             <Grid item>
             <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          </Grid>
          </Grid>
    </Box>
  );
}





// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Slider from '@mui/material/Slider';

// function valueLabelFormat(value) {
//   const units = ['KB', 'MB', 'GB', 'TB'];

//   let unitIndex = 0;
//   let scaledValue = value;

//   while (scaledValue >= 1024 && unitIndex < units.length - 1) {
//     unitIndex += 1;
//     scaledValue /= 1024;
//   }

//   return `${scaledValue} ${units[unitIndex]}`;
// }

// function calculateValue(value) {
//   return 1 ** value;
// }

// export default function PeopleSlider() {
//   const [value, setValue] = React.useState(10);

//   const handleChange = (event, newValue) => {
//     if (typeof newValue === 'number') {
//       setValue(newValue);
//     }
//   };

//   return (
//     <Box sx={{ width: 250 }}>
//       <Typography id="non-linear-slider" gutterBottom>
//         People: {valueLabelFormat(calculateValue(value))}
//       </Typography>
//       <Slider
//         value={value}
//         min={5}
//         step={1}
//         max={30}
//         scale={calculateValue}
//         getAriaValueText={valueLabelFormat}
//         valueLabelFormat={valueLabelFormat}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         aria-labelledby="non-linear-slider"
//       />
//     </Box>
//   );
// }