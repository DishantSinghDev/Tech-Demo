import Home from "./home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequestQuote from "./request-quote";
import Blog from "./blog";
import ExPage from "./ex-page";
import Work from "./work";
import CaseStudies from "./case-studies/bridging_the_gap_in_online_education_integration_of_ai_and_gaming";
import LogisticSoftDev from "./logistic-soft-dev";
import FlutterEx from "./flutter-ex";
import HireDev from "./hire-dev";
import ProcessPage from "./process-ex";
import IosProcessEx from "./ios-process-ex";



const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/request-quote" element={<RequestQuote/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/work" element={<Work/>}></Route>
        <Route path="/blog-post-ex" element={<ExPage/>}></Route>
        <Route path="/flutter-ex" element={<FlutterEx/>}></Route>
        <Route path="/hire-dev" element={<HireDev/>}></Route>
        <Route path="/process" element={<ProcessPage/>}></Route>
        <Route path="/ios-process-ex" element={<IosProcessEx/>}></Route>
        <Route path="/logistic-software-development" element={<LogisticSoftDev/>}></Route>
        <Route path="/case-studies/bridging_the_gap_in_online_education_integration_of_ai_and_gaming" element={<CaseStudies/>}></Route>
      </Routes>
    </BrowserRouter>
   </>
  );
};

export default App;
