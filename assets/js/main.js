// Write your javascript code here
const dateformEl = document.querySelector('#dateform');

// https://www.livechennai.com/calendar2024/24012024.jpg






dateformEl.addEventListener("submit", (e) => {
    e.preventDefault(); // Corrected typo
    const inputDate = e.target[0].value; // Corrected accessing input value
    console.log(inputDate);
    processDate(inputDate);
});

function processDate(date) {

    const getdate = date ? new Date(date) : new Date()
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
    dayImgEl.classList.remove("hidden");
}
processDate();