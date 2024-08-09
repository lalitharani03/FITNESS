// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./Sidebar.css"; 
// function Sidebar({ userId ,height,weight,fname}) {
//     console.log("Sidebar: "+userId+" "+height+" "+weight+" "+fname);
//     return (
//         <div className="sidebar">
//             <ul>
//                 <li><Link to={`/profile/${userId}`}>Profile</Link></li>
//                 <li><Link to={`/planning/${userId}?height=${height}&weight=${weight}&fname=${fname}`}>Planning</Link></li>
//                 <li><Link to="/workouts">Workouts</Link></li>
//                 <li><Link to="/diet-plan">Diet Plan</Link></li>
//             </ul>
//         </div>
//     );
// }

// export default Sidebar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"; 

function Sidebar({ userId, height, weight, fname }) {
    console.log("Sidebar: " + userId + " " + height + " " + weight + " " + fname);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
                ☰
        </div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <h2 style={{color:'white',textAlign:'center',marginLeft:'2px',marginRight:'3px'}}>𝕂𝕚𝕟𝕖𝕥𝕚𝕔 𝕂𝕣𝕒𝕫𝕖</h2>
            <ul>
                <li><Link to={`/profile/${userId}`}>Profile</Link></li>
                <li><Link to={`/planning/${userId}?height=${height}&weight=${weight}&fname=${fname}`}>Planning</Link></li>
                <li><Link to={`/workouts/${userId}`}>Workouts</Link></li>
                <li><Link to={`/diet-plan/${userId}`}>Diet Plan</Link></li>
            </ul>
        </div>
        </>
    );
}

export default Sidebar;
