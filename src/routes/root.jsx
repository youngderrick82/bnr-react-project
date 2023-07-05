import Header from "../components/header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/footer";
import HomePage from "../pages/home";


export default function Root() {
    const navigation = useNavigation();

    return (
        <> 
        <div className={navigation.state === "loading" ? "loading" : ""
    }
    >
        </div>
        </>
        )
}