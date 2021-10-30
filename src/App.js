import './App.css';
import Home from './components/HomePage/Home/Home';
import Header from './components/Shared/Header/Header';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import About from './components/HomePage/About/About';
import Services from './components/HomePage/Services/Services';

import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './context/AuthContext/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails/ServiceDetails';
import Footer from './components/Shared/Footer/Footer';
import OrderHistory from './components/OrderHistory/OrderHistory';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddTour from './components/AddTour/AddTour';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route  path='/home'>
        <Home></Home>
        </Route>
        <Route path ='/home#about'>
          <About></About>
        </Route>
        <Route path ='/home#services'>
          <Services></Services>
        </Route>
        <PrivateRoute exact path ="/contact">
          <Contact></Contact>
        </PrivateRoute>
        <Route path ='/login'>
         <Login></Login>
        </Route>
        <Route path ='/register'>
         <Registration></Registration>
        </Route>
        <PrivateRoute path='/orderHistory/:email'>
          <OrderHistory></OrderHistory>
        </PrivateRoute>
        <PrivateRoute path='/manageOrders'>
          <ManageAllOrders></ManageAllOrders>
        </PrivateRoute>
        <PrivateRoute path='/addTour'>
         <AddTour></AddTour>
        </PrivateRoute>
        <PrivateRoute path ='/service/:serviceId'>
         <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        <Route path ='*'>
         <NotFound></NotFound>
        </Route>
      </Switch>   
      <Footer></Footer>    
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
