import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Grid,
  Box,
  Container,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/gender.png";
import home_gym from "../assets/images/home_gym.png";
import weightI from "../assets/images/weight.jpg";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const CustomerForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [customerid, setId] = useState("");
  const [customer, setCustomers] = useState([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [fitnessGoals, setFitnessGoals] = useState([]);
  const [timeframe, setTimeframe] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [workoutDays, setWorkoutDays] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState("");
  const [workoutTypes, setWorkoutTypes] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [workoutPlace, setWorkoutPlace] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => await loadDetails())();
  }, []);

  async function loadDetails() {
    const result = await axios.get(
      "http://localhost:8080/api/v1/details/get"
    );
    setCustomers(result.data);
  }
  const handleCardClick = (value, setter) => {
    setter(value);
  };

  const handleMultipleCardClick = (value, setter) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  async function saveDetails(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/details/post", {
        customerid: customerid, // Ensure this is being correctly set
        gender: gender,
        height: height,
        weight:weight,
        fitnessGoals: fitnessGoals.join(", "), // Convert array to string
        timeframe: timeframe,
        activityLevel: activityLevel,
        workoutDays: workoutDays,
        workoutDuration: workoutDuration,
        workoutTypes: workoutTypes.join(", "), // Convert array to string
        equipment: equipment.join(", "),
        workoutPlace: workoutPlace,
      });

      console.log("Backend response:", response.data);

      // Set the customerid from the backend response
      const newCustomerId = response.data.customerid;
      setId(newCustomerId);
      alert("Select your plan");
      console.log("Customer ID before navigating:", newCustomerId);
      setGender("");
      setHeight("");
      setWeight("");
      setFitnessGoals([]);
      setTimeframe("");
      setActivityLevel("");
      setWorkoutDays("");
      setWorkoutDuration("");
      setWorkoutTypes([]);
      setEquipment([]);
      setWorkoutPlace("");
      loadDetails();
      setTimeout(() => {
        navigate(`/profile/${newCustomerId}`);
      }, 2000); // 2 seconds delay before redirect
    } catch (err) {
      console.error("User Registration Failed:", err);
      alert("Error occured..Contact website: " + err.message);
    }
  }

  const steps = [
    {
      title: "Select your gender",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2cm",
            marginTop: "-1.6cm",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "50vh" }}>
            {["Male", "Female", "Other", "Prefer not to say"].map((option) => (
              <Card
                key={option}
                onClick={() => handleCardClick(option, setGender)}
                style={{
                  border:
                    gender === option ? "2px solid blue" : "1px solid gray",
                  cursor: "pointer",
                  backgroundColor: "lavender",
                  width: "fitContent",
                  height: "1.5cm",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography>{option}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box>
            <img src={image} style={{ width: "10cm", height: "10cm" }} />
          </Box>
        </div>
      ),
    },
    {
      title: "Enter your height and weight",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2cm",
            marginTop: "-1.6cm",
          }}
        >
          <TextField
            label="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            variant="outlined"
            sx={{ marginBottom: "1cm" }}
          />
          <TextField
            label="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            variant="outlined"
          />
        </div>
      ),
    },
    {
      title: "Workout Place",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2cm",
            marginTop: "-1.6cm",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "50vh" }}>
            {["Gym", "Home", "Outdoor", "Other"].map((option) => (
              <Card
                key={option}
                onClick={() => handleCardClick(option, setWorkoutPlace)}
                style={{
                  border:
                    workoutPlace === option
                      ? "2px solid blue"
                      : "1px solid gray",
                  cursor: "pointer",
                  backgroundColor: "lavender",
                  width: "fitContent",
                  height: "1.5cm",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography>{option}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box>
            <img src={home_gym} style={{ width: "10cm", height: "10cm" }} />
          </Box>
        </div>
      ),
    },
    {
      title: "Fitness Goals",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2cm",
            marginTop: "-1.6cm",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "50vh" }}>
            {[
              "Weight Loss",
              "Gain muscle",
              "Improve endurance",
              "General fitness",
              "Flexibility",
              "Tone lower body",
              "Lift heavier",
              "Weight gain",
              "Increase your step count",
              "Improve your mobility",
              "Get enough sleep",
              "Strength training",
              "Other",

            ].map((option) => (
              <Card
                key={option}
                onClick={() => handleMultipleCardClick(option, setFitnessGoals)}
                style={{
                  border: fitnessGoals.includes(option)
                    ? "2px solid blue"
                    : "1px solid gray",
                  cursor: "pointer",
                  backgroundColor: "lavender",
                  width: "fitContent",
                  height: "1.5cm",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography>{option}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box>
            <img src={weightI} style={{ width: "10cm", height: "10cm" }} />
          </Box>
        </div>
      ),
    },
    {
      title: "Timeframe",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2cm",
            marginTop: "-1.6cm",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "50vh" }}>
            {[
              "within 3 months",
              "within 6 months",
              "within 1 year",
              "No specific timeframe",
            ].map((option) => (
              <Card
                key={option}
                onClick={() => handleCardClick(option, setTimeframe)}
                style={{
                  border:
                    timeframe === option ? "2px solid blue" : "1px solid gray",
                  cursor: "pointer",
                  backgroundColor: "lavender",
                  width: "fitContent",
                  height: "1.5cm",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography>{option}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box>
            <img src={home_gym} style={{ width: "10cm", height: "10cm" }} />
          </Box>
        </div>
      ),
    },
    {
      title: "Activity Level",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2cm",
            marginTop: "-1.6cm",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "50vh" }}>
            {[
              "Sedentary",
              "Lightly active",
              "Moderately active",
              "Very active",
              "Super active",
            ].map((option) => (
              <Card
                key={option}
                onClick={() => handleCardClick(option, setActivityLevel)}
                style={{
                  border:
                    activityLevel === option
                      ? "2px solid blue"
                      : "1px solid gray",
                  cursor: "pointer",
                  backgroundColor: "lavender",
                  width: "fitContent",
                  height: "1.5cm",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography>{option}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box>
            <img src={home_gym} style={{ width: "10cm", height: "10cm" }} />
          </Box>
        </div>
      ),
    },
    {
      title: "Workout Days",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2cm",
            marginTop: "-1.6cm",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "50vh" }}>
            {["1-2 days", "3-4 days", "5-6 days", "Every day"].map((option) => (
              <Card
                key={option}
                onClick={() => handleCardClick(option, setWorkoutDays)}
                style={{
                  border:
                    workoutDays === option
                      ? "2px solid blue"
                      : "1px solid gray",
                  cursor: "pointer",
                  backgroundColor: "lavender",
                  width: "fitContent",
                  height: "1.5cm",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography>{option}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box>
            <img src={home_gym} style={{ width: "10cm", height: "10cm" }} />
          </Box>
        </div>
      ),
    },
    {
      title: "Workout Duration",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2cm",
            marginTop: "-1.6cm",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "50vh" }}>
            {[
              "Less than 30 minutes",
              "30-45 minutes",
              "45-60 minutes",
              "More than 60 minutes",
            ].map((option) => (
              <Card
                key={option}
                onClick={() => handleCardClick(option, setWorkoutDuration)}
                style={{
                  border:
                    workoutDuration === option
                      ? "2px solid blue"
                      : "1px solid gray",
                  cursor: "pointer",
                  backgroundColor: "lavender",
                  width: "fitContent",
                  height: "1.5cm",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography>{option}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box>
            <img src={home_gym} style={{ width: "10cm", height: "10cm" }} />
          </Box>
        </div>
      ),
    },
    {
      title: "Workout Types",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2cm",
            marginTop: "-1.6cm",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "50vh" }}>
            {[
              "Cardio",
              "Strength training",
              "HIIT",
              "Yoga/Pilates",
              "Dance",
              "Sports",
            ].map((option) => (
              <Card
                key={option}
                onClick={() => handleMultipleCardClick(option, setWorkoutTypes)}
                style={{
                  border: workoutTypes.includes(option)
                    ? "2px solid blue"
                    : "1px solid gray",
                  cursor: "pointer",
                  backgroundColor: "lavender",
                  width: "fitContent",
                  height: "1.5cm",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography>{option}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box>
            <img src={home_gym} style={{ width: "10cm", height: "10cm" }} />
          </Box>
        </div>
      ),
    },
    {
      title: "Equipment",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2cm",
            marginTop: "-1.6cm",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "50vh" }}>
            {[
              "Dumbbells",
              "Resistance bands",
              "Treadmill",
              "No equipment",
              "Other",
            ].map((option) => (
              <Card
                key={option}
                onClick={() => handleMultipleCardClick(option, setEquipment)}
                style={{
                  border: equipment.includes(option)
                    ? "2px solid blue"
                    : "1px solid gray",
                  cursor: "pointer",
                  backgroundColor: "lavender",
                  width: "fitContent",
                  height: "1.5cm",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography>{option}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box>
            <img src={home_gym} style={{ width: "10cm", height: "10cm" }} />
          </Box>
        </div>
      ),
    },

    {
      title: "Review and Submit",
      content: (
        <Container maxWidth="md">
          <Box
            p={3}
            bgcolor="white"
            borderRadius={8}
            boxShadow={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={"1cm"}
            marginRight={'2rem'}
          >
            <Typography variant="h6" gutterBottom sx={{fontWeight:'bold'}}>
              Review Your Responses:
            </Typography>
            <Typography variant="body1">Gender: {gender}</Typography>
            <Typography variant="body1">Height: {height}</Typography>
            <Typography variant="body1">Weight: {weight}</Typography>
            <Typography variant="body1">
              Fitness Goals: {fitnessGoals.join(", ")}
            </Typography>
            <Typography variant="body1">Timeframe: {timeframe}</Typography>
            <Typography variant="body1">
              Activity Level: {activityLevel}
            </Typography>
            <Typography variant="body1">Workout Days: {workoutDays}</Typography>
            <Typography variant="body1">
              Workout Duration: {workoutDuration}
            </Typography>
            <Typography variant="body1">
              Workout Types: {workoutTypes.join(", ")}
            </Typography>
            <Typography variant="body1">
              Equipment: {equipment.join(", ")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Workout Place: {workoutPlace}
            </Typography>
            <Button onClick={saveDetails} variant="contained" sx={{backgroundColor:'purple'}}>
              Submit
            </Button>
          </Box>
        </Container>
      ),
    },
  ];

  return (
    <div
      style={{
        marginTop: "4cm",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Typography
          variant="h5"
          sx={{
            textAlign: "start",
            fontWeight: "bold",
            fontSize: "30px",
            marginBottom: "0.6cm",
            marginLeft:'2rem'
          }}
        >
          {steps[currentStep].title}
        </Typography>
        {steps[currentStep].content}
        <Box>
          {/* {currentStep > 0 && (
            <Button
              onClick={handlePrevious}
              variant="contained"
              color="secondary"
              sx={{ mr: "1cm" }}
            >
              Previous
            </Button>
          )} */}
          {currentStep > 0 && (
            <GrPrevious onClick={handlePrevious}
            size={30}
             />

          )}
          {currentStep < steps.length - 1 && (
            // <Button onClick={handleNext} variant="contained" color="primary">
            //   Next
            // </Button>
            <GrNext onClick={handleNext}  size={30} style={{marginLeft:"1cm"}}/>
          )}
        </Box>
      </div>
    </div>
  );
};

export default CustomerForm;
