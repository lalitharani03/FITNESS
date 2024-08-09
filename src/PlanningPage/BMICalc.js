import React, { useState, useEffect } from 'react';
import './BMICalc.css';
// import { HiArrowLongRight } from "react-icons/hi2";

export default function BMICalculator({ height, weight }) {
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (height > 0 && weight > 0) {
      // Convert height from centimeters to meters
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setMessage('You are underweight. 🥲');
      else if (bmiValue < 24.9) setMessage('You have a normal weight. 🙌');
      else if (bmiValue < 29.9) setMessage('You are overweight. 🤨');
      else setMessage('You are obese. 😯');
    } else {
      setMessage('Please enter valid height and weight.');
    }
  }, [height, weight]);

  return (
    <>
    <div className="bmi-calculator">
      <div className="bmi-box">
        {bmi && <h2 className='gupter-regular'>Your BMI: {bmi}</h2>}
      </div>
      {/* <HiArrowLongRight className='arrow-icon'/> */}
      <div className="message-box">
        <h2 className='gupter-regular'>{message} </h2>
      </div>
    </div>
    </>
  );
}
