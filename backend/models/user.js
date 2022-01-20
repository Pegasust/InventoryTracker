const mongoose = require('mongoose');
const {Schema} = mongoose;

var UserSchema = new Schema({
    // cryptography & important ID
    algo: {type: String, default: "SHA-512"},
    // public display
    publicKey: String, // used for confirmation & encrypted message to user
    alias: {type: [String], default: ()=>[]}, // first element is treated as main alias
    // additional information
    metadata: {type: Map, default: ()=>{}}
},
{tiemstamps: true}); // remember when the user was created

UserSchema.statics._generateSalt = function(byteCount = 64) {
    return crypto.randomBytes(byteCount).toString('base64');
};


UserSchema.statics.createUser = function(privateKey, salt = UserSchema.statics._generateSalt) {
    if(typeof salt !== 'function') {
        salt = ()=>salt;
    }

};


module.exports = mongoose.model('User', UserSchema)

