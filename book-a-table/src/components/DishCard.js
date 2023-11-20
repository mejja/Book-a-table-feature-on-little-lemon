import  Paper  from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dishes from "../data.json";

const DishCard = () => {
    return( 
    <Grid item xs={4} marginY={2} sx={{ flexGrow: 1 }} container spacing={2}>
      <Paper 
      sx={{borderRadius: 2}}
      elevation={3}>
        <img 
        src={require('../assets/images/greek_salad.jpg')}
        alt="Greek salad"
        className="img"
        />
        <Box padding={2}>
        <Typography  variant="h3" component="h3">
          Greek Salad
        </Typography>
        </Box>
        <Box
        padding={2}
          sx={{
            display: "flex",
            alignItems: "center"
          }}>
            <Typography variant="body1" component="span" fontFamily={"Karla, sans-serif"} display={"block"} >
            {dishes.text}
            </Typography>
        </Box>
        <Button variant="outlined" color="primary" size="large">Order Delivery</Button>
      </Paper>
    </Grid>
    );
};

export default DishCard;
