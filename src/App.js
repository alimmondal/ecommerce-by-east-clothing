import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/About/About";
import Contactus from "./pages/Contactus/Contactus";
import Home from "./pages/Home";

// import Footer from './pages/Footer/Footer'
// import LoginScreen from './pages/Login/LoginScreen'
import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ScrollIntoView from "./components/Scrollintoview";
// import ScrollIntoView from "scroll-into-view-if-needed";
import HashLoader from "react-spinners/HashLoader";
import RegisterScreen from "./components/RegisterScreen";
import ScrollIntoView from "./components/Scrollintoview";
import Footer from "./pages/Footer/Footer";
import LoginScreen from "./pages/Login/LoginScreen";
import Shop from "./pages/Shop";
// import Productpage from "./pages/Product/Productpage";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="main">
      <ChakraProvider>
        <Router>
          <ScrollIntoView>
            {loading ? (
              <div className="loading">
                <HashLoader color={"#1e1e2c"} loading={loading} size={40} />
              </div>
            ) : (
              <>
                <Nav></Nav>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/shop" component={Shop} />
                  <Route path="/contactus" component={Contactus} />
                  <Route path="/login" component={LoginScreen} />
                  <Route path="/register" component={RegisterScreen} />
                  {/* <Route path="/product/:id" component={Productpage} /> */}
                  {/* <Route path="/search/:keyword" component={Shop} /> */}
                  {/* <Route path="/product/:id" component={Productpage}/>
                 <Route path="/cart/:id?" component={Cartpage}/>
                
                 
                 <Route path="/profile" component={ProfileScreen}/>
                 <Route path="/shipping" component={Checkout}/>
                 <Route path="/placeorder" component={Placeorder}/>
                 <Route path="/order/:id" component={Order}/>
                 <Route path="/admin/userlist" component={Users}/>
                 <Route path="/admin/productlist" component={Products}/>
                 <Route path="/admin/orderlist" component={Orders}/>
                 

                 <Route path="/admin/user/:id/edit" component={Edituser}/>
                 <Route path="/admin/product/:id/edit" component={Editproduct}/>

                 
                 <Route component={NotFoundPage} /> */}
                </Switch>
                <Footer />
              </>
            )}
          </ScrollIntoView>
        </Router>
      </ChakraProvider>
    </div>
  );
};
export default App;
