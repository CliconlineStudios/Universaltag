

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
        document.getElementById("activar").style.display = "none";
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
        document.getElementById("activar").style.display = "none";
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
        document.getElementById("activar").style.display = "none";
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


function admin() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("recarga").style.display = "none";
    document.getElementById("activar").style.display = "none";
    document.getElementById("informacion").style.display = "none";	
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
    document.getElementById("activar").style.display = "none";
    document.getElementById("screen4").style.display = "none";
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





// Administrador

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();

    let clave = document.querySelector("#clave").value;
    let resp = document.querySelector("#respuesta");
  
    let url = "https://peajespichincha.ec/pages/proc/sgk_p_soli_enro_tag.aspx"


    if (clave === "010232" ) {
    resp.classList.remove("fail");
    resp.classList.remove("send");
    resp.innerHTML = `Clave, Aprovada`;
    window.location.href = url;
    }else if (clave === ""){
     resp.classList.add("fail");
    resp.classList.remove("send");
    resp.innerHTML = `Tu Clave, ${clave} es Incorrecta `;
    return false;   
    }else {
        resp.classList.add("fail");
        resp.classList.remove("send");
        resp.innerHTML = `Tu Clave, ${clave} es Incorrecta `;
        return false;  
    }

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
    

    
    
      

        
        




