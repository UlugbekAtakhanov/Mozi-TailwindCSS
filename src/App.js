import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div>

            <Navbar />

            <Routes>
                <Route path = "/" element = {<HomePage />} />
            </Routes>

            <Footer />

            {/* <div className="h-screen"></div> */}

        </div>
    );
}

export default App;
