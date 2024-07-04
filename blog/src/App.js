import React from 'react';
// import Category from './components/Category';
// import PopularNews from './components/PopularNews';
import Footer from './components/Footer';
import Header from './components/Header'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  return (<>
    <Header />
    {/* <Router>
      <Routes>
        <Route>
          <PopularNews />
        </Route>
        <Route>
          <Category />
        </Route>
      </Routes>
    </Router> */}
    <Footer />
  </>);
}

export default App;