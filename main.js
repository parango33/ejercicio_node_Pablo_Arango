//importar modulos
const http = require('http'); //importar http
const axios = require('axios').default; //importar axios
const fs = require("fs"); //Importar file system

//datos
let urlProveedores = 'https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json';
let urlClientes = 'https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json';

//Puerto y hostname
const hostname = '127.0.0.1';
const port = 8081;

let textoC = 'o'
let textoP = 'o'
//cargar archivos
//Devuelve una promesa
async function cargarProveedores(){
    let response = await axios.get(urlProveedores);
    textoP = await response.data;
    let proveedores = Array.from(textoP);
    console.log(proveedores[0].nombrecontacto);
    
   //texto html 
  let textoProv = `<html>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <header>
  <h1>Proveedores</h1>
</header>
  <table class="table table-striped">
    <tr>
      <th>Proveedor</th>
      <th>Compania</th>
      <th>Contacto</th> 
    </tr>
    <tr>
      <td>`+ proveedores[0].idproveedor+ `</td>
      <td> `+ proveedores[0].nombrecompania+ `</td>
      <td>`+ proveedores[0].nombrecontacto+ `</td>
    </tr>
    <tr>
      <td>`+ proveedores[1].idproveedor+ `</td>
      <td> `+ proveedores[1].nombrecompania+ `</td>
      <td>`+ proveedores[1].nombrecontacto+ `</td>
    </tr>
    <tr>
      <td>`+ proveedores[2].idproveedor+  `</td>
      <td> `+ proveedores[2].nombrecompania+ `</td>
      <td>`+ proveedores[2].nombrecontacto+ `</td>
    </tr>
    <tr>
      <td>`+ proveedores[3].idproveedor+  `</td>
      <td> `+ proveedores[3].nombrecompania+ `</td>
      <td>`+ proveedores[3].nombrecontacto+ `</td>
    </tr>
    <tr>
      <td>`+ proveedores[4].idproveedor+  `</td>
      <td> `+ proveedores[4].nombrecompania+ `</td>
      <td>`+ proveedores[4].nombrecontacto+ `</td>
    </tr>
    <tr>
      <td>`+ proveedores[5].idproveedor+  `</td>
      <td> `+ proveedores[5].nombrecompania+ `</td>
      <td>`+ proveedores[5].nombrecontacto+ `</td>
    </tr>
    <tr>
      <td>`+ proveedores[6].idproveedor+  `</td>
      <td> `+ proveedores[6].nombrecompania+ `</td>
      <td>`+ proveedores[6].nombrecontacto+ `</td>
    </tr>
    <tr>
      <td>`+ proveedores[7].idproveedor+  `</td>
      <td> `+ proveedores[7].nombrecompania+ `</td>
      <td>`+ proveedores[7].nombrecontacto+ `</td>
    </tr>
    <tr>
    <td>`+ proveedores[8].idproveedor+ `</td>
    <td> `+ proveedores[8].nombrecompania+ `</td>
    <td>`+ proveedores[8].nombrecontacto+ `</td>
  </tr>
  <tr>
    <td>`+ proveedores[11].idproveedor+  `</td>
    <td> `+ proveedores[11].nombrecompania+ `</td>
    <td>`+ proveedores[11].nombrecontacto+ `</td>
  </tr>
  <tr>
    <td>`+ proveedores[12].idproveedor+  `</td>
    <td> `+ proveedores[12].nombrecompania+ `</td>
    <td>`+ proveedores[12].nombrecontacto+ `</td>
  </tr>
  <tr>
    <td>`+ proveedores[13].idproveedor+  `</td>
    <td> `+ proveedores[13].nombrecompania+ `</td>
    <td>`+ proveedores[13].nombrecontacto+ `</td>
  </tr>
  <tr>
    <td>`+ proveedores[14].idproveedor+  `</td>
    <td> `+ proveedores[14].nombrecompania+ `</td>
    <td>`+ proveedores[14].nombrecontacto+ `</td>
  </tr>
  <tr>
    <td>`+ proveedores[15].idproveedor+  `</td>
    <td> `+ proveedores[15].nombrecompania+ `</td>
    <td>`+ proveedores[15].nombrecontacto+ `</td>
  </tr>
  <tr>
    <td>`+ proveedores[16].idproveedor+  `</td>
    <td> `+ proveedores[16].nombrecompania+ `</td>
    <td>`+ proveedores[16].nombrecontacto+ `</td>
  </tr><tr>
  <td>`+ proveedores[17].idproveedor+ `</td>
  <td> `+ proveedores[17].nombrecompania+ `</td>
  <td>`+ proveedores[17].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[18].idproveedor+ `</td>
  <td> `+ proveedores[18].nombrecompania+ `</td>
  <td>`+ proveedores[18].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[19].idproveedor+  `</td>
  <td> `+ proveedores[19].nombrecompania+ `</td>
  <td>`+ proveedores[19].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[20].idproveedor+  `</td>
  <td> `+ proveedores[20].nombrecompania+ `</td>
  <td>`+ proveedores[20].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[21].idproveedor+  `</td>
  <td> `+ proveedores[21].nombrecompania+ `</td>
  <td>`+ proveedores[21].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[22].idproveedor+  `</td>
  <td> `+ proveedores[22].nombrecompania+ `</td>
  <td>`+ proveedores[22].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[23].idproveedor+  `</td>
  <td> `+ proveedores[23].nombrecompania+ `</td>
  <td>`+ proveedores[23].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[24].idproveedor+  `</td>
  <td> `+ proveedores[24].nombrecompania+ `</td>
  <td>`+ proveedores[24].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[25].idproveedor+ `</td>
  <td> `+ proveedores[25].nombrecompania+ `</td>
  <td>`+ proveedores[25].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[26].idproveedor+  `</td>
  <td> `+ proveedores[26].nombrecompania+ `</td>
  <td>`+ proveedores[26].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[27].idproveedor+  `</td>
  <td> `+ proveedores[27].nombrecompania+ `</td>
  <td>`+ proveedores[27].nombrecontacto+ `</td>
</tr>
<tr>
  <td>`+ proveedores[28].idproveedor+  `</td>
  <td> `+ proveedores[28].nombrecompania+ `</td>
  <td>`+ proveedores[28].nombrecontacto+ `</td>
</tr>
    </table> 
  </html>`

  fs.writeFile('prueba.html', textoProv, 'utf-8', function (err) {
    if (err) throw err;
    console.log('filelistAsync complete');
  });

}
async function cargarClientes(){
  let response = await axios.get(urlClientes);
  textoC = await response.data;
  let clientes = Array.from(textoC);
  //console.log(clientes[0].NombreContacto);
  
 //texto html 
let textoCli = `<html>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<header>
  <h1>Clientes</h1>
</header>
<table class="table table-striped">
  <tr>
    <th>Cliente</th>
    <th>Compania</th>
    <th>Contacto</th> 
  </tr>
  <tr>
    <td>`+ clientes[0].idCliente+ `</td>
    <td> `+ clientes[0].NombreCompania+ `</td>
    <td>`+ clientes[0].NombreContacto+ `</td>
  </tr>
  <tr>
    <td>`+ clientes[1].idCliente+ `</td>
    <td> `+ clientes[1].NombreCompania+ `</td>
    <td>`+ clientes[1].NombreContacto+ `</td>
  </tr>
  <tr>
    <td>`+ clientes[2].idCliente+  `</td>
    <td> `+ clientes[2].NombreCompania+ `</td>
    <td>`+ clientes[2].NombreContacto+ `</td>
  </tr>
  <tr>
    <td>`+ clientes[3].idCliente+  `</td>
    <td> `+ clientes[3].NombreCompania+ `</td>
    <td>`+ clientes[3].NombreContacto+ `</td>
  </tr>
  <tr>
    <td>`+ clientes[4].idCliente+  `</td>
    <td> `+ clientes[4].NombreCompania+ `</td>
    <td>`+ clientes[4].NombreContacto+ `</td>
  </tr>
  <tr>
    <td>`+ clientes[5].idCliente+  `</td>
    <td> `+ clientes[5].NombreCompania+ `</td>
    <td>`+ clientes[5].NombreContacto+ `</td>
  </tr>
  <tr>
    <td>`+ clientes[6].idCliente+  `</td>
    <td> `+ clientes[6].NombreCompania+ `</td>
    <td>`+ clientes[6].NombreContacto+ `</td>
  </tr>
  <tr>
    <td>`+ clientes[7].idCliente+  `</td>
    <td> `+ clientes[7].NombreCompania+ `</td>
    <td>`+ clientes[7].NombreContacto+ `</td>
  </tr>
  <tr>
  <td>`+ clientes[8].idCliente+ `</td>
  <td> `+ clientes[8].NombreCompania+ `</td>
  <td>`+ clientes[8].NombreContacto+ `</td>
</tr>
<tr>
  <td>`+ clientes[11].idCliente+  `</td>
  <td> `+ clientes[11].NombreCompania+ `</td>
  <td>`+ clientes[11].NombreContacto+ `</td>
</tr>
<tr>
  <td>`+ clientes[12].idCliente+  `</td>
  <td> `+ clientes[12].NombreCompania+ `</td>
  <td>`+ clientes[12].NombreContacto+ `</td>
</tr>
<tr>
  <td>`+ clientes[13].idCliente+  `</td>
  <td> `+ clientes[13].NombreCompania+ `</td>
  <td>`+ clientes[13].NombreContacto+ `</td>
</tr>
<tr>
  <td>`+ clientes[14].idCliente+  `</td>
  <td> `+ clientes[14].NombreCompania+ `</td>
  <td>`+ clientes[14].NombreContacto+ `</td>
</tr>
<tr>
  <td>`+ clientes[15].idCliente+  `</td>
  <td> `+ clientes[15].NombreCompania+ `</td>
  <td>`+ clientes[15].NombreContacto+ `</td>
</tr>
<tr>
  <td>`+ clientes[16].idCliente+  `</td>
  <td> `+ clientes[16].NombreCompania+ `</td>
  <td>`+ clientes[16].NombreContacto+ `</td>
</tr><tr>
<td>`+ clientes[17].idCliente+ `</td>
<td> `+ clientes[17].NombreCompania+ `</td>
<td>`+ clientes[17].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[18].idCliente+ `</td>
<td> `+ clientes[18].NombreCompania+ `</td>
<td>`+ clientes[18].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[19].idCliente+  `</td>
<td> `+ clientes[19].NombreCompania+ `</td>
<td>`+ clientes[19].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[20].idCliente+  `</td>
<td> `+ clientes[20].NombreCompania+ `</td>
<td>`+ clientes[20].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[21].idCliente+  `</td>
<td> `+ clientes[21].NombreCompania+ `</td>
<td>`+ clientes[21].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[22].idCliente+  `</td>
<td> `+ clientes[22].NombreCompania+ `</td>
<td>`+ clientes[22].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[23].idCliente+  `</td>
<td> `+ clientes[23].NombreCompania+ `</td>
<td>`+ clientes[23].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[24].idCliente+  `</td>
<td> `+ clientes[24].NombreCompania+ `</td>
<td>`+ clientes[24].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[25].idCliente+ `</td>
<td> `+ clientes[25].NombreCompania+ `</td>
<td>`+ clientes[25].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[26].idCliente+  `</td>
<td> `+ clientes[26].NombreCompania+ `</td>
<td>`+ clientes[26].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[27].idCliente+  `</td>
<td> `+ clientes[27].NombreCompania+ `</td>
<td>`+ clientes[27].NombreContacto+ `</td>
</tr>
<tr>
<td>`+ clientes[28].idCliente+  `</td>
<td> `+ clientes[28].NombreCompania+ `</td>
<td>`+ clientes[28].NombreContacto+ `</td>
</tr>
  </table> 
</html>`

fs.writeFile('clientes.html', textoCli, 'utf-8', function (err) {
  if (err) throw err;
  console.log('filelistAsync complete');
});

}

cargarClientes()
cargarProveedores()


/*function cargarProveedores(){
  axios.get(urlProveedores).then(res => {
    const newItem = {
      id: res.data.idproveedor,
      name: res.data.nombrecompania,
  }
  arreglo.push(newItem)
  })}
*/



  const server = http.createServer((req, res) => {
    if (req.url.includes('clientes')){
      fs.readFile("clientes.html",(err,data)=>{  
        if(err){ 
            throw err;
        }
        res.end(data);
      })
    }
    else if (req.url.includes('proveedores')){
      fs.readFile("prueba.html",(err,data)=>{  
        if(err){ 
            throw err;
        }
        res.end(data);
      })
    }
 
  console.log(typeof(texto))

  // fs.readFile("prueba.html",(err,data)=>{  
  //   if(err){ 
  //       throw err;
  //   }
  //   res.end(data);
  // })
   })


server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
})