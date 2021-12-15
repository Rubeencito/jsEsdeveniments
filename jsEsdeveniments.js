let boton = document.getElementById("boton");
boton.addEventListener("click", myf1);
boton.addEventListener("click", myf2);
boton.addEventListener("mouseover", function(){boton.textContent="¡Hola!"});
boton.addEventListener("mouseout", function(){boton.textContent="No te vayas"});


function myf1() {
  document.getElementById("boton").style.backgroundColor= "red";
}

function myf2() {
  document.getElementById("boton").style.backgroundColor = "blue";
}