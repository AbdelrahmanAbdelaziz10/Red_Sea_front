import "./form.css";

import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [subject, setSubject] = useState({});
  const [message, setMassage] = useState({});


//   const handleFieldChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios.post(
      "https://beautyproducts.website/api/v1/contact",
      {name,email,phone,subject,message});
      console.log(res.data)
  };

  return (
    <form className="form mx-1" onSubmit={handleSubmit}>
      <div class="mb-3 form_row">
        <label for="exampleFormControlInput1" className="form-label">
          الاسم
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          required
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className="mb-3 form_row">
        <label for="exampleFormControlInput1" className="form-label">
          الايميل
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          required
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3 form_row">
        <label for="exampleFormControlInput1" className="form-label">
          رقم الهاتف
        </label>
        <input
          name="phone"
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          required
          onChange={(e)=>setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3 form_row">
        <label for="exampleFormControlInput1" className="form-label">
          الغرض من التواصل
        </label>
        <input
          name="subject"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          required
          onChange={(e)=>setSubject(e.target.value)}
        />
      </div>
      <div className="mb-3 form_row">
        <label for="exampleFormControlInput1" className="form-label ">
          الرسالة
        </label>
        <input
          name="message"
          type="text"
          className="form-control massage"
          id="exampleFormControlInput1"
          required
          onChange={(e)=>setMassage(e.target.value)}
        />
      </div>
      <div className="mt-5 mb-5 d-flex justify-content-center">
        <button className="btn btn2 ">ارسال</button>
      </div>
    </form>
  );
};

export default Form;