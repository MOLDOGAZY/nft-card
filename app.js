const body = document.querySelector("body");
body.style.cssText = `
	background-color: hsl(217, 54%, 11%);
	display: flex;
	place-items: center;
	margin: 70px auto 0;
`;

// wrapper
const div = document.createElement("div");
body.append(div);
div.setAttribute("id", "wrapper");
const wrapperID = document.getElementById("wrapper");

wrapperID.style.cssText = `
width: 20%;
background-color: hsl(216, 50%, 16%);
margin:auto;
padding: 20px;
box-shadow: 0px 0px 25px #141010;
border-radius: 5%;
`;

const img = document.createElement("img");
div.append(img);
img.setAttribute("class", "card-img");
img.setAttribute("src", "images/image-equilibrium.jpg");
const imgClass = document.querySelector(".card-img");
imgClass.style.cssText = `
width: 100%;
border-radius: 5%;
`;

const h3 = document.createElement("h3");
div.append(h3);
const h3Content = document.createTextNode("Equilibrium #3429");
h3.append(h3Content);
h3.style.cssText = `
color: hsl(0, 0%, 100%);
font-weight: 600;

`;

const paragraph = document.createElement("p");
div.append(paragraph);
const paragraphContent = document.createTextNode(
  "Our Equilibrium collection promotest balance and calm."
);
paragraph.append(paragraphContent);

paragraph.style.cssText = `
color: hsl(215, 51%, 70%);
font-size: 18px;
`;

const divCurrencyDate = document.createElement("div");
div.append(divCurrencyDate);
divCurrencyDate.style.cssText = `
display: flex;
justify-content: space-between;
font-size: 16px;
`;

// Currency
const currencyBlock = document.createElement("div");
divCurrencyDate.append(currencyBlock);

currencyBlock.style.cssText = `
display: flex;
align-items: center;	

`;

const currency = document.createElement("p");
currencyBlock.append(currency);
const currencyContent = document.createTextNode("0.041 ETH");
currency.append(currencyContent);
currency.style.cssText = `
color:  hsl(178, 100%, 50%);
font-weight: 400;
order: 2;
`;
const currencyLogo = document.createElement("img");
currencyBlock.append(currencyLogo);
currencyLogo.setAttribute("src", "images/icon-ethereum.svg");
currencyLogo.style.cssText = `
width: 15px;
height: 15px;
order: 1;
margin-right: 5px;
`;

// Date
const dateBlock = document.createElement("div");
divCurrencyDate.append(dateBlock);

dateBlock.style.cssText = `
display: flex;
align-items: center;	

`;
// Date
const date = document.createElement("p");
dateBlock.append(date);
const dateContent = document.createTextNode("3 dys left");
date.append(dateContent);

date.style.cssText = `
color:  hsl(215, 51%, 70%);
order: 2;
`;

const dateLogo = document.createElement("img");
dateBlock.append(dateLogo);
dateLogo.setAttribute("src", "images/icon-clock.svg");
currencyLogo.style.cssText = `
width: 15px;
height: 15px;
order: 1;
`;

// Line
const line = document.createElement("hr");
div.append(line);
line.style.cssText = `
height: 1px;
width: 100%;
border-color: rgb(47, 65, 91);
`;

// Creator Info
const creator = document.createElement("div");
div.append(creator);
creator.style.cssText = `
display: flex;
align-items: center;
font-size: 16px;
`;

const avatar = document.createElement("img");
avatar.setAttribute("src", "images/image-avatar.png");
creator.append(avatar);
avatar.style.cssText = `
width: 40px;
height: 40px;
margin-right: 10px;
`;

// Name
const nameof = document.createElement("div");
creator.append(nameof);
nameof.style.cssText = `
display: flex;
align-items: center;
`;

const creatorName = document.createElement("p");
nameof.append(creatorName);
const creatorNameContent = document.createTextNode("Creation of");
creatorName.append(creatorNameContent);
creatorName.style.cssText = `
color: hsl(215, 51%, 70%);
`;

const creatorNameInner = document.createElement("p");
nameof.append(creatorNameInner);
const creatorNameInnerContent = document.createTextNode("Jules Wyvern");
creatorNameInner.append(creatorNameInnerContent);

creatorNameInner.style.cssText = `
margin-left: 10px;
color: hsl(0, 0%, 100%);
`;
// alert("Я оцениваю свою работу на 100 баллов");
