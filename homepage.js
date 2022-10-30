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

var divtitulo = document.getElementById("divtitulo");
var tituloisa = document.getElementById("tituloisa");
var tituloroxo = document.getElementById("tituloroxo");
var email = document.getElementById("email");
var behance = document.getElementById("linkbehance");
var textoisa = document.getElementById("textoisa");
var imagemisa = document.getElementById("imagemisa");
var textocopiar = document.getElementById("textocopiar");
var inputemail = document.getElementById("inputemail");



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

//FUNÇÃO APARECE FOTO NO TELEMOVEL
function scrollImagem() {
    if (isInViewport(textoisa)) {
        imagemisa.style.opacity = "1";
    }
    /*console.log("if para telemovel");*/
}

//FUNÇÃO APARECE INSTRUÇÃO COPIAR NO TELEMOVEL
function textoCopiado() {
    inputemail.select();
    navigator.clipboard.writeText(inputemail.value);
    textocopiar.innerHTML = "Copiado!";
}

// MUDANÇA DAS CORES AO PRESSIONAR O RATO
tituloisa.addEventListener("mousedown", mudarFundoOver, false);
tituloroxo.addEventListener("mousedown", mudarFundoOver, false);

tituloisa.addEventListener("mouseup", mudarFundoUp, false);
tituloroxo.addEventListener("mouseup", mudarFundoUp, false);
/*console.log("não muda de cor");*/

//FOTO APARECE QUANDO SE FAZ HOVER NO TEXTO
textoisa.addEventListener("mouseover", function () {
    imagemisa.style.opacity = "1";
}, false);

textoisa.addEventListener("mouseout", function () {
    imagemisa.style.opacity = "0";
}, false);
/*console.log("if para pc");*/

//INSTRUÇÕES QUE APARECEM AO CLICAR NO EMAIL
email.addEventListener("click", function () {
    inputemail.select();
    navigator.clipboard.writeText(inputemail.value);
    textocopiar.innerHTML = "Copiado!";
});
//INSTRUÇÕES QUE APARECEM AO FAZER HOVER NO EMAIL
email.addEventListener("mouseover", function () {
    textocopiar.innerHTML = "Copiar email";
});


//FUNÇÃO MUDA AS CORES AO PRESSIONAR O RATO NO COMPUTADOR
function mudarFundoOver() {
    document.body.style.backgroundColor = "#EDD7FF";
    tituloisa.style.textShadow = "-1.2px -1.2px 0 #a758e9, 1.2px -1.2px 0 #a758e9, -1.2px 1.2px 0 #a758e9, 1.2px 1.2px 0 #a758e9";
    tituloisa.style.color = "#EDD7FF";
    tituloroxo.style.textShadow = "0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7";
    tituloroxo.style.color = "#B678E7";
    email.style.color = "#B678E7";
    behance.style.color = "#B678E7";
    textoisa.style.color = "#B678E7";
}

//FUNÇÃO MUDA AS CORES AO DEIXAR DE PRESSIONAR O RATO NO COMPUTADOR
function mudarFundoUp() {
    document.body.style.backgroundColor = "#B678E7";
    tituloroxo.style.textShadow = "-1.2px -1.2px 0 #a758e9, 1.2px -1.2px 0 #a758e9, -1.2px 1.2px 0 #a758e9, 1.2px 1.2px 0 #a758e9";
    tituloroxo.style.color = "#B678E7";
    tituloisa.style.textShadow = "0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7";
    tituloisa.style.color = "white";
    email.style.color = "white";
    behance.style.color = "white";
    textoisa.style.color = "white";
}

//FUNÇÃO MUDA AS CORES AO CLICAR COM O RATO NO TELEMOVEL
function mudarFundoOverTelemovel() {
    document.body.style.backgroundColor = "#EDD7FF";
    tituloisa.style.textShadow = "-1.2px -1.2px 0 #a758e9, 1.2px -1.2px 0 #a758e9, -1.2px 1.2px 0 #a758e9, 1.2px 1.2px 0 #a758e9";
    tituloisa.style.color = "#EDD7FF";
    tituloroxo.style.textShadow = "0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7";
    tituloroxo.style.color = "#B678E7";
    email.style.color = "#B678E7";
    behance.style.color = "#B678E7";
    textoisa.style.color = "#B678E7";
    this.removeEventListener("click", mudarFundoOverTelemovel);
    tituloisa.addEventListener("click", mudarFundoUpTelemovel, false);
    tituloroxo.addEventListener("click", mudarFundoUpTelemovel, false);
}

//FUNÇÃO MUDA AS CORES AO CLICAR OUTRA VEZ COM O RATO NO TELEMOVEL
function mudarFundoUpTelemovel() {
    document.body.style.backgroundColor = "#B678E7";
    tituloroxo.style.textShadow = "-1.2px -1.2px 0 #a758e9, 1.2px -1.2px 0 #a758e9, -1.2px 1.2px 0 #a758e9, 1.2px 1.2px 0 #a758e9";
    tituloroxo.style.color = "#B678E7";
    tituloisa.style.textShadow = "0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7";
    tituloisa.style.color = "white";
    email.style.color = "white";
    behance.style.color = "white";
    textoisa.style.color = "white";
    this.removeEventListener("click", mudarFundoUpTelemovel);
    tituloisa.addEventListener("click", mudarFundoOverTelemovel, false);
    tituloroxo.addEventListener("click", mudarFundoOverTelemovel, false);
}

//MUDA A COR DO EMAIL AO FAZER HOVER POR CIMA DELE
email.addEventListener("mouseover", function () {
    email.style.color = "#B678E7";
    email.style.textShadow = "-1px -1px 0 #a758e9, 1px -1px 0 #a758e9, -1px 1px 0 #a758e9, 1px 1px 0 #a758e9";
    textocopiar.style.visibility = "visible";
    textocopiar.style.opacity = "1";
}, false);
email.addEventListener("mouseout", function () {
    email.style.color = "white";
    email.style.textShadow = "0 0 0 #a758e9, 0 0 0 #a758e9, 0 0 0 #a758e9, 0 0 0 #a758e9";
    textocopiar.style.visibility = "hidden";
    textocopiar.style.opacity = "0";
}, false);

//MUDA A COR DO BEHANCE AO FAZER HOVER POR CIMA DELE
behance.addEventListener("mouseover", function () {
    behance.style.color = "#B678E7";
    behance.style.textShadow = "-1px -1px 0 #a758e9, 1px -1px 0 #a758e9, -1px 1px 0 #a758e9, 1px 1px 0 #a758e9";
}, false);
behance.addEventListener("mouseout", function () {
    behance.style.color = "white";
    behance.style.textShadow = "0 0 0 #a758e9, 0 0 0 #a758e9, 0 0 0 #a758e9, 0 0 0 #a758e9";
}, false);

//FUNÇÃO QUE FAZ O TEXTO MOVER
function movertexto() {
    divtitulo.style.position = "relative";
    divtitulo.style.bottom = "0px";
    email.style.position = "relative";
    email.style.left = "0px";
    behance.style.position = "relative";
    behance.style.right = "0px";
}

window.onload = movertexto();

