import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// CSS
import "./core-ui/app.css";
import "./core-ui/responsive.css";
import "./core-ui/leaflet.css";
import './pages/menu/menu.css'
import './pages/contact/contact.css'
import './pages/about/about.css'
import './pages/blog/blog.css'
import './pages/cart/cart.css'
import './pages/registration/register.css'
import './pages/checkout/checkout.css'
import './pages/payment/payments.css'
import './pages/not-found/notFound.css'
import './pages/blog-post/blogPost.css'
import './pages/profile/profile.css'
import './pages/single-item/singleItem.css'


//Components
import App from "./App.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
