// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
// import "../Profile/Profile.css";
// import defaultProfilePhoto from '../assets/images/profile.jpg';

// export default function Profile() {
//   const [registers, setRegisters] = useState([]);
//   const [details, setDetails] = useState([]);
//   const { userId } = useParams();
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedCustomer, setEditedCustomer] = useState({});
//   const [editedDetails, setEditedDetails] = useState({});
//   const navigate = useNavigate(); // Initialize useNavigate

//   useEffect(() => {
//     if (userId) {
//       fetchCustomersById(userId);
//       fetchDetailsById(userId);
//     }
//   }, [userId]);

//   const fetchDetailsById = (id) => {
//     axios.get(`http://localhost:8080/api/v1/details/${id}`)
//       .then(response => {
//         setDetails([response.data]);
//         setEditedDetails(response.data); // Set initial edited details
//       })
//       .catch(error => {
//         console.error("There was an error fetching the details!", error);
//       });
//   };

//   const fetchCustomersById = (id) => {
//     axios.get(`http://localhost:8080/api/registers/${id}`)
//       .then(response => {
//         setRegisters([response.data]);
//         setEditedCustomer(response.data); // Set initial edited customer
//       })
//       .catch(error => {
//         console.error("There was an error fetching the customers!", error);
//       });
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleUpdate = () => {
//     axios.put(`http://localhost:8080/api/registers/${userId}`, editedCustomer)
//       .then(response => {
//         setRegisters([response.data]);
//         setIsEditing(false);
//       })
//       .catch(error => {
//         console.error("There was an error updating the customer!", error);
//       });

//     axios.put(`http://localhost:8080/api/v1/details/${userId}`, editedDetails)
//       .then(response => {
//         setDetails([response.data]);
//         setIsEditing(false);
//       })
//       .catch(error => {
//         console.error("There was an error updating the details!", error);
//       });
//   };

//   const handleInputChange = (e, isCustomer) => {
//     const { name, value } = e.target;
//     if (isCustomer) {
//       setEditedCustomer({ ...editedCustomer, [name]: value });
//     } else {
//       setEditedDetails({ ...editedDetails, [name]: value });
//     }
//   };

//   const handlePhotoUpload = (event) => {
//     setProfilePhoto(URL.createObjectURL(event.target.files[0]));
//   };

//   const deleteCustomer = (customerId) => {
//     axios.delete(`http://localhost:8080/api/registers/${customerId}`)
//       .then(response => {
//         setRegisters(registers.filter(customer => customer.customerid !== customerId));
//       })
//       .catch(error => {
//         console.error("There was an error deleting the customer!", error);
//       });

//     axios.delete(`http://localhost:8080/api/v1/details/${customerId}`)
//       .then(response => {
//         setDetails(details.filter(detail => detail.customerid !== customerId));
//       })
//       .catch(error => {
//         console.error("There was an error deleting the customer from details!", error);
//       });
//   };

//   return (
//     <div>
//       <div className="photo-upload">
//         <div className="profile-photo-container">
//           <img src={profilePhoto || defaultProfilePhoto} alt="Profile" className="profile-photo" />
//           <div className="upload-overlay">
//             <label htmlFor="file-input">
//               <span className="plus-icon">+</span>
//             </label>
//             <input id="file-input" type="file" accept="image/*" onChange={handlePhotoUpload} />
//           </div>
//         </div>
//       </div>
//       <div className='main'>
//         {registers.map((customer) => (
//           <div key={customer.customerid} className="customer-container">
//             <div className="customer-section">
//               <div className="customer-labels">
//                 {/* <p>Customer Id</p> */}
//                 <p>First Name</p>
//                 <p>Last Name</p>
//                 <p>Address</p>
//                 <p>Age</p>
//                 <p>Mobile</p>
//                 <p>Email</p>
//               </div>
//               <div className="customer-values">
//                 {isEditing ? (
//                   <>
//                     <p>{customer.customerid}</p>
//                     <input name="fname" value={editedCustomer.fname} onChange={(e) => handleInputChange(e, true)} />
//                     <input name="lname" value={editedCustomer.lname} onChange={(e) => handleInputChange(e, true)} />
//                     <input name="address" value={editedCustomer.address} onChange={(e) => handleInputChange(e, true)} />
//                     <input name="age" value={editedCustomer.age} onChange={(e) => handleInputChange(e, true)} />
//                     <input name="mobile" value={editedCustomer.mobile} onChange={(e) => handleInputChange(e, true)} />
//                     <input name="email" value={editedCustomer.email} onChange={(e) => handleInputChange(e, true)} />
//                   </>
//                 ) : (
//                   <>
//                     {/* <p>{customer.customerid}</p> */}
//                     <p>{customer.fname}</p>
//                     <p>{customer.lname}</p>
//                     <p>{customer.address}</p>
//                     <p>{customer.age}</p>
//                     <p>{customer.mobile}</p>
//                     <p>{customer.email}</p>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}

//         {details.map((detail) => (
//           <div key={detail.customerid} className="customer-container">
//             <div className="customer-section">
//               <div className="customer-labels">
//                 <p>Gender:</p>
//                 <p>Fitness Goals:</p>
//                 <p>Timeframe:</p>
//                 <p>Activity Level:</p>
//                 <p>Workout Days:</p>
//                 <p>Workout Duration:</p>
//                 <p>Workout Types:</p>
//                 <p>Equipment:</p>
//                 <p>Workout Place:</p>
//               </div>
//               <div className="customer-values">
//                 {isEditing ? (
//                   <>
//                     <input name="gender" value={editedDetails.gender} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="fitnessGoals" value={editedDetails.fitnessGoals} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="timeframe" value={editedDetails.timeframe} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="activityLevel" value={editedDetails.activityLevel} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="workoutDays" value={editedDetails.workoutDays} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="workoutDuration" value={editedDetails.workoutDuration} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="workoutTypes" value={editedDetails.workoutTypes} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="equipment" value={editedDetails.equipment} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="workoutPlace" value={editedDetails.workoutPlace} onChange={(e) => handleInputChange(e, false)} />
//                   </>
//                 ) : (
//                   <>
//                     <p>{detail.gender}</p>
//                     <p>{detail.fitnessGoals}</p>
//                     <p>{detail.timeframe}</p>
//                     <p>{detail.activityLevel}</p>
//                     <p>{detail.workoutDays}</p>
//                     <p>{detail.workoutDuration}</p>
//                     <p>{detail.workoutTypes}</p>
//                     <p>{detail.equipment}</p>
//                     <p>{detail.workoutPlace}</p>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="customer-actions">
//           {isEditing ? (
//             <button type="button" className="btn btn-success" onClick={handleUpdate}>Update</button>
//           ) : (
//             <button type="button" className="btn btn-warning" onClick={handleEdit}>Edit</button>
//           )}
//            <button type="button" className="btn btn-danger" onClick={() => deleteCustomer(registers[0].customerid)}>Delete</button>
//            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Back</button> {/* Back button */}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
// import "../Profile/Profile.css";
// import defaultProfilePhoto from '../assets/images/profile.jpg';

// export default function Profile() {
//   const [registers, setRegisters] = useState([]);
//   const [details, setDetails] = useState([]);
//   const { userId } = useParams();
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedCustomer, setEditedCustomer] = useState({});
//   const [editedDetails, setEditedDetails] = useState({});
//   const navigate = useNavigate(); // Initialize useNavigate

