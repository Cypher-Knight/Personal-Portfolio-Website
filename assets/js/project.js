AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "C++",
    cardImage: "assets/images/skills/C++.png",
    description: " ",
  },
  {
    title: "Python",
    cardImage: "assets/images/skills/Python.png",
    description: " ",
  },
  {
    title: "JAVA",
    cardImage: "assets/images/skills/java.webp",
    description: " ",
  },
  {
    title: "AWS",
    cardImage: "assets/images/skills/aws.png",
    description: " ",
  },
  {
    title: "Google Cloud Platform",
    cardImage: "assets/images/skills/gcp.png",
    description: " ",
  },
  {
    title: "MySQL",
    cardImage: "assets/images/skills/mysql.png",
    description: " ",
  },
  {
    title: "Linux",
    cardImage: "assets/images/skills/linux.png",
    description: " ",
  },
  {
    title: "Kubernates",
    cardImage: "assets/images/skills/kubernetes.webp",
    description: " ",
  },
  {
    title: "Shell Scripting",
    cardImage: "assets/images/skills/Shell-Scripting.png",
    description: " ",
  },
  {
    title: "HTML",
    cardImage: "assets/images/skills/html.png",
    description: " ",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/skills/js.png",
    description: " ",
  },
  {
    title: "CSS",
    cardImage: "assets/images/skills/css.png",
    description: " ",
  },
  {
    title: "React.JS",
    cardImage: "assets/images/skills/react.png",
    description: " ",
  },
  {
    title: "RESTful API",
    cardImage: "assets/images/skills/api.png",
    description: " ",
  },
  {
    title: "Data Structure & Algorithms",
    cardImage: "assets/images/Expertise/dsa.jpg",
    description: " ",
  },
  {
    title: "Object Oriented Programming Concepts",
    cardImage: "assets/images/Expertise/oops.jpg",
    description: " ",
  },
  {
    title: "Computer Networking",
    cardImage: "assets/images/Expertise/networking.jpg",
    description: " ",
  },
  {
    title: "Database Management System",
    cardImage: "assets/images/Expertise/dbms.jpg",
    description: " ",
  },
  {
    title: "Problem Solving & Analytical Thinking",
    cardImage: "assets/images/Expertise/Analytical-thinking.jpg",
    description: " ",
  },
  {
    title: "Machine & Deep Learning",
    cardImage: "assets/images/Expertise/ml-dl-nlp.jpg",
    description: "Concepts of ML and DL algorithms. NLP and Sentiment Analysis",
  },
  {
    title: "Generative AI & LLM",
    cardImage: "assets/images/Expertise/AI-LLM.jpg",
    description: " ",
  },
  {
    title: "Full Stack Development",
    cardImage: "assets/images/Expertise/fsd.png",
    description: " ",
  },
  {
    title: "API Inttegration",
    cardImage: "assets/images/Expertise/api-int.png",
    description: " ",
  },
  {
    title: "Data Analytics",
    cardImage: "assets/images/Expertise/data-analytics.jpg",
    description: " ",
  },
  {
    title: "Cybersecurity",
    cardImage: "assets/images/Expertise/cybersecurity.webp",
    description: " ",
  },
  {
    title: "Penetration Testing",
    cardImage: "assets/images/Expertise/pentest.png",
    description: " ",
  },
  {
    title: "Google Cloud Security",
    cardImage: "assets/images/Expertise/Cloud-Security-Infrastructure.jpeg",
    description: " ",
  },
  {
    title: "Cloud VPS Management",
    cardImage: "assets/images/Expertise/vps.png",
    description: " ",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <center><h1 class="title"><a href="#">${title}</a></h1></center>
                </div>
              </div>
              <div class="description-div">
                <center><h1 class="title"><a href="#">${description}</a></h5></center>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
