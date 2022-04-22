import Sorting from "./ProjectPhotos/Sorting.png";
import PayRoll from "./ProjectPhotos/PayRoll.png";
import CalculationFinance from "./ProjectPhotos/CalculationFinance.png";
import CheckMark from "./ProjectPhotos/CheckMark.png";
export const projectData = [
  {
    id: 1,
    title: "Payroll",
    img: PayRoll,
    tech: [
      { name: "React.js" },
      { name: "Mongo DB" },
      { name: "Node & Express" },
      { name: "styled components" },
      { name: "Redux" },
      { name: "JWT (Json Web Tokens)" },
    ],
    desc: "Web application to track salary and payroll within a company, in addition logging employee contact information with a search feature to find employees quickly.",
    gitLink: "https://github.com/ColeThomasWinslow/Payroll",
    LiveLink: "https://payroll-app-ctw.herokuapp.com/Login",
  },
  {
    id: 2,
    title: "CheckMark Marketplace ",
    img: CheckMark,
    tech: [
      { name: "React.js" },
      { name: "Fake Store Api" },
      { name: "styled components" },
      { name: "Redux" },
    ],
    desc: "E-commerce website of a variety of products. Search through all products with the search bar or visit individual pages to add items to your cart ",
    gitLink: "https://github.com/ColeThomasWinslow/Fake-Store",
    LiveLink: "https://checkmarkmarketplace.netlify.app/",
  },
  {
    id: 3,
    title: "Calculation Finance",
    img: CalculationFinance,
    tech: [{ name: "React.js" }, { name: "CSS" }, { name: "Algorithms" }],
    desc: "Application for financial calculators. Calculate mortgage and loan payments. As well as measure savings account growth with different contribution values. ",
    gitLink: "https://github.com/ColeThomasWinslow/Calculation-Finance",
    LiveLink: "https://calculationfinance.netlify.app/",
  },
  {
    id: 4,
    title: "Sorting Visualizer ",
    img: Sorting,
    tech: [
      { name: "Vanilla Javascript" },
      { name: "CSS Animations" },
      { name: " Data Structures" },
      { name: "Algorithms" },
    ],
    desc: "Visualization tool to compare different sorting algorithms and see the time complexity for each method change based on the input size.",
    gitLink: "https://github.com/ColeThomasWinslow/sorting-algo-visualizer",
    LiveLink: "https://sortalgorithms.netlify.app/",
  },
];