//   useEffect(() => {
//     if (userId) {
//       fetchCustomersById(userId);
//       fetchDetailsById(userId);
//     }
//   }, [userId]);

//   const fetchDetailsById = (id) => {
//     axios.get(`http://localhost:8080/api/v1/details/${id}`)
//       .then(response => {
//         setDetails([response.data]);
//         setEditedDetails(response.data); // Set initial edited details
//       })
//       .catch(error => {
//         console.error("There was an error fetching the details!", error);
//       });
//   };

//   const fetchCustomersById = (id) => {
//     axios.get(`http://localhost:8080/api/registers/${id}`)
//       .then(response => {
//         setRegisters([response.data]);
//         setEditedCustomer(response.data); // Set initial edited customer
//       })
//       .catch(error => {
//         console.error("There was an error fetching the customers!", error);
//       });
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleUpdate = () => {
//     axios.put(`http://localhost:8080/api/registers/${userId}`, editedCustomer)
//       .then(response => {
//         setRegisters([response.data]);
//         setIsEditing(false);
//       })
//       .catch(error => {
//         console.error("There was an error updating the customer!", error);
//       });
  
//     axios.put(`http://localhost:8080/api/v1/details/${userId}`, editedDetails)
//       .then(response => {
//         setDetails([response.data]);
//         setIsEditing(false);
//       })
//       .catch(error => {
//         console.error("There was an error updating the details!", error);
//       });
  
//     if (profilePhoto) {
//       axios.put(`http://localhost:8080/api/registers/${userId}/photo`, profilePhoto.split(',')[1], {
//         headers: {
//           'Content-Type': 'text/plain'
//         }
//       })
//       .then(response => {
//         setRegisters([response.data]);
//         setIsEditing(false);
//       })
//       .catch(error => {
//         console.error("There was an error updating the profile photo!", error);
//       });
//     }
//   };
  

//   const handleInputChange = (e, isCustomer) => {
//     const { name, value } = e.target;
//     if (isCustomer) {
//       setEditedCustomer({ ...editedCustomer, [name]: value });
//     } else {
//       setEditedDetails({ ...editedDetails, [name]: value });
//     }
//   };

//   const handlePhotoUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfilePhoto(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const deleteCustomer = (customerId) => {
//     axios.delete(`http://localhost:8080/api/registers/${customerId}`)
//       .then(response => {
//         setRegisters(registers.filter(customer => customer.customerid !== customerId));
//       })
//       .catch(error => {
//         console.error("There was an error deleting the customer!", error);
//       });

//     axios.delete(`http://localhost:8080/api/v1/details/${customerId}`)
//       .then(response => {
//         setDetails(details.filter(detail => detail.customerid !== customerId));
//       })
//       .catch(error => {
//         console.error("There was an error deleting the customer from details!", error);
//       });
//   };

//   return (
//     <div>
//       <div className="photo-upload">
//         <div className="profile-photo-container">
//           <img src={profilePhoto || defaultProfilePhoto} alt="Profile" className="profile-photo" />
//           <div className="upload-overlay">
//             <label htmlFor="file-input">
//               <span className="plus-icon">+</span>
//             </label>
//             <input id="file-input" type="file" accept="image/*" onChange={handlePhotoUpload} />
//           </div>
//         </div>
//       </div>
//       <div className='main'>
//         {registers.map((customer) => (
//           <div key={customer.customerid} className="customer-container">
//             <div className="customer-section">
//               <div className="customer-labels">
//                 {/* <p>Customer Id</p> */}
//                 <p>First Name</p>
//                 <p>Last Name</p>
//                 <p>Address</p>
//                 <p>Age</p>
//                 <p>Mobile</p>
//                 <p>Email</p>
//               </div>
//               <div className="customer-values">
//                 {isEditing ? (
//                   <>
//                     <p>{customer.customerid}</p>
//                     <input name="fname" value={editedCustomer.fname} onChange={(e) => handleInputChange(e, true)} />
//                     <input name="lname" value={editedCustomer.lname} onChange={(e) => handleInputChange(e, true)} />
//                     <input name="address" value={editedCustomer.address} onChange={(e) => handleInputChange(e, true)} />
//                     <input name="age" value={editedCustomer.age} onChange={(e) => handleInputChange(e, true)} />
//                     <input name="mobile" value={editedCustomer.mobile} onChange={(e) => handleInputChange(e, true)} />
//                     <input name="email" value={editedCustomer.email} onChange={(e) => handleInputChange(e, true)} />
//                   </>
//                 ) : (
//                   <>
//                     {/* <p>{customer.customerid}</p> */}
//                     <p>{customer.fname}</p>
//                     <p>{customer.lname}</p>
//                     <p>{customer.address}</p>
//                     <p>{customer.age}</p>
//                     <p>{customer.mobile}</p>
//                     <p>{customer.email}</p>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}

//         {details.map((detail) => (
//           <div key={detail.customerid} className="customer-container">
//             <div className="customer-section">
//               <div className="customer-labels">
//                 <p>Gender:</p>
//                 <p>Fitness Goals:</p>
//                 <p>Timeframe:</p>
//                 <p>Activity Level:</p>
//                 <p>Workout Days:</p>
//                 <p>Workout Duration:</p>
//                 <p>Workout Types:</p>
//                 <p>Equipment:</p>
//                 <p>Workout Place:</p>
//               </div>
//               <div className="customer-values">
//                 {isEditing ? (
//                   <>
//                     <input name="gender" value={editedDetails.gender} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="fitnessGoals" value={editedDetails.fitnessGoals} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="timeframe" value={editedDetails.timeframe} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="activityLevel" value={editedDetails.activityLevel} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="workoutDays" value={editedDetails.workoutDays} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="workoutDuration" value={editedDetails.workoutDuration} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="workoutTypes" value={editedDetails.workoutTypes} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="equipment" value={editedDetails.equipment} onChange={(e) => handleInputChange(e, false)} />
//                     <input name="workoutPlace" value={editedDetails.workoutPlace} onChange={(e) => handleInputChange(e, false)} />
//                   </>
//                 ) : (
//                   <>
//                     <p>{detail.gender}</p>
//                     <p>{detail.fitnessGoals}</p>
//                     <p>{detail.timeframe}</p>
//                     <p>{detail.activityLevel}</p>
//                     <p>{detail.workoutDays}</p>
//                     <p>{detail.workoutDuration}</p>
//                     <p>{detail.workoutTypes}</p>
//                     <p>{detail.equipment}</p>
//                     <p>{detail.workoutPlace}</p>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="customer-actions">
//           {isEditing ? (
//             <button type="button" className="btn btn-success" onClick={handleUpdate}>Update</button>
//           ) : (
//             <button type="button" className="btn btn-warning" onClick={handleEdit}>Edit</button>
//           )}
//            <button type="button" className="btn btn-danger" onClick={() => deleteCustomer(registers[0].customerid)}>Delete</button>
//            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Back</button> {/* Back button */}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "../Profile/Profile.css";
import defaultProfilePhoto from '../assets/images/profile.jpg';
import DietPlan from '../DietPlan/DietPlanpopup';
import Sidebar from './Sidebar';

export default function Profile() {
  const [registers, setRegisters] = useState([]);
  const [details, setDetails] = useState([]);
  const { userId } = useParams();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState({});
  const [editedDetails, setEditedDetails] = useState({});
  const [dietPlan, setDietPlan] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (userId) {
      fetchCustomersById(userId);
      fetchDetailsById(userId);
    }
  }, [userId]);

  const fetchDetailsById = (id) => {
    axios.get(`http://localhost:8080/api/v1/details/${id}`)
      .then(response => {
        setDetails([response.data]);
        setEditedDetails(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the details!", error);
      });
  };

  const fetchCustomersById = (id) => {
    axios.get(`http://localhost:8080/api/registers/${id}`)
      .then(response => {
        const customerData = response.data;
        setRegisters([customerData]);
        setEditedCustomer(customerData);
        setProfilePhoto(customerData.profilePhoto ? `data:image/jpeg;base64,${customerData.profilePhoto}` : null);
      })
      .catch(error => {
        console.error("There was an error fetching the customers!", error);
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/api/registers/${userId}`, editedCustomer)
      .then(response => {
        setRegisters([response.data]);
        setIsEditing(false);
      })
      .catch(error => {
        console.error("There was an error updating the customer!", error);
      });

    axios.put(`http://localhost:8080/api/v1/details/${userId}`, editedDetails)
      .then(response => {
        setDetails([response.data]);
        setIsEditing(false);
      })
      .catch(error => {
        console.error("There was an error updating the details!", error);
      });

    if (profilePhoto) {
      axios.put(`http://localhost:8080/api/registers/${userId}/photo`, profilePhoto.split(',')[1], {
        headers: {
          'Content-Type': 'text/plain'
        }
      })
      .then(response => {
        setRegisters([response.data]);
        setIsEditing(false);
      })
      .catch(error => {
        console.error("There was an error updating the profile photo!", error);
      });
    }
  };

  const handleInputChange = (e, isCustomer) => {
    const { name, value } = e.target;
    if (isCustomer) {
      setEditedCustomer({ ...editedCustomer, [name]: value });
    } else {
      setEditedDetails({ ...editedDetails, [name]: value });
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const deleteCustomer = (customerId) => {
    axios.delete(`http://localhost:8080/api/registers/${customerId}`)
      .then(response => {
        setRegisters(registers.filter(customer => customer.customerid !== customerId));
      })
      .catch(error => {
        console.error("There was an error deleting the customer!", error);
      });

    axios.delete(`http://localhost:8080/api/v1/details/${customerId}`)
      .then(response => {
        setDetails(details.filter(detail => detail.customerid !== customerId));
      })
      .catch(error => {
        console.error("There was an error deleting the customer from details!", error);
      });
  };

  return (
    <div>
      <Sidebar 
  userId={userId} 
  height={editedDetails.height} 
  weight={editedDetails.weight} 
  fname={editedCustomer.fname}
/>
      <div className="photo-upload">
        <div className="profile-photo-container">
          <img src={profilePhoto || defaultProfilePhoto} alt="Profile" className="profile-photo" />
          <div className="upload-overlay">
            <label htmlFor="file-input">
              <span className="plus-icon">+</span>
            </label>
            <input id="file-input" type="file" accept="image/*" onChange={handlePhotoUpload} />
          </div>
        </div>
      </div>
      <div className='main'>
        {registers.map((customer) => (
          <div key={customer.customerid} className="customer-container">
            <div className="customer-section">
              <div className="customer-labels">
                {/* <p>Customer Id</p> */}
                <p>First Name</p>
                <p>Last Name</p>
                <p>Address</p>
                <p>Age</p>
                <p>Mobile</p>
                <p>Email</p>
              </div>
              <div className="customer-values">
                {isEditing ? (
                  <>
                    <p>{customer.customerid}</p>
                    <input name="fname" value={editedCustomer.fname} onChange={(e) => handleInputChange(e, true)} />
                    <input name="lname" value={editedCustomer.lname} onChange={(e) => handleInputChange(e, true)} />
                    <input name="address" value={editedCustomer.address} onChange={(e) => handleInputChange(e, true)} />
                    <input name="age" value={editedCustomer.age} onChange={(e) => handleInputChange(e, true)} />
                    <input name="mobile" value={editedCustomer.mobile} onChange={(e) => handleInputChange(e, true)} />
                    <input name="email" value={editedCustomer.email} onChange={(e) => handleInputChange(e, true)} />
                  </>
                ) : (
                  <>
                    {/* <p>{customer.customerid}</p> */}
                    <p>{customer.fname}</p>
                    <p>{customer.lname}</p>
                    <p>{customer.address}</p>
                    <p>{customer.age}</p>
                    <p>{customer.mobile}</p>
                    <p>{customer.email}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}

        {details.map((detail) => (
          <div key={detail.customerid} className="customer-container">
            <div className="customer-section">
              <div className="customer-labels">
                <p>Gender:</p>
                <p>Height:</p>
                <p>Weight:</p>
                <p>Fitness Goals:</p>
                <p>Timeframe:</p>
                <p>Activity Level:</p>
                <p>Workout Days:</p>
                <p>Workout Duration:</p>
                <p>Workout Types:</p>
                <p>Equipment:</p>
                <p>Workout Place:</p>
              </div>
              <div className="customer-values">
                {isEditing ? (
                  <>
                    <input name="gender" value={editedDetails.gender} onChange={(e) => handleInputChange(e, false)} />
                    <input name="height" value={editedDetails.height} onChange={(e) => handleInputChange(e, false)} />
                    <input name="weight" value={editedDetails.weight} onChange={(e) => handleInputChange(e, false)} />
                    <input name="fitnessGoals" value={editedDetails.fitnessGoals} onChange={(e) => handleInputChange(e, false)} />
                    <input name="timeframe" value={editedDetails.timeframe} onChange={(e) => handleInputChange(e, false)} />
                    <input name="activityLevel" value={editedDetails.activityLevel} onChange={(e) => handleInputChange(e, false)} />
                    <input name="workoutDays" value={editedDetails.workoutDays} onChange={(e) => handleInputChange(e, false)} />
                    <input name="workoutDuration" value={editedDetails.workoutDuration} onChange={(e) => handleInputChange(e, false)} />
                    <input name="workoutTypes" value={editedDetails.workoutTypes} onChange={(e) => handleInputChange(e, false)} />
                    <input name="equipment" value={editedDetails.equipment} onChange={(e) => handleInputChange(e, false)} />
                    <input name="workoutPlace" value={editedDetails.workoutPlace} onChange={(e) => handleInputChange(e, false)} />
                  </>
                ) : (
                  <>
                    <p>{detail.gender}</p>
                    <p>{detail.height}</p>
                    <p>{detail.weight}</p>
                    <p>{detail.fitnessGoals}</p>
                    <p>{detail.timeframe}</p>
                    <p>{detail.activityLevel}</p>
                    <p>{detail.workoutDays}</p>
                    <p>{detail.workoutDuration}</p>
                    <p>{detail.workoutTypes}</p>
                    <p>{detail.equipment}</p>
                    <p>{detail.workoutPlace}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        

        <div className="customer-actions">
          {isEditing ? (
            <button type="button" className="btn btn-success" onClick={handleUpdate}>Update</button>
          ) : (
            <button type="button" className="btn btn-warning" onClick={handleEdit}>Edit</button>
          )}
           <button type="button" className="btn btn-danger" onClick={() => deleteCustomer(registers[0].customerid)}>Delete</button>
           <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
        </div>
      </div>

      {/* <DietPlan details={details[0]} setDietPlan={setDietPlan} /> */}

        {/* {dietPlan && (
          <div className="diet-plan-container">
            <h2>Generated Diet Plan</h2>
            <div>
              <h3>Breakfast:</h3>
              <p>{dietPlan.breakfast}</p>
            </div>
            <div>
              <h3>Lunch:</h3>
              <p>{dietPlan.lunch}</p>
            </div>
            <div>
              <h3>Dinner:</h3>
              <p>{dietPlan.dinner}</p>
            </div>
            <div>
              <h3>Snacks:</h3>
              <p>{dietPlan.snacks}</p>
            </div>
          </div>
        )} */}
    </div>
  );
  
}

