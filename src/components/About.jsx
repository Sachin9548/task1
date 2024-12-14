import React from "react";

function About() {
  return (
    <div className="container mt-5">
      {/* <h1 className="display-4 text-center">About Page</h1> */}
      <h5 className="display-4 text-center">Ascent Media Agency</h5>
      <p className="lead text-center">
        Ascent Media is the Best Digital Marketing Company in India. We provide
        digital services to leverage business growth through online media. Our
        services incorporate strategies and protocols to deliver desired results
        to our clients. Above all, we strive to bring a change in the overall
        online scenario in India and reach new heights in terms of optimal
        digital environment.
      </p>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <img
              src="https://ascentmediaagency.com/wp-content/uploads/2024/01/About-Us-PNG-Photos.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                To enhance our client’s online presence by constantly upgrading
                our technology and competencies. Maintain a decent relationship
                with our clients and provide services to expand their reach to
                new markets. Provide impeccable customer service with the
                highest level of expertise and advice.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img
              src="https://ascentmediaagency.com/wp-content/uploads/2023/08/inner_choose_img.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">
                Our vision is to leverage our deep expertise and understanding
                of the business domain area and requirements of clients to
                create a solution for their individual business needs. To help
                clients in creating a positive and strong relationship with
                their audience and in brand building. To be known for our unique
                approaches and quality work towards providing the highest
                satisfaction to every client we work with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
