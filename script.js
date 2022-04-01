const quotemsg = document.querySelector(".quote");
const button = document.querySelector(".Btn");
const Author = document.querySelector(".Author");

function randomQuotes() {
    console.log("working");
    fetch('https://api.quotable.io/Random').then(res=>res.json()).then(result=>{
        console.log(result);
        quotemsg.innerText=result.content;
        Author.innerText=result.author
        });
}

button.addEventListener("click", randomQuotes);