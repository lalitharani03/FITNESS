import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../PlanningPage/Myworkout.css';

export default function Myworkout() {
  const { userId } = useParams();
  const [fitnessGoal, setFitnessGoal] = useState('');

  useEffect(() => {
    if (userId) {
      // Fetch user details to get the fitness goal
      axios.get(`http://localhost:8080/api/v1/details/${userId}`)
        .then(response => {
          setFitnessGoal(response.data.fitnessGoals); // Assuming `fitnessGoals` is the correct field
        })
        .catch(error => {
          console.error("There was an error fetching the fitness goal!", error);
        });
    }
  }, [userId]);

  // Define the link based on fitness goals
  const workoutLink = `/workouts/${userId}?goal=${encodeURIComponent(fitnessGoal)}`;

  return (
    <div className='workoutpage'>
      <a href={workoutLink} className='gupter-regular'>Go to your workout page</a>
    </div>
  );
}
