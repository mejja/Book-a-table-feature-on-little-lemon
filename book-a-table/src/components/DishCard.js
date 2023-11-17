import  Paper  from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


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
            <Typography variant="body1" component="span" fontFamily={"Karla, sans-serif"} display={"block"} line-height={"1.8rem"}>
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
