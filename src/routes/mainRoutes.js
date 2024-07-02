import {
    HashRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import FAQ from '../pages/FAQ';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from "../pages/Services";
import GetService from "../pages/GetService";
import BlogDetails from '../pages/BlogDetails';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsConditions from "../pages/TermsConditions";

export default function MainRoute() {

    return(
        <Routes>
            <Route exact path="/" element={<Blog />} />
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/blogs" element={<Blog />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/terms" element={<TermsConditions />} />
            <Route exact path="/privacy" element={<PrivacyPolicy />} />
            <Route exact path="/get-service/:slug" element={<GetService />} />
            <Route exact path="/blog-details/:slug" element={<BlogDetails />} />
        </Routes>
    );
};