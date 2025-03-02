import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import DesktopNavbar from './components/DesktopNavbar.jsx'; 
import LoginSignup from "./components/LoginSignup/LoginSignup.jsx"; 
import HomePage from './components/HomePage.jsx';  
import PageTransition from './components/PageTransition.jsx'; 
import './App.css';
import Signup from "./components/LoginSignup/Signup.jsx";
import Shop from './components/Shop.jsx';  
import AboutUs from './components/About Us.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import ContactUs from "./components/Contact Us.jsx"; 
import Checkout from "./components/Checkout.jsx"; 
import KhaltiPayment from "./components/KhaltiPayment.jsx"; 
import PaymentButton from "./components/PaymentButton.jsx"; 
import OrderSuccess from "./components/OrderSuccess.jsx"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Add this for JavaScript components
import BurgerCategory from './components/BurgerCategory.jsx';
import SausagesCategory from './components/SausagesCategory';
import ChocolateCategory from './components/ChocolateCategory';
import CakeCategory from './components/CakeCategory';
import CauliflowerChickpeaCurryCategory from './components/CauliflowerChickpeaCurryCategory';
import VeganNuggetsCategory from './components/VeganNuggetsCategory';
import HotDogsCategory from './components/HotDogsCategory';
import NutMeatCategory from './components/NutMeatCategory';
import ChickPeaSaladCategory from './components/ChickPeaSaladCategory';


function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  // Hide navbar on login and signup pages
  const hideNavbarRoutes = ["/login", "/signup"];
  const isDesktop = window.innerWidth >= 992;
  const showNavbar = isAuthenticated && !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Show navbar only when not on login/signup pages */}
      {showNavbar && (isDesktop ? <DesktopNavbar title="Plant-Based Store" aboutText="About Us" /> : <Navbar title="Plant-Based Store" aboutText="About Us" />)}

      {/* AnimatePresence ensures exit animations work */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={isAuthenticated ? <PageTransition><HomePage /></PageTransition> : <Navigate to="/login" />} />
          <Route path="/login" element={<PageTransition><LoginSignup /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
          <Route path="/home" element={isAuthenticated ? <PageTransition><HomePage /></PageTransition> : <Navigate to="/login" />} />
          <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/khalti-payment" element={<KhaltiPayment />} />
          <Route path="/payment" element={<PaymentButton />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/categories/burger" element={<BurgerCategory />} />
          <Route path="/categories/sausages" element={<SausagesCategory />} />
          <Route path="/categories/chocolate" element={<ChocolateCategory />} />
          <Route path="/categories/cake" element={<CakeCategory />} />
          <Route path="/categories/cauliflower-chickpea-curry" element={<CauliflowerChickpeaCurryCategory />} />
          <Route path="/categories/vegan-nuggets" element={<VeganNuggetsCategory />} />
          <Route path='/categories/hot-dogs' element={<HotDogsCategory />} />
          <Route path="/categories/nut-meat" element={<NutMeatCategory />} />
          <Route path="/categories/chick-pea-salad" element={<ChickPeaSaladCategory />} />

        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
