import React from "react";

function ServicesSection() {
  return (
    <div className="services-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Website Development Card */}
          <div className="col">
            <div className="card h-100">
              <img
                src="https://ascentmediaagency.com/wp-content/uploads/2023/10/E-Commerce-825x1024.jpg"
                className="card-img-top"
                alt="Website Development"
              />
              <div className="card-body">
                <h5 className="card-title">Website Development</h5>
                <p className="card-text">
                  We create beautiful, responsive websites that provide an
                  excellent user experience and help grow your business.
                </p>
              </div>
            </div>
          </div>

          {/* Ads Card */}
          <div className="col">
            <div className="card h-100">
              <img
                src="https://ascentmediaagency.com/wp-content/uploads/2023/08/Facebook-Adwords-825x1024.jpg"
                className="card-img-top"
                alt="Ads Management"
              />
              <div className="card-body">
                <h5 className="card-title">Ads Management</h5>
                <p className="card-text">
                  We manage paid ads across platforms like Google and Facebook,
                  targeting the right audience to boost your sales.
                </p>
              </div>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="col">
            <div className="card h-100">
              <img
                src="https://ascentmediaagency.com/wp-content/uploads/2023/10/Social-Media-Management-825x1024.jpg"
                className="card-img-top"
                alt="Digital Marketing"
              />
              <div className="card-body">
                <h5 className="card-title">Digital Marketing</h5>
                <p className="card-text">
                  Our digital marketing services help you build an online
                  presence, enhance brand awareness, and drive traffic to your
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
