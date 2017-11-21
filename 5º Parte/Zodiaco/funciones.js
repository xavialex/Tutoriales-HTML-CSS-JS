//Esta función me la creo yo, no existe en javascript, es propia y está definida mas abajo.
addEvent(window,'load',inicializarEventos,false);//el booleano me permite escoger el orden de propagación de los eventos
//mas abajo dejo un enlace en el que se explica esto (no es básico)
 
window.onload=inicializarEventos;
function inicializarEventos()
{
  var ob;
  for(f=1;f<=12;f++)
  {
    ob=document.getElementById('enlace'+f);
    addEvent(ob,'click',presionEnlace,false);
  }
}
 
 
/*Hay elementos HTML que tienen por defecto eventos propios. El más característico es el hipervínculo <a>. Como sabemos por defecto al presionar en el mismo se carga otra página en el navegador.
Desde JavaScript podemos detectar mediante el evento click la selección del hipervínculo y hacer alguna actividad. Si queremos que no se dispare la carga de la página debemos hacer:
Si se trata del IE:
window.event.returnValue=false;
Si se trata de un navegador que respeta los estándares:
e.preventDefault();
Siendo e el objeto de tipo event que llega como parámetro a la función. */
 
function presionEnlace(e)
{
  if (window.event)
  {
    window.event.returnValue=false;
    var url=window.event.srcElement.getAttribute('href');
    cargarHoroscopo(url);    
  }
  else
    if (e)
    {
      e.preventDefault();
      var url=e.target.getAttribute('href');
      cargarHoroscopo(url);    
    }
}
 
var conexion1;
var tiempo;
function cargarHoroscopo(url)
{
  if(url=='')
  {
    return;
  }
  conexion1=crearXMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open("GET", url, true);
  conexion1.send(null);
  tiempo=setTimeout("finDeEspera()",3000);
}
 
function procesarEventos()
{
  var detalles = document.getElementById("detalles");
  if(conexion1.readyState == 4)
  {
    clearTimeout(tiempo);
    detalles.innerHTML = conexion1.responseText;
  }
  else
    if(conexion1.readyState == 1)
    {
      detalles.innerHTML = 'Cargando...';
    }
}
 
function finDeEspera()
{
  conexion1.abort();
  detalles.innerHTML = 'Intente nuevamente más tarde, el servidor esta sobrecargado.';
}
//***************************************
//Funciones comunes a todos los problemas
//***************************************
function addEvent(elemento,nomevento,funcion,captura)
{
  if (elemento.attachEvent)
  {
    elemento.attachEvent('on'+nomevento,funcion);
    return true;
  }
  else 
    if (elemento.addEventListener)
    {
      elemento.addEventListener(nomevento,funcion,captura);
      return true;
    }
    else
      return false;
}
 
function crearXMLHttpRequest()
{
  var xmlHttp= new XMLHttpRequest();
  return xmlHttp;
}