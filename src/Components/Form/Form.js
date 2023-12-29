import React from 'react'
import './form.css'
const Form = () => {
  return (
    <form className='form mx-1'>
    <div class="mb-3 form_row">
<label for="exampleFormControlInput1" className="form-label"> الاسم</label>
<input type="text" className="form-control" id="exampleFormControlInput1" />
</div>
    <div className="mb-3 form_row">
<label for="exampleFormControlInput1" className="form-label">الايميل</label>
<input type="email" className="form-control" id="exampleFormControlInput1" />
</div>
    <div className="mb-3 form_row">
<label for="exampleFormControlInput1" className="form-label">رقم الهاتف</label>
<input type="number" className="form-control" id="exampleFormControlInput1" />
</div>
    <div className="mb-3 form_row">
<label for="exampleFormControlInput1" className="form-label">الغرض من التواصل</label>
<input type="text" className="form-control" id="exampleFormControlInput1" />
</div>
    <div className="mb-3 form_row">
<label for="exampleFormControlInput1" className="form-label ">  الرسالة</label>
<input type="text" className="form-control massage" id="exampleFormControlInput1" />
</div>
    <div className="mt-5 mb-5 d-flex justify-content-center">
<button className='btn btn2 '>ارسال</button>
</div>
    </form>  
    )
}

export default Form