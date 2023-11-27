import React from "react";
import "../App.css";
import Rating from '@mui/material/Rating';
// card imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea} from "@mui/material";

export default function Testimonials() {
  return (
    <header >
      <Box className="testimonial-box" sx={{padding: 5}}>
        <div className="testimonial-header">
          <h1 id="testimonial-heading">Testimonials</h1>
        </div>
         <div className="review-container">
            <div className="review">
              <Card sx={{ maxWidth: 250, minHeight: 285}}>
                <CardActionArea>
                <Box marginTop={2}>
                <Rating name="read-only" value={5} readOnly />
                </Box>
                <div>
                <img
                id="profile-img"
                src={require("../assets/images/Major_M_75x75.jpg")}
                alt="Profile"
                />
                </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Major M.
                    </Typography>
                    <Typography id="h2" variant="body2" color="text.secondary">
                      "Mkahawa wa kimataifa ulio na mandhari tulivu na chakula kitamu."
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
              <div className="review">
              <Card sx={{ maxWidth: 250, minHeight: 285 }}>
                <CardActionArea>
                <Box marginTop={2}>
                <Rating name="read-only" value={5} readOnly />
                </Box >
                <div>
                <img
                id="profile-img"
                src={require("../assets/images/Elizabeth_K_75x75.jpg")}
                alt="Profile"
                />
                </div>
                  <CardContent>
                    <Typography id="h2" gutterBottom variant="h5" component="div">
                      Elizabeth K.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    "Toller Ort, ruhige Atmosphäre mit leckerem Essen"
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
              < div className="review">
              <Card sx={{ maxWidth: 250, minHeight: 285 }}>
                <CardActionArea>
                <Box marginTop={2}>
                <Rating name="read-only" value={5} readOnly />
                </Box>
                <div>
                <img
                id="profile-img"
                src={require("../assets/images/Joseph_R_75x75.jpg")}
                alt="Profile"
                />
                </div>
                  <CardContent>
                    <Typography id="h2" gutterBottom variant="h5" component="div">
                      Joseph S.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    "Super endroit, atmosphère paisible avec une cuisine délicieuse"
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
              <div className="review">
              <Card sx={{ maxWidth: 250, minHeight: 285}}>
                <CardActionArea >
                <Box marginTop={2}>
                <Rating name="read-only" value={5} readOnly />
                </Box>
                <div>
                <img
                id="profile-img"
                src={require("../assets/images/Martins_Y._1_75x75.jpg")}
                alt="Profile"
                />
                </div>
                <CardContent>
                    <Typography id="h2" gutterBottom variant="h5" component="div" >
                      Martins Y.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    "Dey Chop knuckle  this restaurant as de fufu and Swallow de great."
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
              </div>
      </ Box>
    </header>
  );
}
