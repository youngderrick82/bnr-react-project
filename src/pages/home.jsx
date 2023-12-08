import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Item,
  Typography,
} from "@mui/material";
import bnrLogo from "./assets/logo.jpg"
import Logo from "./assets/logo.jpg";
import TwitchLogo from "./assets/bnr-twitch-logo.png";
import YoutubeLogo from "./assets/bnr-yt-logo2.png";
import FistLogo from "./assets/lyfu-light.png";
import VideoCards from "../components/ytvideos";
import SlideShow from "../components/slideshow";
import Carousel from "../components/carousel";
import { useEffect } from "react";
import BannerCarousel from "../components/carousel";


const HomePage = () => {

  // update the document title
  useEffect(() => {
    document.title = "Black Nerd Rises - Home";
  }, []);

  return (
    <div>
    <Container maxWidth="xl">
      <Grid container>
        <BannerCarousel />
        <div>
        <h1 className="page-header">Welcome to Black Nerd Rises!</h1>
          <p className="home-message">Dive into a world where anime meets attitude, gaming gets a new groove, and every convention turns into an unforgettable experience. We're a diverse crew of anime aficionados, gaming gurus, and comic con conquerors, bringing you the best of nerd culture with a twist. Join us for epic game streams, laugh-out-loud panels, and a community where every nerd feels like a hero. Ready to level up your fandom? You're in the right place!</p>
          </div>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className="inline-logos">
            <a href="https://www.youtube.com/@blacknerdrises" target="_blank" rel="noreferrer" style={{ width: "100%"}}>
              <img src={YoutubeLogo} title="Black Nerd Rises Youtube" alt="Black Nerd Rises Youtube" style={{ width: "100%"}} />
            </a>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className="inline-logos lyfu">
            <img src={FistLogo} title="Nerd Gang for Lyfu" alt="Nerd Gang for Lyfu" style={{ width: "50%"}} />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className="inline-logos">
            <a href="https://www.twitch.tv/blacknerdrises" target="_blank" rel="noreferrer" style={{ width: "100%"}}>
            <img src={TwitchLogo} title="Black Nerd Rises Twitch" alt="Black Nerd Rises Twitch" style={{ width: "100%"}} />
            </a>
          </Grid>
          <div className="i-center">
        <VideoCards />
        </div>
      </Grid>
    </Container>
    </div>
  );
};

export default HomePage;
