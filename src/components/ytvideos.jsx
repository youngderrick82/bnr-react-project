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
} from "@material-ui/core";

// let nextPageToken = "";
// function getVideos() {
//   fetch(
//     "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC2ZgT5OJZvH4rogFojlEksA&maxResults=3&order=date&key=%20AIzaSyBhy4QSDgpDgUxGW5GAyVC3Re47y4Q8yEI&pageToken=" +
//       nextPageToken
//   )
//     .then((result) => {
//       return result.json();
//     })
//     .then((data) => {
//       let videos = data.items;
//       nextPageToken = data.nextPageToken;
//       let videoContainer = document.querySelector(".youtube-container");
//       for (video of videos) {
//         videoContainer.innerHTML += `
//             <div class='video-item'>
//             <a href='https://www.youtube.com/watch?v=${video.id.videoId}_channel=BlackNerdRises'>
//             <h2 alt='${video.snippet.title}'>${video.snippet.title}</h2>
//             <img src='${video.snippet.thumbnails.medium.url}'>
//             </a>
//             </div>
//         `;
//       }
//     });
// }

const VideoCards = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideoData = () => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVideos(data);
      });
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <div style={{ marginTop: 5 }}>
      <Grid container spacing={3}>
        {videos.map((video) => (
          <Grid item xs={4}>
            <Card raised="true" sx={{ maxWidth: 345 }}>
              <CardMedia
                style={{ height: 140, width: "100%" }}
                image={video.thumbnailUrl}
                title="Best Anime per A-kon 2023"
                alt="Best Anime per A-kon 2023"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Black Nerd Rises
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squadmate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
                <CardActions>
                  <Button size="large">Watch On Youtube</Button>
                  <Button size="small">Share</Button>
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
