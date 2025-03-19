const AboutBox = () => {
  return (
    <div className="about__boxes grid">

      <div className="about__box">
        <i className="about__icon icon-list"></i>
        <div>
          <h3 className="about__title">28</h3>
            <span className="about__subtitle">Projects complited</span>
          
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-star "></i>
        <div>
          <h3 className="about__title">12</h3>
            <span className="about__subtitle">Large projects</span>
          
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-link "></i>
        <div>
          <h3 className="about__title">1</h3>
            <span className="about__subtitle">API projects</span>
          
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">3</h3>
            <span className="about__subtitle">Full-Stack Projects</span>
         
        </div>
      </div>

    </div>
  );
};

export default AboutBox;
