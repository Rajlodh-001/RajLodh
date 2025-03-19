import React, { useState } from "react";
import Menu from "./Menu";
import "./portfolio.css";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [visibleCount, setVisibleCount] = useState(6); // Show first 6 items by default

  const filterItems = (categoryItems) => {
    const updateitems = Menu.filter((curItem) => curItem.category === categoryItems);
    setItems(updateitems);
    setVisibleCount(6); // Reset to show only 6 filtered items
  };

  return (
    <section className="work container section" id="Portfolio">
      <h2 className="section__title">Recent Work</h2>

      <div className="work__filters">
        <span className="work__items" onClick={() => setItems(Menu)}>Everything <span className="notification-badge">28</span></span>
        <span className="work__items" onClick={() => filterItems("javascript")}>Javascript</span>
        <span className="work__items" onClick={() => filterItems("react")}>React</span>
        <span className="work__items" onClick={() => filterItems("nextjs")}>NextJs</span>
        <span className="work__items" onClick={() => filterItems("fullstack")}>FullStack</span>
      </div>

      <div className="work__container grid">
        {items.slice(0, visibleCount).map((item) => {
          const { id, image, title, category,href } = item;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={href} target="_blank" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>

      {/* Show Load More & Show Less buttons only if more than 6 items exist */}
      {items.length > 6 && (
        <div className="work__buttons">
          {visibleCount < items.length && (
            <button className="show-more" onClick={() => setVisibleCount(visibleCount + 6)}>
              Show More
            </button>
          )}
          {visibleCount > 6 && (
            <button className="show-less" onClick={() => setVisibleCount(6)}>
              Show Less
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
