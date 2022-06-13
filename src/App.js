import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage";
import CareerPage from "./pages/CareerPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

function App() {
    return (
        <div>

            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/career" element={<CareerPage />} />
            </Routes>

            {/* <div className="h-screen"></div> */}
            
            <Footer />


        </div>
    );
}

export default App;
