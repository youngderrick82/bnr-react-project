import { useState } from "react";
import { useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundAnimation from "./pages/assets/error404.json"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const [is404, setIs404] = useState(false);

  const setError = () => {
    if (error.status == 404) {
      return (
       <div>
       <Lottie className="error-animation" animationData={notFoundAnimation} alt="error status 404" loop={true} />
       </div>
      );
    }
    else {
      return error.statusText || error.message
    }
  }

  return (
    <div id="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="t-center">Sorry, an unexpected error has occurred.</p>
        {setError()}
      <p className="t-center">ERROR 404: PAGE NOT FOUND</p>
    </div>
  );
}