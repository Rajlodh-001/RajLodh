const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/Rajlodh-001"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      {/* <a href="" className="home__social-link" target="_blank">
        <i className="fa-brands fa-instagram"></i>
      </a> */}

      <a
        href="https://in.linkedin.com/in/raj-lodh?trk=people-guest_people_search-card"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>

      <a href="" className="home__social-link" target="_blank">
        <i className="fa-brands fa-twitter"></i>
      </a>

      <a href="#About" className="home__social-link">
        <i className="fa-regular fa-file"></i>
      </a>
      {/* <a href="" className="home__social-link" target="_blank">
        <i className="fa-brands fa-pinterest"></i>
      </a> */}
    </div>
  );
};

export default HeaderSocials;
