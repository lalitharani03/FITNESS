import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function DietPlan() {
  const { userId } = useParams();
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [dietPlan, setDietPlan] = useState({});

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:8080/api/v1/details/${userId}`)
        .then(response => {
          const goal = response.data.fitnessGoals;
          setFitnessGoal(goal);
          return axios.get(`http://localhost:8082/api/v1/dietplan/${encodeURIComponent(goal)}`);
        })
        .then(response => {
          setDietPlan(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the diet plan!", error);
        });
    }
  }, [userId]);

  return (
    <div className='diet-plan'>
      <h2>Your Diet Plan</h2>
      {Object.keys(dietPlan).map((day, index) => (
        <div key={index}>
          <h3>{day}</h3>
          <ul>
            {dietPlan[day].map((meal, idx) => (
              <li key={idx}>{meal}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
