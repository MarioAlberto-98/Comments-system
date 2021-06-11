class Usuario{
    constructor(nombre, comentario){
        this.nombre=nombre;
        this.comentario=comentario;

    }
}

class Mostrarall{

moscoment(usuario){

   

  

const secComentarios=document.getElementById('moscomentarios');
const elemento=document.createElement('div');
elemento.innerHTML=`
<div class="comentNombre">
<h1>
${usuario.nombre} 
</h1>
</div>
<div class="comentComentario">
<p>
${usuario.comentario}
</p>
</div>
`;
secComentarios.appendChild(elemento);

}




fecha(){

    const secFecha=document.getElementById('moscomentarios');
    const elemento=document.createElement('div');





    var d = new Date();
    var n = d.getMonth();
    if(n==0){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Enero</p> </div>`;
    } else if(n==1){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Febrero</p> </div>`;
    }else if(n==2){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Marzo</p> </div>`;
    } else if(n==3){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Abril</p> </div>`;
    }else if(n==4){
        elemento.innerHTML = `<div class="comentComentario">  <p class="fechaSecComent">Mayo</p>   </div>`;
    }else if(n==5){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Junio</p> </div>`;
    }else if(n==6){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Julio</p> </div>`;
    }else if(n==7){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Agosto</p> </div>`;
    }else if(n==8){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Septiembre</p> </div>`;
    }else if(n==9){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Octubre</p> </div>`;
    }else if(n==10){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Noviembre</p> </div>`;
    } else if(n==11){
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">Diciembre</p> </div>`;
    } else{
        elemento.innerHTML = ` <div class="comentComentario"> <p class="fechaSecComent">No hay fecha</p> </div>`;
    }
    

    secFecha.appendChild(elemento);



}

}


 



document.getElementById('formulario').addEventListener('submit',function(e){
const nombre=document.getElementById('nombreu').value;
const comentario=document.getElementById('comments').value;
const  usuario= new Usuario(nombre, comentario);
const mostrarall=new Mostrarall();
mostrarall.moscoment(usuario);
mostrarall.fecha();
e.preventDefault();


});




























