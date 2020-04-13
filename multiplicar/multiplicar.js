//requireds
const fs = require('fs'); //estos son los que son nativos de node
//const fs = require('express');//estos son los que alguien hizo pero no son nativos
//const fs = require('./dir.js');//estos son los que haga uno mismo y esten en el proyecto

const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base \'${base}\' deseada no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El límite \'${limite}\' deseada no es un número`);
            return;
        }

        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile('tablas/tabla_del_' + base + '.txt', data, 'utf8', (err) => {
            if (err)
                reject(err);

            else
                resolve('tabla_del_' + base + '.txt');
        });

    })
}


let listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base \'${base}\' deseada no es un número`);

        }

        if (!Number(limite)) {
            reject(`El límite \'${limite}\' deseada no es un número`);

        }

        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }
        resolve(data);
    })

}


module.exports = {
    crearArchivo,
    listarArchivo
}