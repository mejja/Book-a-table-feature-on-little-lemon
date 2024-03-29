import  Paper  from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const DishCard = ({dish}) => {
    return(
    <div className="dishcard">
    <Grid item xs={15} marginY={2} container spacing={1} width={"auto"} >
      <Paper
      sx={{borderTopLeftRadius: "10%" , borderTopRightRadius: "10%", backgroundColor: "#f2efef", boxShadow: "5px 10px 20px #ccc", marginBottom:"-60em", marginTop:"8em", margin: "-64px 35px 0", width:"20em", height:"600px"}}
      elevation={3}>
        <img  id="dish-image"
        style={{borderTopLeftRadius: "10%", borderTopRightRadius: "10%", height: 300}}
        src={dish.image}
        alt="Menu Dish"
        className="img"
        />
        <Box padding={2} sx={{display:"flex", flexWrap:"wrap"}}>
        <Typography  variant="h5" component="h5" sx={{fontWeight:"bold"}}>
         {dish.title}
        </Typography>
        <Typography variant="h5" component="h5" sx={{color:"#d50000", alignSelf:"end", marginLeft:"auto", fontWeight:"bold" }}>
          ${dish.price}
        </Typography>
        </Box>
        <Box
        padding={2}
          sx={{
            display: "flex",
            alignItems: "center"
          }}>
            <Typography variant="body1" component="span" style={{fontSize: 17, fontFamily: "Karla,sans-serif", lineHeight: "1.8em"}} >
            {dish.text}
            </Typography>
        </Box>
        <Box
          paddingX={2}
          sx={{
          display: "flex",
          alignItems: "center"
          }}
        >
        <Button color="primary" size="large">{dish.delivery}</Button>
        </Box>
      </Paper>
    </Grid>
    </div>
    );
};

export default DishCard;
