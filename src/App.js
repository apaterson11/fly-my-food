import React, { useState, useRef, useEffect, useContext, Component, useLayoutEffect } from "react";
import {Route, Routes, Link, BrowserRouter as Router} from  "react-router-dom";
import Map from "./Map";
import Leader from "./Leader";
import Nav from "./Nav";
import Quiz from "./Quiz";
import AfterQuiz from "./AfterQuiz";




export default function App() {
    return (
        <div>
            <Router>                
                <Routes>
                    <Route exact path= "/" element= {<Nav />} />
                    <Route exact path= "/map" element= {<Map />} />
                    <Route exact path= "/leader" element= {<Leader/>} />
                    <Route exact path= "/quiz" element= {<Quiz/> } />
                    <Route exact path= "/afterquiz" element = {<AfterQuiz/> } />
                </Routes>
            </Router>
        </div>
    );
}