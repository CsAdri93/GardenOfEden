import { useEffect } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bexohbg",
        "template_ls7y3jj",
        form.current,
        "d2UttfK538cw2Ha72"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          toast.success("Sikeres Üzenetküldés!", { autoClose: 2000 });
          setTimeout(() => {
            window.location.reload(true);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="p-5 m-auto text-center content img-up">
      <div
        id="contact"
        className="container-fluid"
      >
        <h1>Kapcsolat</h1>
        <hr className="mb-5"></hr>
        <div className="container vc_row wpb_row vc_row-fluid d-flex justify-content-around mb-5">
            <div className="wpb_column wpb_column_container vc_column-inner vc_col_sm-3 wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img width={25} height={38} src="/img/cim.png" alt="icon"></img>
                        </div>
                    </figure>
                </div>
                <div className="amy-shortcode amy-organic-heading">
                    <h3>Címünk</h3>
                    <p>3525 Miskolc, Palóczy László utca 3.</p>
                </div>
            </div>
            <div className="wpb_column wpb_column_container vc_column-inner vc_col_sm-3 wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img width={38} height={32} src="/img/email.png" alt="icon" href=""></img>
                        </div>
                    </figure>
                </div>
                <div className="wpb_text_column wpb_content_element wpb_wrapper">
                    <h3 style={{ textAlign: "center" }}>E-mail</h3>
                    <p style={{ textAlign: "center" }}>gardenofeden@gmail.com</p>
                </div>
            </div>
            <div className="wpb_column wpb_column_container vc_column-inner vc_col_sm-3 wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img width={38} height={32} src="/img/facebook.png" alt="icon" href=""></img>
                        </div>
                    </figure>
                </div>
                <div className="wpb_text_column wpb_content_element wpb_wrapper">
                    <h3 style={{ textAlign: "center" }}>Facebook</h3>
                    <p style={{ textAlign: "center" }}>gardenofeden</p>
                </div>
            </div>
            <div className="wpb_column wpb_column_container vc_column-inner vc_col_sm-3 wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img width={38} height={32} src="/img/insta.png" alt="icon" href=""></img>
                        </div>
                    </figure>
                </div>
                <div className="wpb_text_column wpb_content_element wpb_wrapper">
                    <h3 style={{ textAlign: "center" }}>Instagram</h3>
                    <p style={{ textAlign: "center" }}>gardenofeden.online</p>
                </div>
            </div>
        </div>
        <p>Küldj nekünk üzenetet:</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-lg-12" id="contact-center">
              <div className="col-lg-12">
                <div className="form-floating form-group mb-3 colorblack">
                  <input type="text" name="from_name" className="form-control" placeholder="nev" required/>
                  <label>Név*:</label>
                </div>
                <div className="form-floating form-group mb-3 colorblack">
                  <input type="email" name="user_email" className="form-control" id="email" placeholder="csapatnev@iskola.hu" required/>
                  <label>E-mail cím*:</label>
                </div>
                <div className="form-floating form-group mb-3 colorblack">
                  <input type="tel" name="user_phone" className="form-control" id="phonenumber" placeholder="+36123456789" required/>
                  <label htmlFor="phonenumber">Telefonszám:</label>
                </div>
                <div className="form-floating form-group mb-3 colorblack">
                  <textarea className="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "200px" }}></textarea>
                  <label htmlFor="floatingTextarea2">Üzenet:</label>
                </div>
                <hr></hr>
              </div>

              <div className="col-auto">
                <button type="submit" value="Send" className="btn btn-primary">Küldés</button>
              </div>
            </div>
          </div>
        </form>

        <a target="blank" title="facebook" className="left" href="https://www.facebook.com/kandomiskolc">
          <i className="bi bi-facebook" style={{ fontSize: "30px", padding: "5px 5px 5px 5px" }}></i>
        </a>
        <a target="blank" title="gmail" className="left" href="mailto:betubirodalominfo@gmail.com">
          <i className="bi bi-envelope-at" style={{ fontSize: "30px" }}></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
