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
const smallProfilePicHide = document.querySelector(".smallProfilePicHide");

const homePage = document.querySelector(".homePage");
const aboutmePage = document.querySelector(".aboutmePage");
const projectPage = document.querySelector(".projectPage");
const servicePage = document.querySelector(".servicePage");
const blogPage = document.querySelector(".blogPage");
const resumePage = document.querySelector(".resumePage");
const contactPage = document.querySelector(".contactPage");

const homePageHide = document.querySelector(".homePageHide");
const aboutmePageHide = document.querySelector(".aboutmePageHide");
const projectPageHide = document.querySelector(".projectPageHide");
const servicePageHide = document.querySelector(".servicePageHide");
const blogPageHide = document.querySelector(".blogPageHide");
const resumePageHide = document.querySelector(".resumePageHide");
const contactPageHide = document.querySelector(".contactPageHide");

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
window.addEventListener("load",()=>{
    homePage.classList.remove("homePageHide");
    aboutmePage.classList.add("aboutmePageHide");
    projectPage.classList.add("projectPageHide");
    servicePage.classList.add("servicePageHide");
    blogPage.classList.add("blogPageHide");
    resumePage.classList.add("resumePageHide");
    contactPage.classList.add("contactPageHide");
    smallProfilePic.classList.remove("smallProfilePicHide");
})
home.addEventListener("click", ()=>{
    homePage.classList.remove("homePageHide");
    aboutmePage.classList.add("aboutmePageHide");
    projectPage.classList.add("projectPageHide");
    servicePage.classList.add("servicePageHide");
    blogPage.classList.add("blogPageHide");
    resumePage.classList.add("resumePageHide");
    contactPage.classList.add("contactPageHide");
    smallProfilePic.classList.remove("smallProfilePicHide");
})
aboutme.addEventListener("click", ()=>{
    homePage.classList.add("homePageHide");
    aboutmePage.classList.remove("aboutmePageHide");
    projectPage.classList.add("projectPageHide");
    servicePage.classList.add("servicePageHide");
    blogPage.classList.add("blogPageHide");
    resumePage.classList.add("resumePageHide");
    contactPage.classList.add("contactPageHide");
})
projects.addEventListener("click", ()=>{
    homePage.classList.add("homePageHide");
    aboutmePage.classList.add("aboutmePageHide");
    projectPage.classList.remove("projectPageHide");
    servicePage.classList.add("servicePageHide");
    blogPage.classList.add("blogPageHide");
    resumePage.classList.add("resumePageHide");
    contactPage.classList.add("contactPageHide");
})
service.addEventListener("click",()=>{
    homePage.classList.add("homePageHide");
    aboutmePage.classList.add("aboutmePageHide");
    projectPage.classList.add("projectPageHide");
    servicePage.classList.remove("servicePageHide");
    blogPage.classList.add("blogPageHide");
    resumePage.classList.add("resumePageHide");
    contactPage.classList.add("contactPageHide");
})
blog.addEventListener("click",()=>{
    homePage.classList.add("homePageHide");
    aboutmePage.classList.add("aboutmePageHide");
    projectPage.classList.add("projectPageHide");
    servicePage.classList.add("servicePageHide");
    blogPage.classList.remove("blogPageHide");
    resumePage.classList.add("resumePageHide");
    contactPage.classList.add("contactPageHide");
})
resume.addEventListener("click",()=>{
    homePage.classList.add("homePageHide");
    aboutmePage.classList.add("aboutmePageHide");
    projectPage.classList.add("projectPageHide");
    servicePage.classList.add("servicePageHide");
    blogPage.classList.add("blogPageHide");
    resumePage.classList.remove("resumePageHide");
    contactPage.classList.add("contactPageHide");
})
contact.addEventListener("click",()=>{
    homePage.classList.add("homePageHide");
    aboutmePage.classList.add("aboutmePageHide");
    projectPage.classList.add("projectPageHide");
    servicePage.classList.add("servicePageHide");
    blogPage.classList.add("blogPageHide");
    resumePage.classList.add("resumePageHide");
    contactPage.classList.remove("contactPageHide");
})
