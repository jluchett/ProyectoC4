const Novio = require('../models/novios.model');

let response = {
    msg: "",
    exito: false
}

exports.createnv = function(req,res){
    let novio = new Novio({
        nombre_novio: req.body.nombre_novio,
        edad: req.body.edad,
        estatura: req.body.estatura,
        color_ojos: req.body.color_ojos,
        nacionalidad: req.body.nacionalidad,
        etnia: req.body.etnia
    })
    novio.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el novio"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg ="El novio se guardo correctamente"
        res.json(response)
    })
}

// exports.findnv = function(req,res){
//     Novio.find(function(err, novios){
//         res.json(novios)
//     })
// }

// exports.findOnenv = function(req,res){
//     Novio.findOne({_id: req.params.id},function(err, novio){
//         res.json(novio)
//     })
// }

// exports.updatenv = function(req,res){
//     let novio = ({
//         nombre_novio: req.body.nombre_novio,
//         edad: req.body.edad,
//         estatura: req.body.estatura,
//         color_ojos: req.body.color_ojos,
//         nacionalidad: req.body.nacionalidad,
//         etnia: req.body.etnia
//     })
//     Novio.findByIdAndUpdate(req.params.id,{$set: novio},function(err){
//         if(err){
//             console.error(err),
//             response.exito = false,
//             response.msg = "Error al modificar el novio"
//             res.json(response)
//             return;
//         }
//         response.exito = true,
//         response.msg = "El novio se actualizo correctamente"
//         res.json(response)
//     })
// }

// exports.removenv = function(req,res){
//     Novio.findByIdAndRemove({_id: req.params.id},function(err){
//         if(err){
//             console.error(err)
//             response.exito = false,
//             response.msg = "Error al eliminar el novio"
//             res.json(response)
//             return;
//         }
//         response.exito = true,
//         response.msg ="El novio se elimino correctamente"
//         res.json(response)
//     })
// }