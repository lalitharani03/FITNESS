import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './component/Home';
import AboutPage from './component/About';
import PositivePointsPage from './component/Whyus';
import Login from './component/Login';
import Chatbot from './component/Chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarathonForm from './component/Marathon';
import SearchEvents from './component/SearchEvents';
import InnerHome from './component/InnerHome';
import Diet from './component/Diet';
import Payment from './shop/Payment';
import CustomerForm from './component/Register';
import Registration from './component/Registration';
import Profile from './Profile/Profile';
import SupplementList from './shop/SupplementList';
import SupplementDetails from './shop/SupplementDetails';
import ProductList from './shop/ProductList';
import ProductDetails from './shop/ProductDetails';
import Cart from './shop/Cart';
import { AddressProvider } from './shop/AddressContext';
import ShippingAddress from './shop/ShippingAddress';
import Navigation from './Navigation/Nav';
import Workouts from './Workouts/Workouts';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import workouts from './db/data.';
import WorkoutDetail from './WorkoutDetails';
import Card from './components/Card';
import { useState } from 'react';
import Plan from './PlanningPage/Plan';

function App() {
  const [selectedBodyFocus, setSelectedBodyFocus] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleBodyFocusChange = (event) => {
    setSelectedBodyFocus(event.target.value);
  };

  const handleEquipmentChange = (event) => {
    setSelectedEquipment(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedBodyFocus(event.target.value);
  };

  const filteredItems = workouts.filter(
    (workout) =>
      workout.title.toLowerCase().includes(query.toLowerCase()) &&
      (selectedBodyFocus ? workout.bodyfoucs === selectedBodyFocus : true) &&
      (selectedEquipment ? workout.equipment === selectedEquipment : true)
  );

  const result = filteredItems.map(({ img, title }) => (
    <Card key={title} img={img} title={title} />
  ));

  return (
    <BrowserRouter>
      <AddressProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<InnerHome />} />
          <Route exact path='/dietplan' element={<Diet />} />
          <Route exact path='/register' element={<CustomerForm />} />
          <Route exact path='/about/about-us' element={<AboutPage />} />
          <Route exact path='/about/why-us' element={<PositivePointsPage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/chatbot' element={<Chatbot />} />
          <Route exact path='/payment' element={<Payment />} />
          <Route exact path='/marathon' element={<MarathonForm />} />
          <Route exact path='/searchevents' element={<SearchEvents />} />
          <Route exact path='/registration' element={<Registration />} />
          <Route exact path='/profile/:userId' element={<Profile />} />
          <Route path="/planning/:userId" element={<Plan />} />
          <Route exact path='/workouts/workout' element={
            <div className="app-container">
              <ConditionalSidebar>
                <Sidebar handleBodyFocusChange={handleBodyFocusChange} handleEquipmentChange={handleEquipmentChange} />
              </ConditionalSidebar>
              <div className="main-content">
                <ConditionalHeader>
                  <Navigation query={query} handleInputChange={handleInputChange} />
                  <Recommended handleClick={handleClick} />
                </ConditionalHeader>
                <Routes>
                  <Route path="/" element={<Workouts result={result} />} />

                </Routes>
              </div>
            </div>
          }/>
           <Route path="/workout/:title" element={<WorkoutDetail workouts={workouts} />} />
          <Route exact path='/store/supplements' element={<SupplementList />} />
          <Route exact path='/store/equipment' element={<ProductList />} />
          <Route exact path='/supplement/:id' element={<SupplementDetails />} />
          <Route exact path='/product/:id' element={<ProductDetails />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/shipping' element={<ShippingAddress />} />
        </Routes>
      </AddressProvider>
    </BrowserRouter>
  );
}

function ConditionalSidebar({ children }) {
  const location = useLocation();
  return location.pathname === '/workouts/workout' ? <div className="sidebar">{children}</div> : null;
}

function ConditionalHeader({ children }) {
  const location = useLocation();
  return location.pathname === '/workouts/workout' ? <div className="header">{children}</div> : null;
}
export default App;