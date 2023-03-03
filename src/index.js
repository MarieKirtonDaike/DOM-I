const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};


// MAIN NAV
const mainNav1 = document.querySelector("nav a")
const mainNav2 = mainNav1.nextElementSibling
const mainNav3 = mainNav2.nextElementSibling
const mainNav4 = mainNav3.nextElementSibling
const mainNav5 = mainNav4.nextElementSibling
const mainNav6 = mainNav5.nextElementSibling

const links = document.querySelectorAll("nav a")

links.forEach(link => link.classList = "italic")

mainNav1.textContent = siteContent["nav"]["nav-item-1"]
mainNav2.textContent = siteContent["nav"]["nav-item-2"]
mainNav3.textContent = siteContent["nav"]["nav-item-3"]
mainNav4.textContent = siteContent["nav"]["nav-item-4"]
mainNav5.textContent = siteContent["nav"]["nav-item-5"]
mainNav6.textContent = siteContent["nav"]["nav-item-6"]


// IMG

const img = document.querySelector("#cta-img")

img.src = "http://localhost:9000/img/cta.png"
img.alt = "Image of a code snippet"

const middleimg = document.querySelector("#middle-img")
middleimg.src = "http://localhost:9000/img/accent.png"
middleimg.alt = "Image of code snippets across the screen"


const ctaimg = document.querySelector("#cta-img")
ctaimg.src="http://localhost:9000/img/cta.png"
ctaimg.alt= "Image of a code snippet"



// BODY
const h1 = document.querySelector("h1")

const button1 = document.querySelector("button")
const logo = document.querySelector("#logo-img")
logo.src= "http://localhost:9000/img/logo.png"

h1.textContent = siteContent["cta"]["h1"]

button1.textContent= siteContent["cta"]["button"]


// Top Content

const featuresh4 = document.querySelectorAll(".top-content .text-content h4")

featuresh4[0].textContent = siteContent["main-content"]["features-h4"]
featuresh4[1].textContent = siteContent["main-content"]["about-h4"]

const featuresp = document.querySelectorAll(".top-content .text-content p")
featuresp[0].textContent = siteContent["main-content"]["features-content"]
console.log(featuresp[0].textContent)

featuresp[1].textContent = siteContent["main-content"]["about-content"]





// Bottom Content
const bottomtext = document.querySelector(".bottom-content .text-content p")
bottomtext.textContent = siteContent["main-content"]["services-content"]


const listh4 = document.querySelectorAll(".bottom-content h4")

listh4[0].textContent = siteContent["main-content"]["services-h4"]
listh4[1].textContent = siteContent["main-content"]["product-h4"]
listh4[2].textContent = siteContent["main-content"]["vision-h4"]


const paralist = document.querySelectorAll(".bottom-content p")
paralist[0].textContent = siteContent["main-content"]["services-content"]
paralist[1].textContent = siteContent["main-content"]["product-content"]
paralist[2].textContent = siteContent["main-content"]["vision-content"]


// FOOTER

const contact = document.querySelector(".contact h4")
const p1 = contact.nextElementSibling
const p2 = p1.nextElementSibling
const p3 = p2.nextElementSibling

contact.textContent = siteContent["contact"]["contact-h4"]
p1.textContent = siteContent["contact"]["address"]
p2.textContent = siteContent["contact"]["phone"]
p3.textContent = siteContent["contact"]["email"]

const footer = document.querySelector("footer a")
footer.classList = "bold"
console.log('project wired!')

footer.textContent = siteContent["footer"]["copyright"]