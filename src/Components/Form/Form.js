import "./form.css";
import "sweetalert2/dist/sweetalert2.min.css";

import React, { useState } from "react";

import Swal from "sweetalert2";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,4}$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    // Validate phone (optional)
    // Validate Phone
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Valid 10-digit phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid Phone Number address";
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };

  // SWeet Alart
  const handleClick = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Massage has been Send",
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        container: "sweat_alert_popup",
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If form is valid, make the API call
      try {
        setIsSubmitting(true);

        // Assuming your API endpoint is '/api/contact'
        const response = await axios.post(
          "https://beautyproducts.website/api/v1/contact",
          formData
        );

        // Handle success, e.g., show a success message or redirect
        handleClick();
      } catch (error) {
        // Handle error, e.g., show an error message
        console.error("Error submitting form", error);
      } finally {
        setIsSubmitting(false);
      }
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form mx-1" onSubmit={handleSubmit}>
      <div class="mb-3 form_row">
        <label for="exampleFormControlInput1" className="form-label">
          {t("form_name")}
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          required
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div className="mb-3 form_row">
        <label for="exampleFormControlInput1" className="form-label">
          {t("form_email")}
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div className="mb-3 form_row">
        <label for="exampleFormControlInput1" className="form-label">
          {t("form_phone")}
        </label>
        <input
          name="phone"
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <div className="mb-3 form_row">
        <label for="exampleFormControlInput1" className="form-label">
          {t("form_subject")}
        </label>
        <input
          name="subject"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <p>{errors.subject}</p>}
      </div>

      <div className="mb-3 form_row">
        <label for="exampleFormControlInput1" className="form-label ">
          {t("form_massage")}
        </label>
        <input
          name="message"
          type="text"
          className="form-control massage"
          id="exampleFormControlInput1"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p>{errors.message}</p>}
      </div>

      <div className="mt-5 mb-5 d-flex justify-content-center">
        <button className="btn btn2 " disabled={isSubmitting}>
          {t("form_btn")}
        </button>
      </div>
    </form>
  );
};

export default Form;