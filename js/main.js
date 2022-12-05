
let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("informacion").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen1").style.display = "block";
        document.getElementById("recarga").style.display = "none";
        document.getElementById("activar").style.display = "none"
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else{
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen1").style.display = "block";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("recarga").style.display = "none";
        document.getElementById("activar").style.display = "none"
        contador=0;;
        backarriba();
        
    }};

//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("recarga").style.display = "none";
        document.getElementById("screen1").style.display = "block";
        document.getElementById("activar").style.display = "none"
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==0){
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen1").style.display = "block";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("recarga").style.display = "none";
        document.getElementById("activar").style.display = "none"
        contador=0;
        backarriba();

    }
    }

    var coden = '0';

function inicio() {
   
    if (coden==1) {
        document.getElementById("informacion").style.display = "none";	
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen1").style.display = "block";
        document.getElementById("side").style.display = "none";
        document.getElementById("recarga").style.display = "none";
        document.getElementById("activar").style.display = "none"
        conta=0;
        contador=0;
        coden=0;
        ids1();

    }
    else if(coden==0){
        document.getElementById("informacion").style.display = "block";	
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen1").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("recarga").style.display = "none";
        document.getElementById("activar").style.display = "none"
        conta=0;
        contador=1;
        coden=1;
        ids1();

    }
    }


function activar() {
        document.getElementById("activar").style.display = "block";
        document.getElementById("recarga").style.display = "none";
        document.getElementById("informacion").style.display = "none";	
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen1").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=1;
        ids1();
    }


function recarga() {
    document.getElementById("recarga").style.display = "block";
    document.getElementById("activar").style.display = "none";
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen1").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids1();
}



var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function portafolio() {
    document.getElementById("screen1").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("recarga").style.display = "none";
    document.getElementById("activar").style.display = "none"
    document.getElementById("informacion").style.display = "none";
    conta=1;
    backweb();
    contador=0;    
}    


   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "block";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

// llevar cerrar side automatico

document.querySelector('.tarjeta').addEventListener('click',()=>{
    document.getElementById("side").style.display = "none";
    conta=0;
    });


// formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593995468983";
  
    let cliente = document.querySelector("#cliente").value;
    let contacto = document.querySelector("#contacto").value;
    let fecha = document.querySelector("#fecha").value;
    let venta = document.querySelector("#venta").value;
    let cantidad = document.querySelector("#cantidad").value;
    let productos = document.querySelector("#productos").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=593995468983&text=
          *UNIVERSAL TAG*%0A
          *Solicitud del Tag*%0A
          *Nombre del Cliente*%0A
          ${cliente}%0A
          *Numero de Contacto*%0A
          ${contacto}%0A
          *Fecha*%0A
          ${fecha}%0A
          *Tipo de Solicitud*%0A
          ${venta}%0A
          *Placas del Vehículo*%0A
          ${cantidad}%0A
          *Número de Cedula*%0A
          ${productos}%0A`;
  
    if (cliente === "" || contacto === "" || fecha === ""|| venta === "" || cantidad === "" ) {
      resp.classList.add("fail");
      resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Tu Solicitud Fue Enviada, ${cliente}`;
  
    window.open(url);
  });
  


        document.querySelector('.side1')   
        .addEventListener('click',()=>{
            backarriba();
        });


        

// llevar arriba
       

document.querySelector('.side')   
.addEventListener('click',()=>{
    backarriba();
});


document.querySelector('.back')   
.addEventListener('click',()=>{
    backarriba();
});

//ALERTAS>
function save(){
    let url = `https://drive.google.com/u/0/uc?id=1ZLWOJKLTMti-dsukzPIm2-Nc1tt7DNWh&export=download`;
    window.open(url); 
   }
  
  function ftuser() {
      Swal.fire({
          title: 'ECUA-LABELS',
          text: 'UNIVERSAL TAG',
          imageUrl: 'img/iconoecua.png',
          imageWidth: 100,
          confirmButtonText: 'Añadir a Contactos',
          showCloseButton: 'true',
          showCancelButton: true,
    
      
        }).then((result) => {
          if (result.isConfirmed) {
            save();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Descarga Correcta',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  
   
  };
  

  function sms() {
    Swal.fire({
    showCloseButton: true,
    icon: 'info',
    title: 'UNIVERSAL TAG',
    text: 'Esta Información Estara Disponible Próximamente',
    footer: 'ECUA-LABELS'
    });
  
   
  };


  //PDFDESCARGA>
function pdf(){
    let url = `https://drive.google.com/u/0/uc?id=11scS_e_AH5YWVI75iphmkCp5qkOtE5Fy&export=download`;
    window.open(url); 
   }
  
  function dpdf() {
      Swal.fire({
          title: 'UNIVERSAL TAG',
          text: 'Catálogo PDF',
          imageUrl: 'img/banner2.png',
          imageWidth: 500,
          confirmButtonText: 'Descargar',
          showCloseButton: 'true',
          showCancelButton: true,
          footer: 'ECUA-LABELS'
    
      
        }).then((result) => {
          if (result.isConfirmed) {
            pdf();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Descarga Correcta',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  
   
  };
    
  // share tarjeta

const shareData2 = {
    title: 'Universal Tag',
    text: 'Enviado desde Cliconline App. Web Tarjeta Digital Ecua Labels Universal Tag',
    url: 'https://ecualabelstag.blogspot.com',
    }
    
    
    // Share must be triggered by "user activation"
   
    var urltarjeta = 'https://ecualabelstag.blogspot.com'
  
    function sharetarjeta(){
    if (navigator.share) {
        navigator
       .share(shareData2)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
      window.open(urltarjeta);
    }
    } 
    
    
    
    
      

        
        




