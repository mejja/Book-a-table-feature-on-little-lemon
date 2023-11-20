import  Paper  from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const DishCard = ({dish}) => {
    return( 
    <Grid item xs={4} marginY={2} sx={{ flexGrow: 1 }} container spacing={2}>
      <Paper 
      square={false}
      sx={{borderRadius: 2}}
      elevation={3}>
        <img 
        src={dish.image}
        alt="Menu Dish"
        className="img"
        />
        <Box padding={2}>
        <Typography  variant="h3" component="h3">
         {dish.title}
        </Typography>
        </Box>
        <Box
        padding={2}
          sx={{
            display: "flex",
            alignItems: "center"
          }}>
            <Typography variant="body1" component="span" fontFamily={"Karla, sans-serif"} display={"block"} >
            {dish.text}
            </Typography>
        </Box>
        <Button variant="outlined" color="primary" size="large">{dish.delivery}</Button>
      </Paper>
    </Grid>
    );
};

export default DishCard;
