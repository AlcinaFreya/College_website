import React, { useState } from 'react';
import { Rating, TextField, Button } from '@mui/material';
import './Rating1.css'

const Rating1 = () => {
  const [feedbackData, setFeedbackData] = useState({
    infrastructure: 0,
    faculty: 0,
    crowd: 0,
    value: 0,
    additionalFeedback: ''
  });

  const handleRatingChange = (category, newValue) => {
    setFeedbackData(prevState => ({
      ...prevState,
      [category]: newValue
    }));
  };

  const handleFeedbackChange = (event) => {
    const value = event.target.value;
    setFeedbackData(prevState => ({
      ...prevState,
      additionalFeedback: value
    }));
  };

  const handleSubmit = () => {
    
    console.log("Feedback Data:", feedbackData);
    
    setFeedbackData({
      infrastructure: 0,
      faculty: 0,
      crowd: 0,
      value: 0,
      additionalFeedback: ''
    });
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-heading">Feedback Page</h2>
      
      <div className="feedback-item">
        <label className="feedback-label">Infrastructure</label>
        <Rating
          value={feedbackData.infrastructure}
          onChange={(event, newValue) => handleRatingChange('infrastructure', newValue)}
        />
      </div>
      <div className="feedback-item">
        <label className="feedback-label">Faculty & Course Curriculum</label>
        <Rating
          value={feedbackData.faculty}
          onChange={(event, newValue) => handleRatingChange('faculty', newValue)}
        />
      </div>
      <div className="feedback-item">
        <label className="feedback-label">Crowd & Campus Life</label>
        <Rating
          value={feedbackData.crowd}
          onChange={(event, newValue) => handleRatingChange('crowd', newValue)}
        />
      </div>
      <div className="feedback-item">
        <label className="feedback-label">Value for Money</label>
        <Rating
          value={feedbackData.value}
          onChange={(event, newValue) => handleRatingChange('value', newValue)}
        />
      </div>
      <div className="feedback-item">
        <label className="feedback-label">Additional Feedback</label>
        <TextField
          className="feedback-input"
          multiline
          rows={4}
          variant="outlined"
          value={feedbackData.additionalFeedback}
          onChange={handleFeedbackChange}
        />
      </div>
      <Button className="submit-button" onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Rating1;