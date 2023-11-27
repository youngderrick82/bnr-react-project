import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import axios from "axios";

const twitchBcId = process.env.REACT_APP_TTV_BC_ID;

const TwitchSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [token, setToken] = useState("");
  const [daysOfWeek, setDaysOfWeek] = useState({});
  const [recurringStreams, setRecurringStreams] = useState([]);
  const [upcomingStreams, setUpcomingStreams] = useState([]);

  const organizeStreamsByDay = (segments) => {
    const daysOfWeek = {
      Sunday: [],
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
    };

    segments.forEach((segment) => {
      const dayOfWeek = new Date(segment.start_time).toLocaleDateString(
        "en-US",
        { weekday: "long" }
      );
      daysOfWeek[dayOfWeek].push(segment);
    });

    return daysOfWeek;
  };

  const separateRecurringAndUpcoming = (segments) => {
    const recurring = segments.filter((segment) => segment.is_recurring);
    const upcoming = segments.filter((segment) => {
      const now = new Date();
      const startTime = new Date(segment.start_time);
      return startTime > now && !segment.is_recurring;
    });

    return { recurring, upcoming };
  };

  const fetchTwitchSchedule = () => {
    fetch(`https://api.twitch.tv/helix/schedule?broadcaster_id=${twitchBcId}`, {
      headers: {
        "Client-ID": process.env.REACT_APP_TTV_CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const organizedByDay = organizeStreamsByDay(data.data.segments);
        setDaysOfWeek(organizedByDay);

        const { recurring, upcoming } = separateRecurringAndUpcoming(
          data.data.segments
        );
        setRecurringStreams(recurring);
        setUpcomingStreams(upcoming);
      })
      .catch((error) => {
        console.error("Error fetching Twitch schedule:", error);
      });
  };

  const fetchToken = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/get-twitch-token"
      );
      console.log("Fetched token:", response.data.access_token);
      setToken(response.data.access_token);
    } catch (error) {
      console.error("Error fetching Twitch token:", error);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  useEffect(() => {
    console.log("Token:", token);
    console.log("Broadcaster ID:", twitchBcId);
    if (token) {
      fetchTwitchSchedule();
    }
  }, [token]); // Fetch schedule after token is set

  useEffect(() => {
    console.log("Schedule:", schedule);
  }, [schedule]);

  // Ensure you're accessing the correct properties of each schedule item
  return (
    <div>
      <h2>Streaming Schedule</h2>
      <div>
        <Grid container spacing={2}>
          {upcomingStreams.map((segment, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {segment.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Start Time: ${new Date(
                      segment.start_time
                    ).toLocaleString()}`}
                  </Typography>
                  {/* Additional details can be added here */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Streams Organized by Day of Week */}
      {Object.entries(daysOfWeek).map(([day, segments]) => {
        if (segments.length > 0) {
          return (
            <div key={day}>
              <h3>{day}</h3>
              <Grid container spacing={2}>
                {segments.map((segment, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {segment.title}
                        </Typography>
                        <Typography variant="h6" component="div">
                          {segment.category.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {` ${new Date(segment.start_time).toLocaleString()}`}
                        </Typography>
                        {/* Additional details can be added here */}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TwitchSchedule;
