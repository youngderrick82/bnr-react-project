import { useEffect } from "react";
import TwitchSchedule from "../components/twitchschedule";


const Events = () => {

    useEffect(() => {
        document.title = "Black Nerd Rises - Events";
      }, []);

    return (
    <div>
       <h1 className="page-header">Black Nerd Rises Schedule</h1>
       <p style={{ textAlign: "center"}} className="page-subheader">Check out our upcoming events!</p>
      <TwitchSchedule />
    </div>
    )
}

export default Events