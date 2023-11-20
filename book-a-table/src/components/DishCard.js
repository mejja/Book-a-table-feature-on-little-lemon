import  Paper  from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const DishCard = ({dish}) => {
    return( 
    <Grid item xs={4} marginY={2} sx={{ flexGrow: 1 }} container spacing={2}>
      <Paper 
      backgroundColor
      background-color={"rgb(255, 0, 0)"}
      sx={{borderRadius: 8}}
      elevation={3}>
        <img 
        style={{borderRadius: 25, height: 300}}
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
            <Typography variant="body1" component="span" fontFamily={"Karla, sans-serif"} display={"block"} marginBottom={10} >
            {dish.text}
            </Typography>
        </Box>
        <Box 
          paddingX={2}
          marginBottom={2}
          sx={{
          display: "flex",
          alignItems: "center"
          }}
        >
        <Button variant="outlined" color="primary" size="large">{dish.delivery}</Button>
        </Box>
        
      </Paper>
    </Grid>
    );
};

export default DishCard;
