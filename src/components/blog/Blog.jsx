import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
  return (<section className="blog container section"  id="Blog">
    <h2 className="section__title">
      Latest Posts
    </h2>
    <div className="blog__container grid">


      <div className="blog__card">
        <div className="blog__thumb">
          <a href=""><span className="blog__category">Reviews</span></a>
          <a href=""><img src={Image1} alt=""  className="blog__image"/></a>
        </div>
        <div className="blog__detail">
          <h3 className="blog__title">5 Best App Development Tool for your Projects</h3>
          <div className="blog__meta">
            <span>09 February, 2022</span>
            <span className="blog__dot">.</span>
            <span>Raj</span>
          </div>
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__thumb">
          <a href=""><span className="blog__category">Tutorial</span></a>
          <a href=""><img src={Image2} alt=""  className="blog__image"/></a>
        </div>
        <div className="blog__detail">
          <h3 className="blog__title">Common Misconception About Payment</h3>
          <div className="blog__meta">
            <span>07 February, 2022</span>
            <span className="blog__dot">.</span>
            <span>Raj</span>
          </div>
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__thumb">
          <a href=""><span className="blog__category">Business</span></a>
          <a href=""><img src={Image1} alt=""  className="blog__image"/></a>
        </div>
        <div className="blog__detail">
          <h3 className="blog__title">3 Things to know about StartUp Business</h3>
          <div className="blog__meta">
            <span>05 Feburary, 2022</span>
            <span className="blog__dot">.</span>
            <span>Raj</span>
          </div>
        </div>
      
      </div>
    </div>
  </section>);
};

export default Blog;