// import React, { useState } from 'react';
// import '../css/Login.css';
// import Image from "../assets/images/loginlogo.jpg";
// import BackgroundImage from '../assets/images/1-login.jpg';
// import {
//   TextField,
//   Grid,
//   Button,
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   Link as MuiLink,
//   IconButton
// } from '@mui/material';
// import { ArrowBack } from '@mui/icons-material';
// import { Link, useNavigate } from 'react-router-dom'; 
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate(); 

//   const handleLogin = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:8081/login', { email, password })
//       .then(res => {
//         const userId = res.data.userId;
//         setError(''); 
//         navigate(`/profile/${userId}`); // Correctly navigate to the user profile
//       })
//       .catch(err => {
//         console.error(err);
//         setError('Invalid email or password'); 
//       });

//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   const handleBack = () => {
//     navigate(-1); // This will navigate to the previous page
//   };

//   return (
//     <div>
//       <IconButton onClick={handleBack} style={{ position: 'absolute', top: '10px', left: '10px' }}>
//         <ArrowBack />
//       </IconButton>
//       <img src={Image} style={{ width: "10rem", marginLeft: "42rem", marginTop: "6rem" }} />
//       <div className='log'>
//         <Container
//           maxWidth="sm"
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '70vh',
//             padding: 2,
//             marginLeft: '27rem',
//             backgroundColor: 'lightgray'
//           }}
//         >
//           <Card sx={{ width: '100%', padding: 2, textAlign: 'center' }}>
//             <CardContent>
//               <Typography variant="h5" component="div" gutterBottom sx={{ fontSize: '40px' }}>
//                 Login
//               </Typography>
//               <form onSubmit={handleLogin}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Email"
//                       variant="outlined"
//                       fullWidth
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Password"
//                       variant="outlined"
//                       type="password"
//                       fullWidth
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       color="primary"
//                       fullWidth
//                     >
//                       Login
//                     </Button>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography variant="body2">
//                       Don't have an account?{' '}
//                       <Link to="/register" component={MuiLink}>
//                         Register
//                       </Link>
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </form>
//               {error && <Typography color="error">{error}</Typography>} 
//             </CardContent>
//           </Card> 
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import '../css/Login.css';
// import BackgroundImage from '../assets/images/loginphoto.jpg';
// import {
//   TextField,
//   Grid,
//   Button,
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   Link as MuiLink,
//   IconButton
// } from '@mui/material';
// import { ArrowBack } from '@mui/icons-material';
// import { Link, useNavigate } from 'react-router-dom'; 
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate(); 

//   const handleLogin = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:8081/login', { email, password })
//       .then(res => {
//         const userId = res.data.userId;
//         console.log(userId);
//         setError(''); 
//         navigate(`/profile/${userId}`); // Correctly navigate to the user profile
//       })
//       .catch(err => {
//         console.error(err);
//         setError('Invalid email or password'); 
//       });

//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   const handleBack = () => {
//     navigate(-1); // This will navigate to the previous page
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <IconButton onClick={handleBack} style={{ position: 'absolute', top: '10px', left: '10px' }}>
//         <ArrowBack />
//       </IconButton>
//       <div style={{ flex: 1 }}>
//         <img src={BackgroundImage} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//       </div>
//       <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <Container
//           maxWidth="sm"
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: 2
//           }}
//         >
//           <Card sx={{ width: '100%', padding: 2, textAlign: 'center' }}>
//             <CardContent>
//               <Typography variant="h5" component="div" gutterBottom sx={{ fontSize: '40px',fontFamily:'cursive' }}>
//                 Login
//               </Typography>
//               <form onSubmit={handleLogin}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Email"
//                       variant="outlined"
//                       fullWidth
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Password"
//                       variant="outlined"
//                       type="password"
//                       fullWidth
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       color="primary"
//                       fullWidth
//                     >
//                       Login
//                     </Button>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography variant="body2">
//                       Don't have an account?{' '}
//                       <Link to="/register" component={MuiLink}>
//                         Register
//                       </Link>
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </form>
//               {error && <Typography color="error">{error}</Typography>} 
//             </CardContent>
//           </Card> 
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useState } from 'react';
import '../css/Login.css';
import BackgroundImage from '../assets/images/loginphoto.jpg';
import {
  TextField,
  Grid,
  Button,
  Container,
  Card,
  CardContent,
  Typography,
  Link as MuiLink,
  IconButton
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login,user } = useContext(AuthContext); 

  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', { email, password })
      .then(res => {
        console.log('Login response:', res.data); // Log the entire response
        const userId = res.data.userId;
        console.log('Extracted userId:', userId);
        if (userId) {
          setError('');
          login(res.data);
          console.log(user);
          navigate(`/profile/${userId}`); // Correctly navigate to the user profile
        } else {
          setError('Unable to retrieve user ID');
        }
      })
      .catch(err => {
        console.error(err);
        setError('Invalid email or password');
      });

    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <IconButton onClick={handleBack} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <ArrowBack />
      </IconButton>
      <div style={{ flex: 1 }}>
        <img src={BackgroundImage} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2
          }}
        >
          <Card sx={{ width: '100%', padding: 2, textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom sx={{ fontSize: '40px',fontFamily:'cursive' }}>
                Login
              </Typography>
              <form onSubmit={handleLogin}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      fullWidth
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      Don't have an account?{' '}
                      <Link to="/register" component={MuiLink}>
                        Register
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
              {error && <Typography color="error">{error}</Typography>} 
            </CardContent>
          </Card> 
        </Container>
      </div>
    </div>
  );
};

export default Login;
