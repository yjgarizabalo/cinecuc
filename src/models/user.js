const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    nombre: { type: String, required: true},
    correo: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true
})

UserSchema.methods.encryptPassword = async (contraseña) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(contraseña, salt);
};

UserSchema.methods.matchPassword = async function (contraseña) {
    return await bcrypt.compare(contraseña, this.contraseña);
};

module.exports = model("User", UserSchema);