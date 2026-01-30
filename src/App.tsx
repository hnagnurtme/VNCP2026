import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Agenda from './components/Agenda';
import Speaker from './components/Speaker';
import Contact from './components/Contact';

function App () {
    return (
        <>
            <Navbar />
            <Hero />
            <Problems />
            <Agenda />
            <Speaker />
            <Contact />
        </>
    );
}

export default App;
