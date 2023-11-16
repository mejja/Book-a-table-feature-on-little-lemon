import  Paper  from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const DishCard = () => {
    return( 
    <Grid item xs={4} marginY={2}>
      <Paper elevation={3}>
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
            <Typography variant="h5" component="body2">
            The famous greek salad of crispy lettuce, peppers, 
            olives and our Chicago style feta cheese, garnished 
            with crunchy garlic and rosemary croutons.
            </Typography>

        </Box>
      </Paper>
    </Grid>
    );
};

export default DishCard;
