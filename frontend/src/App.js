import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "components/Footer";
import Header from "components/Header";
import CartScreen from "screens/CartScreen";
import HomeScreen from "screens/HomeScreen";
import LoginScreen from "screens/LoginScreen";
import ProductScreen from "screens/ProductScreen";
import RegisterScreen from "screens/RegisterScreen";
import ProfileScreen from "screens/ProfileScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/profile" exact component={ProfileScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
