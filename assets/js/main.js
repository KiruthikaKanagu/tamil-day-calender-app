// Write your javascript code here
const dateform = document.querySelectorAll('#dateform');
const getdate = new Date();
// https://www.livechennai.com/calendar2024/24012024.jpg

const result = getdate.toLocaleDateString("en-GB", {
// you can use undefined as first argument
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
})
const formateDate = result.replace('/', '').replace('/', '');
const formateUrl = `https://www.livechennai.com/calendar2024/${formateDate}.jpg`;
console.log(formateUrl);

const dayImgEl = document.querySelector('#dayImg');
dayImgEl.src = formateUrl;
dayImgEl.alt = dynamic - img;
dayImgEl.classList.remove("hidden");
