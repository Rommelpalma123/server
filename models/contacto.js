const mongoose = require('mongoose');

const contactoSchema = mongoose.Schema(
    {
        nombre: { type: String, required: true },
        email: { type: String, required: true },
        asunto: { type: String, required: true },
        descripcion: { type: String, required: true },
    });

    module.exports = mongoose.model('contacto', contactoSchema);