import moment from "moment";

import "./blogCard.style.css"
import { FaArrowRightLong } from "react-icons/fa6";

import { removeHTMLtags } from "../../Utils/helpers";

const BlogCard = ({ data }) => {

    return(
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blog-card" key={data?.id}>
            <div className="single-blog mb-30">
                <a href={`/blog-details/${data?.id}`}>
                    <div className="row">
                        {data?._embedded['wp:featuredmedia']?.[0].media_details?.sizes?.la_370?.source_url ? 
                            <>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="blog-img">
                                        <a href={`/blog-details/${data?.id}`}><img src={data?._embedded['wp:featuredmedia']?.[0].media_details?.sizes?.la_370?.source_url} alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <div className="blog-list-content" >
                                        <h3><a className="blog-title-text" href={`/blog-details/${data?.id}`}>{data?.title?.rendered}</a></h3>
                                        <ul className="blog-meta-data">
                                            <li>{moment(data?.date).format('MMMM Do YYYY')}</li> 
                                            <li>-</li> 
                                            <li><a href={`/blog-details/${data?.id}`}>{data?._embedded?.author[0]?.name}</a></li>
                                            {/* <li><a href={`/blog-details/${data?.id}`}>{4}</a></li> */}
                                        </ul>
                                        <p className="blog-desc">{removeHTMLtags(data?.content?.rendered)}</p>
                                        <a href={`/blog-details/${data?.id}`}><span>Continue Reading</span> <FaArrowRightLong className="arrIcon" /> </a>
                                    </div>
                                </div>
                                
                            </>
                        :
                            <>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <a href={`/blog-details/${data?.id}`}>
                                            <div className="blog-list-content" >
                                                <h3><a className="blog-title-text" href={`/blog-details/${data?.id}`}>{data?.title?.rendered}</a></h3>
                                                <ul className="blog-meta-data">
                                                    <li>{moment(data?.date).format('MMMM Do YYYY')}</li> 
                                                    <li>-</li> 
                                                    <li><a href={`/blog-details/${data?.id}`}>{data?._embedded?.author[0]?.name}</a></li>
                                                    {/* <li><a href={`/blog-details/${data?.id}`}>{4}</a></li> */}
                                                </ul>
                                                <p className="blog-desc-nimg">{removeHTMLtags(data?.content?.rendered)}</p>
                                                <a href={`/blog-details/${data?.id}`}><span>Continue Reading</span> <FaArrowRightLong className="arrIcon" /> </a>
                                            </div>
                                    </a>
                                </div>
                            </>
                        }
                    </div>
                </a>
            </div>
        </div>
    );
}

export default BlogCard;