import React from 'react';
import Header from "./Header";
import Body from "./body";

import Layout from './components/Layout';
import "./style.css"
import ThemeProvider from "./providers/ThemeProvider"

import About from "./links/About";
import Shop from "./links/Shop";
import NotFound from "./links/NotFound";
import Artists from "./links/Artists";
import Stories from "./links/Stories";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from './products';


function App() {
  const navigation = {
    nav: [
      {
        name:'About',
        link:'About',
        activite:false
      },
      {
        name:'Shop',
        link:'Shop',
        activite:false
      },
      {
        name:'Artists',
        link:'Artists',
        activite:false
      },
      {
        name:'Stories',
        link:'Stories',
        activite:false
      }
    ],
    view: [
      {
        name:'VIEW ALL PRODUCTS',
        link:'allproducts',
        activite:false
      }
    ]
  }
  return (
    <ThemeProvider>
      <Layout>
        <div>
          <Header navigation={navigation.nav} />
          <hr id="line"></hr>
          <Router>
            <Routes>
              <Route exact path="/About" element={<About />} />
              <Route exact path="/" element={<Body navigation={navigation.view} />} />
              <Route exact path="/Shop" element={<Shop />} />
              <Route exact path="/Artists" element={<Artists />} />
              <Route path="Stories" element={<Stories />} />
              <Route path="*" element={<NotFound />} />
              <Route path="VIEW ALL PRODUCTS" element={<Products />} />
            </Routes>
          </Router>
        </div>
      </Layout>
    </ThemeProvider>)
}

export default App;