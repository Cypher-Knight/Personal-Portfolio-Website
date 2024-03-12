AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Data Science",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/professional-certificates/ibm-data-science",
  },
  {
    title: "Google Cloud Platform",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/gcp-fundamentals",
  },
  {
    title: "Google Cloud Platform Advanced",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/specializations/gcp-architecture",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/machine-learning-with-python",
  },
  {
    title: "Full Stack Development",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/complete-web-development-course/",
  },
  {
    title: "CCNA V7",
    cardImage: "assets/images/education-page/cisco.png",
    moocLink: "https://www.netacad.com/courses/networking/ccna-introduction-networks",
  },
  {
    title: "AWS Fundamental",
    cardImage: "assets/images/education-page/AWS.png",
    moocLink: "https://aws.amazon.com/training/awsacademy/",
  },
  {
    title: "AWS Advanced",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/professional-certificates/aws-cloud-solutions-architect",
  },
  {
    title: "React & API Integration",
    cardImage: "assets/images/education-page/youtube.png",
    moocLink: "https://youtube.com/playlist?list=PLkY85cDHOEpvL_j6eDLMYfzkX9ovhyzKk&si=yI1R-UgI6A95JWvU",
  },
  {
    title: "Deep Learning",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    title: "Generative AI & LLM Models",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/generative-ai-with-llms",
  },
  {
    title: "Cybersecurity & Enthical Hacking",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/the-complete-internet-security-privacy-course-volume-1/",
  },
  {
    title: "Hacking & Penetration Testing",
    cardImage: "assets/images/education-page/eccouncil.webp",
    moocLink: "https://www.eccouncil.org/train-certify/certified-cybersecurity-technician-certification/",
  },
];



const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
