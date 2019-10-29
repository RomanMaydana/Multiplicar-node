const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.lim).then(
            archivo => {
                console.log('Archivo creado: ',colors.green(archivo));
            }
        ).catch(
            err => console.log(err)
        );
        break;
    default:
        console.log('Comando no reconocido')

}
// console.log(process.argv);




// let parametro = argv[2];
// let base = parametro.split('=')[1];



