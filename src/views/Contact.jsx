import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaRegEnvelopeOpen } from "react-icons/fa";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";
const Contact = () => {
  //eslint-disable-next-line
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    message: "",
    user_nameError: "",
    user_emailError: "",
    messageError: "",
  });

  const form = useRef();
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    let user_nameError = "";
    let user_emailError = "";
    let messageError = "";
    if (!user?.user_name) {
      user_nameError = "Name is required!";
    }
    if (!user?.user_email || reg.test(user?.user_email) === false) {
      user_emailError = "Email is Invalid!";
    }
    if (!user?.message) {
      messageError = "Message is required!";
    }
    if (user_nameError || user_emailError || messageError) {
      setUser({ user_nameError, user_emailError, messageError });
      return false;
    }
    return true;
  };

  const onFinish = (values) => {
    values.preventDefault();
    if (validate()) {
      emailjs
        .sendForm(
          "service_g4abld2",
          "template_4f3mrbf",
          form.current,
          "EC571qUOCIA2_nAtg"
        )
        .then(
          (result) => {
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
      setUser({
        user_name: "",
        user_email: "",
        message: "",
        user_nameError: "",
        user_emailError: "",
        messageError: "",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="col-10 mx-auto ">
          <div className="text-center main_heading pb-4">
            <h1>
              Contact Me
              <p>Lets Keep In Touch</p>
            </h1>
          </div>
          <div className=" shadows">
            <div className="row  mx-2">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="contact-info mx-5">
                  <h5>
                    <FaRegEnvelopeOpen />
                  </h5>
                  <h6>
                    Email me at hussnainpirzada786@gmail.com
                    <span>or</span>
                    connet with me on my social networks
                  </h6>
                  <div className="icons-contact mx-5">
                    <div className="facebook">
                      <FiFacebook />
                    </div>
                    <div className="linkedin">
                      <FaLinkedinIn />
                    </div>
                    <div className="skype">
                      <AiOutlineSkype />
                    </div>
                    <div className="github">
                      <FiGithub />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <form
                  name="myForm"
                  ref={form}
                  onSubmit={onFinish}
                  className="py-3"
                >
                  <div>
                    <label className="label">
                      Name <span>*</span>
                    </label>
                    <input
                      className="form-control my-2"
                      type="text"
                      name="user_name"
                      value={user.user_name}
                      onChange={handleChange}
                    />
                    <div style={{ color: "red" }}>{user.user_nameError}</div>
                  </div>
                  <div>
                    <label className="label">
                      Email <span>*</span>
                    </label>
                    <input
                      className="form-control my-2"
                      type="text"
                      name="user_email"
                      value={user.user_email}
                      onChange={handleChange}
                    />
                    <div style={{ color: "red" }}>{user.user_emailError}</div>
                  </div>
                  <div className="message">
                    <label className="label">
                      Message <span>*</span>
                    </label>
                    <textarea
                      className="form-control my-2"
                      name="message"
                      value={user.message}
                      onChange={handleChange}
                    />
                    <div style={{ color: "red" }}>{user.messageError}</div>
                  </div>

                  <div className="text-center">
                    <input
                      className="buttonTwo my-3"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
