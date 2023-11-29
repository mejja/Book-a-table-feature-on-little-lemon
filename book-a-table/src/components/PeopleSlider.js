import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
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

function valuetext(value) {
  return   `${value}`;
}

export default function PeopleSlider() {
  return (
    <Box sx={{ width: 400 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={1}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
      />
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