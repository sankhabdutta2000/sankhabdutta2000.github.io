"use strict";

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const options = document.querySelector(".options");
const frontPage = document.querySelector(".frontPage");
const leftMenu = document.querySelector(".leftMenu");
const home = document.querySelector(".home");
const intro = document.querySelector(".intro");
const myname = document.querySelector(".name");
const bio = document.querySelector(".bio");
const aboutme = document.querySelector(".aboutme");
const projects = document.querySelector(".projects");
const service = document.querySelector(".service");
const blog = document.querySelector(".blog");
const resume = document.querySelector(".resume");
const contact = document.querySelector(".contact");
const smallProfilePic = document.querySelector("#smallProfilePic");
const homePage = document.querySelector(".homePage");
const homePageHide = document.querySelector(".homePageHide");
const aboutmePage = document.querySelector(".aboutmePage");
const aboutmePageHide = document.querySelector(".aboutmePageHide");
const projectPage = document.querySelector(".projectPage");
const projectPageHide = document.querySelector(".projectPageHide");
const servicePage = document.querySelector(".servicePage");
const servicePageHide = document.querySelector(".servicePageHide");
const blogPage = document.querySelector(".blogPage");
const blogPageHide = document.querySelector(".blogPageHide");
const resumePage = document.querySelector(".resumePage");
const resumePageHide = document.querySelector(".resumePageHide");

let mode = document.querySelector(".mode");
let currentMode = "light";

mode.addEventListener("click", ()=>{
    if(currentMode === "light"){
        currentMode = "dark";
        mode.textContent = "🌞";
        mode.style.backgroundColor = "white";
        navbar.style.backgroundColor = "black";
        body.style.backgroundColor = "rgb(37, 37, 37)";
        intro.style.color = "white";
        myname.style.color = "white";
        bio.style.color = "white";
        options.style.backgroundColor = "rgb(34, 34, 34)";
        options.style.color = "white";
    }else{
        currentMode = "light";
        mode.textContent = "🌙";
        mode.style.backgroundColor = "black";
        navbar.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        intro.style.color = "black";
        myname.style.color = "black";
        bio.style.color = "black";
        options.style.backgroundColor = "rgb(248, 241, 241)";
        options.style.color = "black";
    }
})


