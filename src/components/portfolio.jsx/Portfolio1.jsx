// import React, { useState } from "react";
// import Menu from "./Menu";

// import "./portfolio.css";
// import { use } from "react";

// const Portfolio = () => {
//   const [items, setItems] = useState(Menu);

//   const filterItems = (categoryItems) => {
//     const updateitems = Menu.filter((curItem) => {
//       return curItem.category === categoryItems;
//     });
//     setItems(updateitems);
//   };
//   return (
//     <section className=" work container section" id="Portfolio">
//       <h2 className="section__title">Resent Work</h2>
//       <div className="work__filters">
//         <span className="work__items" onClick={() => setItems(Menu)}>EveryThing</span>
//         <span className="work__items" onClick={() => filterItems("Creative")}>
//           Creative
//         </span>
//         <span className="work__items" onClick={() => filterItems("Art")}>Art</span>
//         <span className="work__items" onClick={() => filterItems("Design")}>Design</span>
//         <span className="work__items" onClick={() => filterItems("Branding")}>Branding</span>
//       </div>

//       <div className="work__container grid">
//         {items.map((item) => {
//           const { id, image, title, category } = item;
//           return (
//             <div className="work__card" key={id}>
//               <div className="work__thumbnail">
//                 <img src={image} alt="" className="work__img" />
//                 <div className="work__mask"></div>
//               </div>
//               <span className="work__category">{category}</span>
//               <h3 className="work__title">{title}</h3>
//               <a href="#" className="work__button">
//                 <i className="icon-link work__button-icon"></i>
//               </a>
//             </div>
//           );
//         })}
//       </div>

      
//     </section>
//   );
// };

// export default Portfolio;
