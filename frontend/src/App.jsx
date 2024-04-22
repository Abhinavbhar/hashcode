// import React from 'react'
// import { HeroSection, Navbar,Companies,Courses, Achievement,Categories,FeedBack,CTA,Footer, LandingPage } from './components'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from './pages/Signup';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navbar />} />
//         <Route path='/' element={<LandingPage />}/>
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from './pages/Signup'; // Import Feedback component
// import { Navbar, LandingPage, Footer, HeroSection,FeedBack } from './components'; // Import Navbar and LandingPage components

// // Function to render Navbar component
// function render() {
//   return( <><Navbar />
//   <LandingPage /><HeroSection/><Footer/></>

// )
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={render()} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/feedback" element={<FeedBack />} /> 
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import { Navbar, LandingPage, Footer, FeedBack, Layout, HeroSection,Dashboard } from './components';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/signup" element={<Layout><Signup /></Layout>} />
        <Route path="/feedback" element={<Layout><FeedBack /></Layout>} />
        <Route path="/Dashboard" element={<Layout><Dashboard /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;


