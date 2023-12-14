import * as React from 'react';
import "../App.css";
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import menus from  "../data.json";
import Stack from '@mui/material/Stack';
import DishCard from './DishCard';




export default function Specials() {
   return (

    <Container>
    {menus.map((menu, menuId) => (
      <React.Fragment key={menuId}>
      <Stack
      direction={{xs: "column", sm: "column", md: "row", lg:"row"}}
      spacing={{xs: 1, sm: 2, md: 5, lg: 70 }}
      marginTop={20}
      marginBottom={15}>
      <Typography
      variant="h2"
      component="h2"
      marginTop={5}
      marginBottom={3}
      sx={{fontWeight:"bold",}}
      >
        {menu.name}
      </Typography>
      <div className="onlinemenu-button">
      <Button variant="contained" color="ochre" size="medium" >
      Online Menu
      </Button>
      </div>
      </Stack>
      <div>
      <Stack spacing={0} direction={{xs: "column", sm: "column", md: "row", lg:"row",}}>
        {menu.dishes.map((dish, dishId) => 
        <DishCard dish={dish} key={dishId}/>)}
      </Stack>
      </div>
      </React.Fragment>
    ))}
  </Container>
)}