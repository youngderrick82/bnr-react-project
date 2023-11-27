import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const calendarAPI = process.env.REACT_APP_GCAL_API_KEY;
const calendarID = process.env.REACT_APP_GCAL_ID;
let calendars = [
  {
    calendarId: calendarID,
  }, //add a color field to specify the color of a calendar
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    color: "black", //set the font color
    borderColor: "white", //make outer edge of calendar thicker
    margin: "auto",
    maxWidth: "1200px",
  },

  //you can also use emotion's string styles
  today: {
    color: "red",
    border: "3px solid red !important",
  },

  event: {
    visibility: "visible",
  },

  //you can use media queries to change the way your calendar looks at different screen sizes
  //if you don't provide styles for a view, it will default to the view you provided it for
};

const language = "EN";

const EventCalendar = () => {
  return (
    <>
      <Calendar apiKey={calendarAPI} calendars={calendars} styles={styles} />
    </>
  );
};

export default EventCalendar;
