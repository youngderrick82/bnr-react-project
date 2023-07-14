import { Container } from "react-bootstrap";
import teamMembers from "./members";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme } from '@mui/material/styles';
import { Card, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";


const MemberCards = (props) => {
    const { uname, about, facebook, twitter, instagram, thread, image } = props.data;
    
    return (
        <Container>
            <Card raised='true' style={{ display: 'flex', height: 'auto', width: '90%', margin: 10, borderRadius: 30, marginLeft: 'auto', marginRight: 'auto' }}>
                
                <CardMedia
                className="card-media"
                component="img"
                alt={uname}
                height='300'
                style={{ width: '25%' }}
                image={require(`../pages/assets/${image}`)}
                 />
                <CardContent 
                style={{ width: '100%'}}
                height="100%"
                >
                <Typography  variant='h3' sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    {uname}
                </Typography>
                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                    {about}
                </Typography>
                <IconButton href={facebook} target="_blank" aria-label={uname + " Facebook Link"} color="primary">
                    <FacebookOutlinedIcon />
                </IconButton>
                <IconButton href={instagram} target="_blank" aria-label={uname + " Instagram Link"}>
                    <InstagramIcon />
                </IconButton>
                <IconButton href={twitter} target="_blank" aria-label={uname + " Twitter Link"} style={{color: "#90caf9"}}>
                    <TwitterIcon />
                </IconButton>
                </CardContent>
               
            </Card>
        </Container>
    )
}


export default MemberCards

// {require("../pages/assets/adara pic 2.jpg")}