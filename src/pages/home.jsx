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
} from "@material-ui/core";
import Logo from "./assets/logo.jpg";
import TwitchLogo from "./assets/bnr-twitch-logo.png";
import YoutubeLogo from "./assets/bnr-yt-logo2.png";
import AwaLogo from "./assets/Anime_Weekend_Atlanta_Logo.png";
import VideoCards from "../components/ytvideos";

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <img src={Logo} alt="Black Nerd Rises Logo" style={{ width: "100%", height: "80rem" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} class="inline-logos">
            <a href="https://www.youtube.com/@blacknerdrises" target="_blank" style={{ width: "100%"}}>
              <img src={YoutubeLogo} title="Black Nerd Rises Youtube" alt="Black Nerd Rises Youtube" style={{ width: "100%"}} />
            </a>
            <a href="https://awa-con.com/" target="_blank" style={{ width: "100%"}}>
            <img src={AwaLogo} title="Anime Weekend Atlanta " alt="Anime Weekend Atlanta" style={{ width: "100%"}} />
            </a>
            <a href="https://www.twitch.tv/blacknerdrises" target="_blank" style={{ width: "100%"}}>
            <img src={TwitchLogo} title="Black Nerd Rises Twitch" alt="Black Nerd Rises Twitch" style={{ width: "100%"}} />
            </a>
          </Grid>
        <VideoCards />
      </Grid>
    </Container>
  );
};

export default HomePage;
