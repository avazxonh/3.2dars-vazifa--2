const card = document.createElement("div");
const img = document.createElement("img");
const body = document.body;
const card__heading = document.createElement("div");
const h1 = document.createElement("h1");
const h3 = document.createElement("h3");
const p = document.createElement("p");
const ul = document.createElement("ul");
const githubli = document.createElement("li");
const FrontendMentorli = document.createElement("li");
const LinkedInli = document.createElement("li");
const Twitterli = document.createElement("li");
const Instagramli = document.createElement("li");

card.classList.add("card");
img.classList.add("card__img");
img.src = "./images/profile-picc.png";
card__heading.classList.add("card__heading");
h1.classList.add("card__h1__heading");
h3.classList.add("card__h3__heading");
p.classList.add("card__paragraph");
ul.classList.add("card__paragraph");
githubli.classList.add("card__item");
FrontendMentorli.classList.add("card__item");
LinkedInli.classList.add("card__item");
Twitterli.classList.add("card__item");
Instagramli.classList.add("card__item");

body.appendChild(card);
card.append(img, card__heading, ul);
card__heading.append(h1, h3);
ul.append(githubli, FrontendMentorli, LinkedInli, Twitterli, Instagramli);

h1.textContent = "Jessica Randall";
h3.textContent = "London, United Kingdom";
p.textContent = "Front-end developer and avid reader.";
githubli.textContent = "GitHub";
FrontendMentorli.textContent = "Frontend Mentor";
LinkedInli.textContent = "LinkedIn";
Twitterli.textContent = "Twitter";
Instagramli.textContent = "Instagram";


