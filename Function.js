document.getElementById(boton).onclick = Function () {
    console.log:"Capturamos el evento click!";
    document.getElementById("demo").innerHTML = "Postulante contratado";
} 
document.addEventListener("click",function ) {
console.log("Hola Mundo! desde eventListener");
}
Document.getElementById("boton_color").addEventListener( "click",function() {
    document.body.style.backgroundColor = "#FF0000";
    });
    const collection = document.getElementsByClassName("prueba");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = "#ff0000";
    }


    