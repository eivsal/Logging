import "./App.css";
import "./global.css";
import image from "./Picture3.png";
import logo from "./capLogo.png";
import WindowError from "./feature/WindowError";
import logger from "./utils/logger";
import CustomLogger from "./feature/CustomLogger";
import ReactErrorBoundary from "./feature/ReactErrorBoundary";
import ReactErrorBoundaryHook from "./feature/ReactErrorBoundaryHook";

function App() {


    logger("this i a test")


    return (
        <div style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${image})`,
            padding: "2rem",
            display: "flex",
            flexDirection: "column"
        }}
        >
            <header style={{width: "auto", height: "auto"}}>
                <img alt={""} src={logo} style={{width: "300px", height: "200px", float: "right"}}/>
            </header>
            <div style={{display: "flex", flexDirection: "row"}}>
                <CustomLogger/>
                <WindowError/>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <ReactErrorBoundary/>
            </div>
        </div>
    );
}

export default App;
