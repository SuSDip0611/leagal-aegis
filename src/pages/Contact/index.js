import React from "react";

import "./contact.style.css";
import Banner from "../../Components/Banner";

const Contact = () => {
    return(
        <div>
            <Banner 
                pageName="Contact us"
                desc="Adalot is the best Law Firm. We solve your problems  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam"
            />
            <div className="contact-us-area pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 contact-address">
                            <div className="contact-information">
                                <ul>
                                    <li>
                                        <h5>Address</h5>
                                        <p>256, Centerl Town, Main Street <br />  Hilton Tower, New Yourk</p>
                                    </li>
                                    <li>
                                        <h5>Phone</h5>
                                        <p><a href="tel:+8801265897568">+8801265 897 568</a><br />
                                        <a href="tel:+8801265897568">+8801235 598 656</a>
                                        </p>
                                    </li>
                                    <li>
                                        <h5>Web</h5>
                                        <p>
                                            <a href="#">info@yourweb.com</a>
                                            <br />
                                            <a href="#">www.yourweb.com</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-form">
                                <div className="contact-form-title">
                                    <h3>Get in Touch </h3>
                                    <p>Terms & Conditions deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt  obtain pain </p>
                                </div>
                                <form id="contact-form" action="mail.php" method="post">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input name="name" placeholder="Name" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input name="email" placeholder="E-mail" type="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input name="phone" placeholder="Phone" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input name="subject" placeholder="Subject" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <textarea name="message" cols="10" rows="4" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <button className="sent-btn" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-messege"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;