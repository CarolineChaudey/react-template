import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormContainer from "./FormContainer.jsx";

const wrapper = document.getElementById("create-article-form");
console.log(wrapper);
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
