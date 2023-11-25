import { Container } from "react-bootstrap";
import teamMembers from "./members";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme } from '@mui/material/styles';
import { Tiktok } from "react-bootstrap-icons";
import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const MemberCards = (props) => {
    const { uname, about, tiktok, twitter, instagram, thread, image } = props.data;
    


    const checkSocials = (social) => {
        if (tiktok === "") {
            return false;
        } else {
            return true;
        }
    }



    const cardStyle = {
        display: 'flex',
        height: '15vw',
        width: '90%',
        margin: 10,
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    }

    const cardMediaStyle = {
        width: '25%',
    }

    const instagramButton = <IconButton href={instagram} target="_blank" aria-label={uname + " Instagram Link"}>
    <InstagramIcon />
    </IconButton>
        
    const twitterButton = <IconButton href={twitter} target="_blank" aria-label={uname + " Twitter Link"} style={{color: "#90caf9"}}>
    <TwitterIcon />
    </IconButton>

    const tiktokButton = <IconButton href={tiktok} target="_blank" aria-label={uname + " Tiktok Link"} style={{color: "black"}}>
        <Tiktok />
    </IconButton>

    const showInstagram = instagram !== "" ? instagramButton : null;
    const showTwitter = twitter !== "" ? twitterButton : null;
    const showTiktok = tiktok !== "" ? tiktokButton : null;

    return (
        <Container>
            <Card className="member-card-media" raised='true'>
                <CardMedia
                className=""
                component="img"
                alt={uname}
                height="auto"
                style={cardMediaStyle}
                image={require(`../pages/assets/members/${image}`)}
                 />
                <CardContent 
                className="member-card-content"
                height="100%"
                >
                <Typography  variant='h3' 
                style={{ 
                    fontSize: 40, 
                    textAlign: "center", 
                    fontWeight: 'bold',
                    fontFamily: 'Montserrat'
                    }} 
                    color= 'initial' gutterBottom>
                    {uname}
                </Typography>
                <hr className="membercard-divider"/>
                <div className="membercard-about-bg">
                <Typography color="text.secondary" gutterBottom>
                    {about}
                </Typography>
                </div>
                <hr className="membercard-divider" />
                <div className="membercard-icons">
                {showInstagram}
                {showTwitter}
                {showTiktok}
                </div>
                </CardContent>
               
            </Card>
        </Container>
    )
}


export default MemberCards

// {require("../pages/assets/adara pic 2.jpg")}