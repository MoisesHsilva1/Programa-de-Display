const article  = document.querySelectorAll(".conteudo");
const select =  document.querySelector("select")

function AtualizandoDisplay () {
    article.forEach((article) => {
        article.style.display =  select.value;
    });
}

select.addEventListener("change",  AtualizandoDisplay);

AtualizandoDisplay();