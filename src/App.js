import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/LoginPage/Login/Login';
import Register from './Pages/LoginPage/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/LoginPage/PrivateRoute/PrivateRoute';
import AllProducts from './Pages/AllProducts/AllProducts';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Notfound from './Pages/Notfound/Notfound';
import Dashboard from './Pages/Dashboard/Dashboard';
import OrderUpdate from './Pages/Dashboard/OrderUpdata/OrderUpdate';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/orders/update/:id">
              <OrderUpdate></OrderUpdate>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
