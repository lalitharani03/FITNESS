import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Sidebar from '../Profile/Sidebar';
import BMICalculator from './BMICalc';
import '../PlanningPage/Plan.css';
import Myworkout from './Myworkout';
import DietPlan from './DietPlan';

export default function Plan() {
  const { userId } = useParams(); 
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const height = parseFloat(params.get('height')) || 0;
  const weight = parseFloat(params.get('weight')) || 0;
  const fname = params.get('fname') || 'User';
  console.log('Plan page params:', { userId, height, weight, fname });

  return (
    <div>
      <Sidebar userId={userId} height={height} weight={weight} fname={fname} />
      <h1 className='gupter-bold' style={{marginLeft:'8cm',marginTop:'2cm'}}>Hiii {fname} !!!</h1>
      
      <div style={{ padding: '20px' }}>
        <BMICalculator height={height} weight={weight} />
      </div>
      <div>
        <Myworkout/>
      </div>
      <div className='diet-plan'>
        <DietPlan/>
      </div>
    </div>
  );
}
