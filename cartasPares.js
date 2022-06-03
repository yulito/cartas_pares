const url = "./emojis.json";

var estado=0;
var contador =0;
clicks = 0;

var frutas;
var animales;

const uno = document.querySelector('#carta1');
const dos = document.querySelector('#carta2');
const tres= document.querySelector('#carta3');
const cuatro= document.querySelector('#carta4');
const cinco= document.querySelector('#carta5');
const seis= document.querySelector('#carta6');
const siete= document.querySelector('#carta7');
const ocho= document.querySelector('#carta8');
const nueve= document.querySelector('#carta9');
const diez= document.querySelector('#carta10');
const once= document.querySelector('#carta11');
const doce= document.querySelector('#carta12');
const trece= document.querySelector('#carta13');
const catorce= document.querySelector('#carta14');
const quince= document.querySelector('#carta15');
const dieciseis= document.querySelector('#carta16');

fetch(url)
    .then(response => response.json())
    .then(data =>{
        frutas = data.emojiFrut.map(fruta =>{                   
            return fruta; 
        });
        animales = data.emojiAnimal.map(animal =>{                   
            return animal;
        });

        seleccionar(frutas, animales);        

    }).catch(err => console.log(err));

function arregloAleatorio(arreglo){    
    return arreglo.sort(()=> Math.random() -0.5);
}

function seleccionar(frut, anim){
    
    const boton1 = document.querySelector('#animales');
    const boton2 = document.querySelector('#frutas');

    boton1.addEventListener('click', ()=>{    
        boton1.hidden=true; 
        boton2.hidden=true;          
        let random1 = arregloAleatorio(anim);
        distribuirDato(random1);
    });
    boton2.addEventListener('click', ()=>{ 
        boton1.hidden=true; 
        boton2.hidden=true;
        let random2 = arregloAleatorio(frut);      
        distribuirDato(random2);
    });    
}

function primeraCarta(carta1, carta2){
    clicks += 1;
    if(estado == 1){ 
        carta1 = carta2;
        carta1.classList.toggle('visible');
        comenzarJuego(carta1);
    }else{
        accionJuego(carta1, carta2);
    }
}

function accionJuego(carta1, carta2){    
    if(carta1 != carta2){   
        console.log('ESA ES...')     
        carta2.classList.toggle('visible');
        if(carta1.textContent != carta2.textContent){
            estado = 0;
            //Se ocultan las dos cartas
            setTimeout(()=>{
                carta1.classList.toggle('visible');
                carta2.classList.toggle('visible');
            }, 1000);
        }else{   
            contador +=1
            if(contador < 8){
                //Quedan volteadas las dos cartas 
                console.log(contador)           
                estado = 0;            
            }else{
                console.log("FIN DEL JUEGO!!");
                swal({
                    title: "FIN DEL JUEGO!",
                    text: ":) . Total de clicks: "+clicks,                   
                    icon: "success",                    
                  }).then(result =>{
                    if(result.value){
                        location.reload(); 
                    }else{location.reload();}
                  })
            }   
        }
    }else{
        console.log("presionaste la misma carta");
        comenzarJuego(carta1);
    } 
}

function comenzarJuego(first = null){
    document.querySelector('#uno').onclick = ()=>{  
        estado += 1;           
        primeraCarta(first, uno);
    }
    document.querySelector('#dos').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, dos);
    }
    document.querySelector('#tres').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, tres);
    }
    document.querySelector('#cuatro').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, cuatro);
    }
    document.querySelector('#cinco').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, cinco);
    }
    document.querySelector('#seis').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, seis);
    }
    document.querySelector('#siete').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, siete);
    }
    document.querySelector('#ocho').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, ocho);
    }
    document.querySelector('#nueve').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, nueve);
    }
    document.querySelector('#diez').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, diez);
    }
    document.querySelector('#once').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, once);
    }
    document.querySelector('#doce').onclick = ()=>{ 
        estado += 1;        
        primeraCarta(first, doce);
    }
    document.querySelector('#trece').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, trece);
    }
    document.querySelector('#catorce').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, catorce);
    }
    document.querySelector('#quince').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, quince);
    }
    document.querySelector('#dieciseis').onclick = ()=>{
        estado += 1;         
        primeraCarta(first, dieciseis);
    }
}

function distribuirDato(dato){
    let cartas = document.querySelector('.cajaCarta');
    cartas.style.visibility = 'visible';

    uno.innerHTML = dato[0];
    dos.innerHTML = dato[1];
    tres.innerHTML = dato[2];
    cuatro.innerHTML = dato[3];
    cinco.innerHTML = dato[4];
    seis.innerHTML = dato[5];
    siete.innerHTML = dato[6];
    ocho.innerHTML = dato[7];
    nueve.innerHTML = dato[8];
    diez.innerHTML = dato[9];
    once.innerHTML = dato[10];
    doce.innerHTML = dato[11];
    trece.innerHTML = dato[12];
    catorce.innerHTML = dato[13];
    quince.innerHTML = dato[14];
    dieciseis.innerHTML = dato[15];

    comenzarJuego();    
}

