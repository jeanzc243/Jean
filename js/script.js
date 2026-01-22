document.getElementById("inicio").addEventListener("click", () =>{
    document.getElementById("pagInicio").scrollIntoView({
        behavior: "smooth"
    });

});

document.getElementById("perfil").addEventListener("click", () =>{
    document.getElementById("pagPerfil").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

document.getElementById("trabalhos").addEventListener("click", () =>{
    document.getElementById("pagTrabalhos").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

document.getElementById("feedback").addEventListener("click", () =>{
    document.getElementById("pagFeedback").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

document.getElementById("contato").addEventListener("click", () =>{
    document.getElementById("pagContato").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


document.getElementById("inicio2").addEventListener("click", () =>{
    document.getElementById("pagInicio").scrollIntoView({
        behavior: "smooth"
    });
    nav.style.display = "none";
    divshowBtn.style.display = "block";

});

document.getElementById("perfil2").addEventListener("click", () =>{
    document.getElementById("pagPerfil").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    nav.style.display = "none";
    divshowBtn.style.display = "block";

});

document.getElementById("trabalhos2").addEventListener("click", () =>{
    document.getElementById("pagTrabalhos").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    nav.style.display = "none";
    divshowBtn.style.display = "block";

});

document.getElementById("feedback2").addEventListener("click", () =>{
    document.getElementById("pagFeedback").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    nav.style.display = "none";
    divshowBtn.style.display = "block";

});

document.getElementById("contato2").addEventListener("click", () =>{
    document.getElementById("pagContato").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    nav.style.display = "none";
    divshowBtn.style.display = "block";

});




let menuBtn = document.getElementById("btnMenu");
let btnFechar = document.getElementById("fechar2");
let nav = document.getElementById("menuVertical");
let divshowBtn = document.getElementById("top")

menuBtn.addEventListener("click", () => {
    nav.style.display = "flex";
    divshowBtn.style.display = "none";
});

btnFechar.addEventListener("click", () => {
    nav.style.display = "none";
    divshowBtn.style.display = "block";
});



