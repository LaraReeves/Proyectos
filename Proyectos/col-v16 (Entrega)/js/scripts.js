
/* js del index*/
/**
 * Controlar error de  campos requeridos*/

var camposbs = document.getElementsByTagName('input');
for (campo  in  camposbs ){
    camposbs[campo].onkeypress = (e)=> {
        let id = e.target.name
        if (e.target.value  != '' ){
            document.getElementsByClassName(id)[0].innerHTML="";
        }
        
    }
};


//Se cargan las listas en los combos

function crearOption(obj) {
    const opcion = document.createElement("option");
    opcion.value = obj.value;
    opcion.textContent = obj.text;
    return opcion;
};

// Crear opciones del selector de tipo Documentos
const selectTipoDocumento = document.getElementById('docTipo');

if (typeof selectTipoDocumento === "object" &&   selectTipoDocumento!== null) {
    const fragtd = document.createDocumentFragment();
    tipoDocumento.forEach(docTipo => fragtd.appendChild(crearOption(docTipo)));
    selectTipoDocumento.appendChild(fragtd);
  }

// Crear opciones del selector de tipo Paises
const selectListaPaises=document.getElementById('lpaises');
if (typeof  selectListaPaises  === "object" &&   selectListaPaises!== null) {
    const fragpaises = document.createDocumentFragment();
    listaPaises.forEach(lpaises=>  fragpaises.appendChild(crearOption(lpaises)));
    selectListaPaises.appendChild(fragpaises);
}

// Crear opciones del selector de tipo Provincias
const selectListaProvincia =  document.getElementById('lprovincias');
if (typeof  selectListaProvincia  === "object" &&   selectListaProvincia !== null) {
    const fragprv = document.createDocumentFragment();
    listaProvincias.forEach(lprovincias => fragprv.appendChild(crearOption(lprovincias)));
    selectListaProvincia.appendChild(fragprv);
}

var botonLogin= document.getElementById('btnLogin');
    if (typeof  botonLogin  === "object" && botonLogin !== null) {
    botonLogin.addEventListener('click', ( e ) => {
        e.preventDefault();
        var esProfesional=document.getElementById('esProfesional');
        if(esProfesional.checked==1){
            window.location="menuMedico.html";
        }
        else{
            window.location="menuPaciente.html";
        }
    });
}

var botonContinuar= document.getElementById('btnContinuar');
if (typeof  botonContinuar  === "object" &&  botonContinuar!== null) {
    botonContinuar.addEventListener('click', ( e ) => {
        e.preventDefault();
        var esProfesional=document.getElementById('esProfesional');
        if(esProfesional.checked==1){
            window.location="registroProfesionales.html";
        }
        else{
            window.location="registroPacientes.html";
        }
    });
    }

/*MODAL*/
// Get the modal
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');

if (typeof  btn  === "object" && btn !== null) 
{
    btn.onclick = function() {
        modal.style.display = "block";
    }
}
var span = document.getElementsByClassName('close')[0];
if (typeof  span  === "object" && span !== null) 
{
    span.onclick = function()
     {
        modal.style.display = "none";
     }
}
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}
