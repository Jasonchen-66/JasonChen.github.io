import YogaImage from './assets/yoga-image.jpg';
import SocialMediaImage from './assets/social-media-image.jpg';
import HomeImage from './assets/home-image.png';
import MooresIcon from './assets/moores-icon.png'
import LEDProIcon from './assets/ledpros-logo-small.png'
import OnlineShop from './assets/OnlineShopping.jpeg'
//import ArsagaIcon from './assets/arsaga-icon.jpeg';

export const myWorkData = [
    {
        id: 1,
        title: "Social Distribution",
        description: "Social networking web application",
        languages: ["Python", "Django", "React", "Javascript"],
        backgroundImage: SocialMediaImage,
        githubLink: "https://github.com/akshat799/cmput404-Group-Project"
    },
    {
        id: 2,
        title: "Have It Apps",
        description: "Habit tracking Android app",
        languages: ["Java", "AndroidStudio"],
        backgroundImage: YogaImage,
        githubLink: "https://github.com/CMPUT301F21T14/HAVE_IT"
    },
    {
        id: 3,
        title: "Course Management",
        description: "A web app for online courses management with courses post and enroll functions.",
        languages: ["JavaScript", "React"],
        backgroundImage: HomeImage,
        githubLink: "https://github.com/Jasonchen-66/MERN-App"
    },
    {
        id: 4,
        title: "ShopOnline Solution",
        description: "A web app for online shopping.",
        languages: ["C#", "Blazor"],
        backgroundImage: OnlineShop,
        githubLink: "https://github.com/Jasonchen-66/ShopOnlineSolution"
    }
];

export const backendSkills = ['Python (+ Django)', 'Java (+ Android Studio)', 'C# (+ Visual Studio)', 'SQL', 'MongoDB'];
export const frontendSkills = ['HTML', 'CSS', 'Javascript', 'React','Blazor'];
export const otherSkills = ['Figma', 'Postman', 'Git / GitHub', 'AWS s3', 'Visual Studio Code','Azure','Docker'];

export const MooresDetails = {
    companyIcon: {
        src: MooresIcon,
        alt: "Moores Icon"
    },
    mainDescription: {
        companyName: "Moores Clothing For Men",
        companyLink: "https://www.mooresclothing.ca/",
        positionName: "Seasonal Sales Associate",
        experienceDate: "May 2022 - Jun 2022"
    },
    roles: [
        "Assisted customer on the sales floor with item location, clothing selections, price validation, answered phones, and resolved general customer inquiries.",
        "Operated a cash register for cash, check and credit card transactions with accuracy.",
        "Used time efficiently when not serving customers, including folding clothes and cleaning fitting rooms.",
        "Skills used utilized product knowledge and selling skills to influence customers and buy products.",
        "Balanced the needs of multiple customers simultaneously in a fast-paced retail environment."
    ],
    skills: [
    ]
};

export const LEDProDetails = {
    companyIcon: {
        src: LEDProIcon,
        alt: "LED Pro Icon"
    },
    mainDescription: {
        companyName: "LED Pros Ltd ",
        companyLink: "https://ledpros.ca/",
        positionName: "Mechanical Assembly Technician",
        experienceDate: "Jun 2021 - Aug 2021"
    },
    roles: [
        "Assembled and performed function tests on LED light signage",
        "Produced assembled housings for LED signage according to industrial drawings",
        "Supported current production needs by moving items between equipment, conveyors, and staging",
        "Assisted colleagues to complete outdoor LED light signage set installation",
        "Manually repaired circuit boards and wire plates"
    ],
    skills: [

    ]
};