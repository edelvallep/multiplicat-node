const fs = require("fs");
const colors=('colors');

let listarTabla= (base,limite=10)=>{
   
   console.log('=============================='.green);
   console.log(`======tabla de ${base}========`.red);
   console.log('=============================='.green);


   for(let x=base;x<=limite;x++){
      console.log(`${x} * ${base} =${base * x} \n`);
   }
}

let crearArchivo = (base,limite=10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject("La base introducida no es un numero");
      return;
    }

    let data = "";

    data=limite;
    for (let x = 1; x <= limite; x++) {
      data += `${base} * ${x} =${base * x} \n`;
    }

    fs.writeFile(`tabla-${base}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`/home/delvalleperez/NODEJS/03-bases-node/tablas/tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla
};

