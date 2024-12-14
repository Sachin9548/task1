import React from "react";

function GallerySection() {
  return (
    <div className="gallery-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Work</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Gallery Item 1 */}
          <div className="col">
            <div className="gallery-item">
              <img
                src="https://teztecch.com/upload/portfolio/1699945959875.jpg"
                className="img-fluid"
                alt="Gallery Image 1"
              />
              <div className="overlay">
                <div className="caption">Website Design</div>
              </div>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div className="col">
            <div className="gallery-item">
              <img
                src="https://ascentmediaagency.com/wp-content/uploads/2023/08/Digital-Marketing-825x1024.jpg"
                className="img-fluid"
                alt="Gallery Image 2"
              />
              <div className="overlay">
                <div className="caption">Digital Marketing</div>
              </div>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="col">
            <div className="gallery-item">
              <img
                src="https://via.placeholder.com/500"
                className="img-fluid"
                alt="Gallery Image 3"
              />
              <div className="overlay">
                <div className="caption">SEO Services</div>
              </div>
            </div>
          </div>

          {/* Gallery Item 4 */}
          <div className="col">
            <div className="gallery-item">
              <img
                src="https://via.placeholder.com/500"
                className="img-fluid"
                alt="Gallery Image 4"
              />
              <div className="overlay">
                <div className="caption">Ads Campaigns</div>
              </div>
            </div>
          </div>

          {/* Gallery Item 5 */}
          <div className="col">
            <div className="gallery-item">
              <img
                src="https://via.placeholder.com/500"
                className="img-fluid"
                alt="Gallery Image 5"
              />
              <div className="overlay">
                <div className="caption">E-Commerce Solutions</div>
              </div>
            </div>
          </div>

          {/* Gallery Item 6 */}
          <div className="col">
            <div className="gallery-item">
              <img
                src="https://via.placeholder.com/500"
                className="img-fluid"
                alt="Gallery Image 6"
              />
              <div className="overlay">
                <div className="caption">Brand Strategy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
