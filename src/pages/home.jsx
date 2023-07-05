import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Logo from "./assets/logo.jpg";
import VideoCards from "../components/ytvideos";

const HomePage = () => {
  return (
    <Container>
      <h1 style={{textAlign: "center"}}>WELCOME TO THE OFFICIAL BNR WEBSITE</h1>
      <Grid container>
        <Grid item xs={12}>
          <img src={Logo} style={{ width: "100%", height: 500 }} />
        </Grid>
        <VideoCards />
      </Grid>
    </Container>
  );
};

export default HomePage;
