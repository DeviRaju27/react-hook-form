import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const[formData, setFormData] = useState(
        {name:'',email:'',feedback:''});
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData({...formData, [name]:value});
    } 
    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = ` 
            Name:${formData.name} 
            Email:${formData.email} 
            Feedback:${formData.feedback}`;
        const isConfirmed = window.confirm(`please confirm your feedback details:${confirmationMessage}`)
        if (isConfirmed) {
            console.log("submitting feedback", formData);
            setFormData({name:'',email:'',feedback:''})
            alert("Thank you for your feedback")
        }
    }
  return (
    <>
    <nav> 
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type ='text' name='name' placeholder='your name' value={formData.name} onChange={handleChange}/>
        <input type='email' name='email' placeholder='your email' value={formData.email} onChange={handleChange}/>
        <textarea name='feedback' placeholder='your feedback' value={formData.feedback} onChange={handleChange}></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default FeedbackForm;
