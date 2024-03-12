/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "AI Research Bot",
    authors: "This Python and Streamlit project leverages GPT-4 to craft an AI research assistant. Feed it articles, and it extracts key insights through a user-friendly interface, empowering efficient data exploration. Ask any question or queries related to the given articles to app and it will present you the desired answer.",
    researchYr: "2023-Present",
    image: "assets/images/projects/ai-bot.png",
    Githublink: "https://github.com/Cypher-Knight/AI-Research-Bot",
  },

  {
    title: "Deepfake Detection System",
    authors: "Unleash the truth! This project exposes deepfakes with deep learning. It combines pre-trained RestNext for image analysis with LSTM's memory for video sequences. By feeding RestNext's insights to LSTM, it learns to spot inconsistencies in manipulated videos.",
    researchYr: "2024-Present",
    image: "assets/images/projects/deepfake.png",
    Githublink: "https://github.com/Cypher-Knight/Deepfake-Detection-System",
  },

  {
    title: "AutoML Data Pre-Processing Tool",
    authors: "This project automates data pre-processing for machine learning tasks. Built with Python and Streamlit, it takes a dataset and specific parameters, automatically cleaning and preparing the data for training. It even identifies the data types for each parameter, further simplifying the machine learning workflow. Push the button and let AutoML Data Pre-processing handle the tedious work!",
    researchYr: 2023,
    image: "assets/images/projects/autoML.png",
    Githublink: "https://github.com/Cypher-Knight/AutoML-Data-Processing",
  },

  {
    title: "Movie Recommendation System",
    authors: "A hybrid movie recommender system that recommends movies similar to the movie the user likes and analyses the sentiments of the reviews given by the user. It also co-relate the data to other users and gives a hybrid recommendation.",
    researchYr: "2021-2023",
    image: "assets/images/projects/mrs.png",
    Githublink: "https://github.com/Cypher-Knight/Movie-Recommendation-System",
  },

  {
    title: "Responsive e-commerce Website",
    authors: "This full-stack e-commerce website boasts seamless navigation across devices thanks to React.js. Browse a variety of clothing categories, add items to your cart with ease, and experience secure payment processing. Animated features and well-designed forms, including login, signup, and contact, ensure a smooth and engaging user experience.",
    researchYr: 2022,
    image: "assets/images/projects/responsive-ecommerce.png",
    Githublink: "https://github.com/Cypher-Knight/Responsive-e-commerce-Website",
  },

  {
    title: "Weather App",
    authors: "This full-stack project, built with React.js and a RESTful API, delivers beautiful and dynamic weather information. Search for specific locations or view the weather in your city, all displayed in a visually captivating and user-friendly interface. Stay informed and prepared for whatever the weather throws your way!",
    researchYr: 2023,
    image: "assets/images/projects/weather.png",
    Githublink: "https://github.com/Cypher-Knight/Weather-App",
  },

  {
    title: "GUI Keylogger",
    authors: "It is a GUI based keylogger assignment that is given as a Internship project from IBM Skillbuild to me.",
    researchYr: 2023,
    image: "assets/images/projects/keylogger.png",
    Githublink: "https://github.com/Cypher-Knight/IBM-Internship-Keylogger",
  },
];

AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      researchYr,
      Githublink,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                      <div class="researchY">${researchYr}</div>
                    </div>
                    <ul class="menu-content"><br>
                    <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="37.5" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
