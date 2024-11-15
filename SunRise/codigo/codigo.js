function ejecute()
{
  let persona=document.getElementById("usuario") .value;
  let password=document.getElementById("contraseña") .value;

  if(persona=="Itec" && password=="1234" || persona=="ITEC" && password=="4321")
    {
        window.location="principal.html"
    }
    else{
        alert("Datos Incorrectos")
    }
}