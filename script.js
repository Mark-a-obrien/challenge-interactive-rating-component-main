
const ratingState = document.querySelector(".rating-state");
const thanksState = document.querySelector(".thanks-state");
const submit = document.querySelector("#submit");
const ratings = document.querySelectorAll(".rating");
let value = document.querySelector("#value");

submit.addEventListener("click", () => {

    if (value.textContent != "") {
        ratingState.style.display = "none";
        thanksState.style.display = "flex";
        console.log("workign");
    } else {
        alert("Please select a rating");
    }
});




// selected
ratings.forEach((rating) => {


    rating.addEventListener("click", () => {
        const selected = document.querySelector(".rating-selected");
        value = document.querySelector("#value");

        value.textContent = rating.textContent

        rating.classList.remove("rating_hover");
        
        try {
            selected.classList.remove("rating-selected");
        } catch (error) {
            
        }
        rating.classList.add("rating-selected");
    });

    rating.addEventListener("mouseover", () => {
        if (rating.classList.contains("rating-selected") && rating.classList.contains("rating_hover")) {
            rating.classList.remove("rating_hover");
        } else if (!rating.classList.contains("rating_hover")){
            rating.classList.add("rating_hover");
        }
    });
})