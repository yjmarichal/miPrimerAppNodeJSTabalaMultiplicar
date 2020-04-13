//let base = "5";



const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar.js')
const argv = require('./config/config.js').argv
const colors = require('colors');
let limite = argv.limite;
let base = argv.base;
for (let i = 0; i < argv._.length; i++) {
    let comando = argv._[i];
    switch (comando) {
        case 'listar':
            listarArchivo(base, limite).then((result) => {
                console.log('************************'.green);
                console.log(('******tabla del ' + base + "****").green);
                console.log('************************'.green);
                console.log(result.red);
            }).catch(err => console.log(err));
            break;
        case 'crear':
            crearArchivo(base, limite).then((result) => {
                console.log('Se ha creado el archivo '.red + result.green + textaux);
            }).catch(err => console.log(err));
            break;
        default:
            console.log(comando + ': Comando desconocido');
    }
}
//console.log(process.argv);
//let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];





let textaux = "";
if (limite != 10)
    textaux += " con limite hasta " + limite;