import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const youtubeAPI = process.env.REACT_APP_YT_API_KEY;

const VideoCards = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("")

  const fetchVideoData = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC2ZgT5OJZvH4rogFojlEksA&maxResults=3&order=date&key=${youtubeAPI}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error('Error fetching data" ', error);
        setError("failed to load video snippets");
      });

      console.log(videos)
  };


  useEffect(() => {
    fetchVideoData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="i-center" style={{ marginTop: 5, width: "100%" }}>
      <Grid container spacing={3}>
        {videos.map((video) => (
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={video.id.videoId}>
            <Card className="yt-card" raised="true" sx={{ maxWidth: 345,}}>
              <CardMedia
                style={{ height: '14rem', width: "100%" }}
                image={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                alt={video.snippet.title}
              />
              <CardContent className="yt-card-content">
                <Typography className="yt-card-title" component="div">{
                  video.snippet.title
                }
                </Typography>
                <Typography variant="body2">{
                  video.snippet.description
                }
                </Typography>
                <CardActions>
                  <Button  color="primary" variant="contained" target="_blank" href={'https://www.youtube.com/watch?v=' + video.id.videoId + '_channel=BlackNerdRises'} size="large">Watch On Youtube</Button>
                  {/* <Button size="small">Share</Button> */}
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VideoCards;
