import React,
{
    useRef,
    useState,
    useEffect
} from 'react';
import moment from "moment";
import { useParams } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

import api from "../../axios";
import "./blogdetails.style.css";
import Loader from '../../Components/Loader';
import Banner from '../../Components/Banner';

const BlogDetails = () => {

    const params = useParams();
    
    const [ blogData, setBlogData ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getBlogDetails();
    }, []);

    const getBlogDetails = async () => {

        
        const blogDtl = await api.get(`/posts/${params?.slug}?_embed`);
        
        setIsLoading(false);
        setBlogData(blogDtl?.data);
        
    }

    return(
        <div>
            {isLoading ? 
                <Loader />
            :
                <>
                    <Banner 
                        pageName="Blog"
                        desc={blogData?.title?.rendered}
                    />
                    <div className="blog-area pt-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 blog-post-item">
                                    <div className="blog-wrapper blog-details">
                                        <div className="blog-img img-full">
                                            <img src={blogData?._embedded['wp:featuredmedia']?.[0].media_details?.sizes?.la_770?.source_url} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <ul className="blog-meta">
                                                <li>{moment(blogData?.date).format('MMMM Do YYYY')}</li> 
                                                <li><a href="#">{blogData?._embedded?.author[0]?.name}</a></li>
                                                {/* <li><a href="#">4 comments</a></li> */}
                                            </ul>
                                            <h3>{blogData?.title?.rendered}</h3>
                                            <p dangerouslySetInnerHTML={{ __html: blogData?.content?.rendered }} />
                                            {/* <div className="row">
                                                <div className="col-md-6">
                                                    <ul className="blog-post-list">
                                                        <li> Lawyer boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
                                                        <li> Lawyer boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
                                                        <li> Lawyer boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="blog-post-list">
                                                        <li> Lawyer boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
                                                        <li> Lawyer boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="blog-gallery img-full mb-30">
                                                        <img src={`${window.location.origin}/assets/images/blog-gallery.jpg`} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="blog-gallery img-full mb-30">
                                                        <img src={`${window.location.origin}/assets/images/blog-gallery.jpg`} alt="" />
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <blockquote className="mb-55">The first forty years of life give us the text; the next thirty supply the commentary on it.</blockquote> */}
                                            {/* <div className="blog-bottom-content">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p>Lawyer boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt  obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure  obtain</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>Lawyer boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt  obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure  obtain</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="blog-author mt-60 mb-40">
                                        <div className='row'>
                                            <div className='col-lg-12 col-sm-12 col-md-12'>
                                                <h4 className="small-title">Author</h4>
                                            </div>
                                            <div className='col-lg-12 col-sm-12 col-md-12'>
                                                <div className="blog-author-box">
                                                    <div className="blog-author-img">
                                                        {blogData?._embedded?.author[0]?.avatar_urls ? 
                                                            <img src={blogData?._embedded?.author[0]?.avatar_urls["96"]} alt="" />
                                                        :
                                                            <img src={`${window.location.origin}/assets/images/author/author2.jpg`} alt="" />
                                                        }
                                                    </div>
                                                    <div className="blog-author-content">
                                                        <h6>{blogData?._embedded?.author[0]?.name}</h6>
                                                        <p>{blogData?._embedded?.author[0]?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="common-tag-and-next-prev mt-65">
                                        <div className="common-tag">
                                            <h6>Tags: </h6>
                                            <ul>
                                                <li><a href="#">lawfirm,</a></li>
                                                <li><a href="#">Lawyer,</a></li>
                                                <li><a href="#">Business law</a></li>
                                            </ul>
                                        </div>
                                        <div className="blog-share">
                                            <h6>Share:</h6>
                                            <ul>
                                                <li><a href="#">Facebook,</a></li>
                                                <li><a href="#">Tweeter,</a></li>
                                                <li><a href="#">Google+</a></li>
                                            </ul>
                                        </div>
                                        <div className="next-prev-post">
                                            <ul>
                                                <li><a href="#"><i className="icofont icofont-long-arrow-left"></i> Previous</a></li>
                                                <li><a href="#">Next<i className="icofont icofont-long-arrow-right"></i></a></li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    {/* Comment section */}
                                    {/* <div className="comment-list mt-60">
                                        <h4 className="small-title">Comments</h4>
                                        <div className="comment">
                                            <div className="blog-author-img">
                                                <img src={`${window.location.origin}/assets/images/author/author2.jpg`} alt="" />
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-content-top">
                                                    <h6>Alvaro Santos</h6>
                                                    <span>08 Jun 2017</span>
                                                </div>
                                                <a href="#" className="reply">Reply</a>
                                                <div className="comment-content-bottom">
                                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and ising pain  borand I will give you a complete account of the system</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment reply">
                                            <div className="blog-author-img">
                                                <img src={`${window.location.origin}/assets/images/author/author2.jpg`} alt="" />
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-content-top">
                                                    <h6>Julia thomas</h6>
                                                    <span>06 Jun 2017</span>
                                                </div>
                                                <a href="#" className="reply">Reply</a>
                                                <div className="comment-content-bottom">
                                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and ising pain  borand I will give you a complete account of the system</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="blog-author-img">
                                                <img src={`${window.location.origin}/assets/images/author/author2.jpg`} alt="" />
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-content-top">
                                                    <h6>Nicolus Christopher</h6>
                                                    <span>08 Jun 2017</span>
                                                </div>
                                                <a href="#" className="reply">Reply</a>
                                                <div className="comment-content-bottom">
                                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and ising pain  borand I will give you a complete account of the system</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-box mt-60">
                                        <h4 className="small-title">Leave a Comment</h4>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="single-input">
                                                        <input name="commenter-name" placeholder="Name" id="commenter-name" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-input">
                                                        <input name="commenter-email" placeholder="Email" id="commenter-email" type="email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-input">
                                                        <textarea name="commenter-message" placeholder="Message" id="commenter-message" cols="30" rows="5"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-input">
                                                        <button className="sent-btn" type="submit">SEND Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                                <div className="col-lg-4 blog-sidebar right-sidebar">
                                    {/* <div className="widget mb-60">
                                        <div className="widget-title">
                                            <h4>Search</h4>
                                        </div>
                                        <div className="sidebar-form">
                                            <form action="#">
                                                <input type="text" placeholder="Search" />
                                                <button type="submit"><CiSearch /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget mb-60">
                                        <div className="widget-title">
                                            <h4>Recent Posts</h4>
                                        </div>
                                        <div className="sidebar-rc-post">
                                            <ul>
                                                <li>
                                                    <div className="rc-post-thumb">
                                                        <a href="single-blog.html">
                                                            <img src={`${window.location.origin}/assets/images/rc-post/rc-post1.jpg`} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="rc-post-content">
                                                        <div className="widget-date">January 18,  2018</div>
                                                        <h4><a href="single-blog.html">Corporate Law Training for all Employe</a></h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="rc-post-thumb">
                                                        <a href="single-blog.html"><img src={`${window.location.origin}/assets/images/rc-post/rc-post1.jpg`} alt="" /></a>
                                                    </div>
                                                    <div className="rc-post-content">
                                                        <div className="widget-date">January 16,  2018</div>
                                                        <h4><a href="single-blog.html">If I want to shift London, need to follow some Law</a></h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="rc-post-thumb">
                                                        <a href="single-blog.html"><img src={`${window.location.origin}/assets/images/rc-post/rc-post1.jpg`} alt="" /></a>
                                                    </div>
                                                    <div className="rc-post-content">
                                                        <div className="widget-date">January 14,  2018</div>
                                                        <h4><a href="single-blog.html">Employemnt facilities, benefits & opportunities</a></h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="rc-post-thumb">
                                                        <a href="single-blog.html"><img src={`${window.location.origin}/assets/images/rc-post/rc-post1.jpg`} alt="" /></a>
                                                    </div>
                                                    <div className="rc-post-content">
                                                        <div className="widget-date">January 12,  2018</div>
                                                        <h4><a href="single-blog.html">Corporate Law Training for all Employe</a></h4>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div className="widget mb-60">
                                        <div className="widget-title">
                                            <h4>Categories</h4>
                                        </div>
                                        <div className="widget-categories">
                                            <ul>
                                                <li><a href="#">Criminal Law</a> <span>(20)</span></li>
                                                <li><a href="#">Family Law</a> <span>(18)</span></li>
                                                <li><a href="#">Civil LLitigation</a> <span>(40)</span></li>
                                                <li><a href="#">Insurance Law</a> <span>(30)</span></li>
                                                <li><a href="#">Divorce Law</a> <span>(66)</span></li>
                                                <li><a href="#">Employment Law</a> <span>(99)</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget mb-60">
                                        <div className="widget-title">
                                            <h4>Tags</h4>
                                        </div>
                                        <div className="widget-tag">
                                            <ul className="sidebar-tag">
                                                <li><a href="#">Criminal Law</a></li>
                                                <li><a href="#">Support</a></li>
                                                <li><a href="#">Family Law</a></li>
                                                <li><a href="#">Investment Law</a></li>
                                                <li><a href="#">Divorce Law</a></li>
                                                <li><a href="#">Law</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default BlogDetails;