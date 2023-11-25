import EventCalendar from "../components/calendar"
import { useEffect } from "react";
import { CSSObject } from '@emotion/react';


const Events = () => {

    useEffect(() => {
        document.title = "Black Nerd Rises - Events";
      }, []);

    return (
    <div>
       <h1 className="page-header">Event Calendar</h1>
       <p style={{ textAlign: "center"}} className="page-subheader">Check out our upcoming events!</p>
    <EventCalendar />
    </div>
    )
}

export default Events