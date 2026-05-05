import React from "react";

const About = ({ image = "https://via.placeholder.com", about }) => {
  return (
    <>
      <aside>
        <img src={image} alt="blog logo" />
        <p>{about}</p>
      </aside>
    </>
  );
};

export default About;
