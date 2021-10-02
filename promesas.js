const datos = [
    {
        nombre:"Tierra",
        descripcion:"Tierra Objeto",
        imagen:"img/dirt.png",
        precio:10
    },{
        nombre:"Piedra",
        descripcion:"Piedra Objeto",
        imagen:"img/stone_block.png",
        precio:20
    },{
        nombre:"Lava",
        descripcion:"Lava Cubeta",
        imagen:"img/lava_cubeta.png",
        precio:85
    },{
        nombre:"Espada de Diamante",
        descripcion:"Espada Objeto",
        imagen:"img/diamond_sword.png",
        precio:900
    },{
        nombre:"Diamante",
        descripcion:"Diamante Objeto",
        imagen:"img/diamond.png",
        precio:350
    }
]

const seleccion = document.getElementById('pnb-data');
const vender = document.getElementById('pnb-button')
let gasto = 0;
let aleatorio;
let div = document.createElement('div')
document.body.appendChild(div)

const getDatos = () => {
    return new Promise((resolve,reject)=>{
        if(datos.length === 0){
            reject(new Error('No hay datos!'))
        }
        setTimeout(()=>{
            resolve(datos)
        },1500)
    })
}
vender.addEventListener('click', ()=>{
    gasto = gasto + datos[aleatorio].precio
    console.log(gasto)
    setTimeout(function(){document.getElementById('pnb-button').style.visibility='hidden';
    document.getElementById('pnb-lanzar').style.visibility='hidden';
    div.innerHTML = `<h5>Dinero Actual: ${gasto}$</h5>`
})
})
const fetchingData = async () => {
    aleatorio = Math.floor(Math.random()*datos.length)
    document.getElementById('pnb-lanzar').style.visibility='hidden';
    setTimeout(() => {
        document.getElementById('pnb-button').style.visibility='visible';
    }, 1200);
    const data = await getDatos().then(data => {seleccion.innerHTML = `
    <h1>${data[aleatorio].nombre}</h1>
    <br>
    <h2>${data[aleatorio].descripcion}</h2>
    <br>
    <img src="${data[aleatorio].imagen}" alt="" width="90">
    `})
    setTimeout(function () {
        seleccion.innerHTML = ""
        document.getElementById('pnb-button').style.visibility='hidden';
        document.getElementById('pnb-lanzar').style.visibility='visible';
    },5000)
}