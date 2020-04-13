let opciones = {
    base: {
        demand: true,
        alias: 'b',
        default: 2
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
const argv = require('yargs')
    .command('listar', 'Imprime en Consola la tabla de Multiplicar', opciones)
    .command('crear', 'Crea un txt con la tabla de Multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}