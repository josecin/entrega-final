let edad;
edad = prompt("Introduce tu edad");
if (edad >= 18){
alert("Puedes entrar, eres mayor de edad.");
} else {
alert("Entras bajo tu responsabilidad");
}

function salida(){
    var confirmar = confirm('Estas seguro que deseas salir ?') ;
    if (confirmar){
        window.location.href = 'https://www.google.com';
    }
}

let envio;
function envioGratis(){
    envio= confirm("Estas en un radio de 40km?");
    if (envio){
    alert("Tu envio es gratis");
    } else {
    alert("Tu costo de envio es de $800 ");
    }

}
