import React, { useState } from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer';
import theme from './ui/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import LendingPage from './LendingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';
import WebSite from './WebSite';
import Revolution from './Revolution';
import About from './About';
import Contact from './Contact';
import FreeEstimate from './FreeEstimate';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Routes>
          <Route path="/" element={<LendingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path="/services" element={<Services setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path="/customsoftware" element={<CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path="/mobileapps" element={<MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path="/websites" element={<WebSite setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path="/revolution" element={<Revolution setValue={setValue} />} />
          <Route path="/about" element={<About setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path="/contact" element={<Contact setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path="/estimate" element={<FreeEstimate />} />
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
