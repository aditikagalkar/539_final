let i = 0;
const headings_text = "My name is Aditi Kagalkar. Welcome to my Portfolio.";
let speed = 50;
const heading_element = document.querySelector("#heading");
function typing_Animation(){
    if (i < headings_text.length) {
        heading_element.innerHTML += headings_text.charAt(i);
        i++;
        setTimeout(typing_Animation, speed);
    }
}