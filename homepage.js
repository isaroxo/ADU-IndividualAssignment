var botaoinicial = document.getElementById("botaoinicial");


function mudaPaginaParaInstrucoes() {
    window.location.assign("Instructions.html")
}

var botaoirparamenu = document.getElementById("botaoirparamenu");

if (botaoirparamenu != null) {
    botaoirparamenu.addEventListener("click", mudaPaginaParaMenu, false);
}

function mudaPaginaParaMenu() {
    window.location.assign("Menu.html")
}


var botaovoltarhomepage = document.getElementById("botaovoltarhomepage");

if (botaovoltarhomepage != null) {
    botaovoltarhomepage.addEventListener("click", mudaPaginaParaHomepage, false);
}

function mudaPaginaParaHomepage() {
    window.location.assign("index.html")
}

var botaoirparanovoparagrafo = document.getElementById("botaoirparanovoparagrafo");
var contador = 0;
var subtitulocard = document.getElementById("subtitulocard");
var textocard = document.getElementById("textocard");
var li = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');

var botaoirparanovacard;

if (botaoirparanovoparagrafo != null) {
    botaoirparanovoparagrafo.addEventListener("click", mudaTextoCard, false);
}

function mudaTextoCard() {
    if (contador === 0) {
        contador = contador + 1;
        console.log("contador:" + contador);
        console.log("cliques = 1");
        subtitulocard.innerHTML = "Ilya's assistive technology:";
        textocard.innerHTML = "";
        textocard.appendChild(li);
        li.innerHTML = "Her screen reader and her phone accessibility features provide her with information about the applications, and text content in a speech output form.";
    } else if (contador === 1) {
        contador = contador + 1;
        console.log("contador:" + contador);
        console.log("cliques = 2");
        subtitulocard.innerHTML = "Acessing web content:";
        textocard.innerHTML = "";
        textocard.appendChild(li);
        li.innerHTML = "When accessing web content, the screen reader reads aloud the structural information of a page, including headings, column and row headers in tables, links, and form	controls, enabling her to navigate the page, submit forms, and access information."
    } else if (contador === 2) {
        contador = contador + 1;
        console.log("contador:" + contador);
        console.log("cliques = 3");
        subtitulocard.innerHTML = "Ilya's abilities and difficulties:";
        textocard.innerHTML = "";
        textocard.appendChild(li);
        li.innerHTML = "She listens to and understands speech output at a high speed."
        textocard.appendChild(li2);
        li2.innerHTML = "Sites that are not properly coded and do not include alt text descriptions on images are unnavigable and require a lot of time to read text from the top of the page to the bottom."
        textocard.appendChild(li3);
        li3.innerHTML = "Occasionally she finds herself trapped in areas on a page, unable to move to another area."
    } else if (contador === 3) {
        contador = contador + 1;
        console.log("contador:" + contador);
        console.log("cliques = 4");
        subtitulocard.innerHTML = "Ilya's work activities:";
        textocard.innerHTML = "";
        textocard.appendChild(li);
        li.innerHTML = "As a senior member of her organization, Ilya provides training to employees using video conferencing, chat, document and slide sharing."
        textocard.appendChild(li2);
        li2.innerHTML = "Her staff evaluated many tools before finding an application with accessibility features that meet the needs of a staff with diverse abilities."
        botaoirparanovoparagrafo.removeAttribute('id');
        botaoirparanovoparagrafo.setAttribute('id', 'botaoirparanovacard');
        botaoirparanovoparagrafo.innerHTML = "Next card";

        botaoirparanovacard = document.getElementById("botaoirparanovacard");

        if (botaoirparanovacard != null) {
            botaoirparanovacard.addEventListener("click", mudaCard, false);
        }
    }
}

function mudaCard() {
    window.location.assign("index.html")
}

var botaovoltarmenu = document.getElementById("botaovoltarmenu");

if (botaovoltarmenu != null) {
    botaovoltarmenu.addEventListener("click", mudaPaginaParaMenu, false);
}

var card = document.getElementById("card");

if (card != null) {
    card.addEventListener("click", mudaPaginaParaCard, false);
}

function mudaPaginaParaCard() {
    window.location.assign("Card.html")
}


if (window.matchMedia("(min-width: 992px)").matches) {
    botaoinicial.innerHTML = "Press “space” to see instructions";
    if (botaoinicial != null) {
        botaoinicial.addEventListener("click", mudaPaginaParaInstrucoes, false);
        window.addEventListener("keydown", function(event) {
            if (event.defaultPrevented) {
                return;
            }
            if (event.code === "Space"){
                window.location.assign("Instructions.html")
                console.log('Control key released');
            }
        }, true);
    }
} else {
    botaoinicial.innerHTML = "Go to card’s menu";
    if (botaoinicial != null) {
        botaoinicial.addEventListener("click", mudaPaginaParaMenu, false);
    }
}


//FUNÇÃO QUE VÊ SE A WIDTH DA JANELA MUDOU
window.addEventListener("resize", function () {
    //WIDTH SUPERIOR A 769
    if (window.matchMedia("(min-width: 992px)").matches) {
        botaoinicial.innerHTML = "Press “space” to see instructions";
        if (botaoinicial != null) {
            botaoinicial.addEventListener("click", mudaPaginaParaInstrucoes, false);
            window.addEventListener("keydown", function(event) {
                if (event.defaultPrevented) {
                    return;
                }
                if (event.code === "Space"){
                    window.location.assign("Instructions.html")
                    console.log('Control key released');
                }
            }, true);
        }
    } else {
        botaoinicial.innerHTML = "Go to card’s menu";
        if (botaoinicial != null) {
            botaoinicial.addEventListener("click", mudaPaginaParaMenu, false);
        }
    }
});

if (window.matchMedia("(max-width: 992px)").matches) {
    botaoinicial.innerHTML = "Go to card’s menu";
    if (botaoinicial != null) {
        botaoinicial.addEventListener("click", mudaPaginaParaMenu, false);
    }
}