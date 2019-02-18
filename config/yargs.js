const
    descripcion = {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'

    }
const completado = {
    demand: false,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion, completado })
    .command('listar', 'lista todas las tareas', {})
    .command('actualizar', 'actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}