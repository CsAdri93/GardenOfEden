import React, { useEffect } from "react";

export function AboutUs() {

  return (
    <div className="p-5 m-auto text-center content img-up">
      <div id="aboutus" className="container-fluid scrollspy">
        <h1>Rólunk:</h1>
        <hr />
        <div className="row mt-3">
          {/*BERTA*/}
          <div className=" col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-4">
            <br />
            <div className="card testimonial-card mt-2 mb-3">
              <div className="card-up aqua-gradient"></div>
              <div className="avatar mx-auto white">
                <img src="/img/berta.jpg" decoding="async" width={250} height={250} className="rounded-circle img-fluid shadow-lg mb-5 bg-body rounded" alt="Berta"
                />
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold colorblack">
                  Kala Berta Bíborka
                </h4>
                <h6 className="card-title font-weight-bold colorblack">
                   fejlesztő
                </h6>
                <hr />
                <p className="colorblack justify">
                  
                </p>
              </div>
            </div>
          </div>
          {/*BERTA*/}

          {/*CSABI*/}
          <div className=" col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-4">
            <br></br>
            <div className="card testimonial-card mt-2 mb-3">
              <div className="card-up aqua-gradient"></div>
              <div className="avatar mx-auto white">
                <img src="/img/csabi.jpg" decoding="async" width={250} height={250} className="rounded-circle img-fluid shadow-lg mb-5 bg-body rounded" alt="Csaba"
                />
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold colorblack">
                  Naár Csaba
                </h4>
                <h6 className="card-title font-weight-bold colorblack">
                   fejlesztő
                </h6>
                <hr></hr>
                <p className="colorblack justify">
                  
                </p>
              </div>
            </div>
          </div>
          {/*CSABI*/}

          {/*ADRI*/}
          <div className=" col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-4">
            <br></br>
            <div className="card testimonial-card mt-2 mb-3">
              <div className="card-up aqua-gradient"></div>
              <div className="avatar mx-auto white">
                <img src="/img/adri.jpg" decoding="async" width={250} height={250} className="rounded-circle img-fluid shadow-lg mb-5 bg-body rounded" alt="Adrienn"
                />
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold colorblack">
                  Csizmadia Adrienn{" "}
                </h4>
                <h6 className="card-title font-weight-bold colorblack">
                   fejlesztő
                </h6>
                <hr></hr>
                <p className="colorblack justify">
                  
                </p>
              </div>
            </div>
          </div>
          {/*ADRI*/}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
