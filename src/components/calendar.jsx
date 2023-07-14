import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyDQNo4Q12xmi9Rw9O8lMVo2l56y1473Lds";
let calendars = [
  {
    calendarId: "youngderrick82@gmail.com",
    color: "#B241D1",
  }, //add a color field to specify the color of a calendar
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "10px",
    borderColor: "rgb(33, 37, 41)" //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 3px solid red;
  `,
};

const language = "EN";

const EventCalendar = () => {

    return (
        <div>
          <Calendar
            apiKey={API_KEY}
            calendars={calendars}
            styles={styles}
            language={language}
          />
        </div>
      );
    }

export default EventCalendar