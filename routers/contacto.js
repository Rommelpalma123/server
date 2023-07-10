const express = require('express');
const router = express.Router();
const contactoSchema  = require('../models/contacto')

router.post('/contacto', function(req, res)
{

    const usuario = new contactoSchema(
        {
            nombre: req.body.nombre,
            email: req.body.email,
            asunto: req.body.asunto,
            descripcion: req.body.descripcion
        })
        usuario.save(function(err)
        {
            if(!err)
            {
                res.send('el contacto se agrego exitosamente');
            }
            else
            {
                res.send(err);
            }
        })
    /*const contacto = contactoSchema(req.body);
    console.log(req.body);
    contacto.save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: 'error al enviar'}));*/
})


module.exports = router;
