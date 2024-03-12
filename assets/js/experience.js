AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Cybersecurity Intern",
    cardImage: "assets/images/experience-page/IBM.jpg",
    place: "IBM Skillbuild",
    time: "(June, 2023 - August, 2023)",
    desp: "<li>Examined 2 web application using penetration testing and reported significant loops and bugs to respective clients.</li> <li>Made a GUI based keylogger to demonstrate process of data breaching in organizations to employees.</li> <li>This key-strokes capturing software can hide itself from anti-viruses and send the data to Host in real time.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
