//importar modulos
const http = require('http'); //importar http
const axios = require('axios').default; //importar axios
const fs = require("fs"); //Importar file system

//datos
let urlProveedores = 'https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json';
let urlClientes = ''

//Puerto y hostname
const hostname = '127.0.0.1';
const port = 3000;

//cargar archivos
//Devuelve una promesa
async function cargarProveedores(){
    let response = await axios.get(urlProveedores);
    let data = Array.from(response.data);
    return data;
}


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  cargarProveedores().then((data) => console.log(data));
  res.end('oe')
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
})