import React from "react";
import "../App.css";
// card imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea} from "@mui/material";

export default function Testimonials() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="mask">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>
         <div className="review-container">
            <div className="review">
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                  id="profile-img"
                    component="img"
                    height="140"
                    image= {require("../assets/images/Major M.jpg")}
                    alt="profile picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                      Major M.
                    </Typography>
                    <Typography id="h2" variant="body2" color="text.secondary">
                      Really enjoyed their quality food with cooked with African twist.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
              <div className="review">
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                    id="profile-img"
                    component="img"
                    height="140"
                    image= {require("../assets/images/Major M.jpg")}
                    alt="Profile picture"
                  />
                  <CardContent>
                    <Typography id="h2" gutterBottom variant="h2" component="div">
                      Major M.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Really enjoyed their quality food with cooked with African twist.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
              < div className="review">
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                    id="profile-img"
                    component="img"
                    height="140"
                    image= {require("../assets/images/Major M.jpg")}
                    alt="Profile picture"
                  />
                  <CardContent>
                    <Typography id="h2" gutterBottom variant="h2" component="div">
                      Major M.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Really enjoyed their quality food with cooked with African twist.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
              <div className="review">
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                    id="profile-img"
                    component="img"
                    height="140"
                    image= {require("../assets/images/Major M.jpg")}
                    alt="Profile picture"
                  />
                  <CardContent>
                    <Typography id="h2" gutterBottom variant="h2" component="div" >
                      Major M.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Really enjoyed their quality food with cooked with African twist.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
              </div>
      </div>
    </header>
  );
}
