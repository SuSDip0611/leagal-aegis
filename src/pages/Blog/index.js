import React,
{
    useState,
    useEffect,
} from "react";

import "./blog.style.css";
import api from "../../axios";
import Loader from "../../Components/Loader";
import Banner from "../../Components/Banner";
import BlogCard from "../../Components/BlogCard";

const Blog = () => {

    const [allBlogs, setAllBlogs] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllBlogs();
    }, []);

    const getAllBlogs = async () => {

        const blogs = await api.get('/posts?_embed');

        setIsLoading(false);
        setAllBlogs(blogs?.data);
        
    }

    return(
        <div>
            {isLoading ? 
                <Loader />
            :
                <>
                    {/* <Banner 
                        pageName="Blogs"
                        desc=""
                    /> */}
                    <div className="slider-area">
                        <div className="single-slider" >
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-8 col-xl-6">
                                        <div className="hero-content">
                                            <div className="title">
                                                <h1>Mr. Legal Aegis</h1>
                                                <h2>Expert Lawyer</h2>
                                            </div>
                                            <div className="description">
                                            <p>Hi, I am expert lawyer. We solve your problems  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p> 
                                            </div> 
                                            <a href="appointment.html">Make an appointment</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xl-6">
                                        <div className="hero-img img-full mt-30 hero-image-holder" data-wow-duration="1.5s" >
                                            <img src={`${window.location.origin}/assets/images/slider/slider-img.png`} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-area pt-120">
                        <div className="container">
                            <div className="row">
                                {/* {blogs?.map((blog, index) => { */}
                                {allBlogs?.map((blog, index) => {
                                    return <BlogCard data={blog} />
                                })}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Blog;