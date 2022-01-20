const mongoose = require('mongoose');
const {Schema} = mongoose;
const urlExist = require("url-exist")

var ImageSchema = new Schema({
    urls: [String], // 0th index: most preferred, goes down in preference
    imgName: String, // for transcription in case all urls are dead
    imgDesc: String, // for transcription
}, 
{timestamps: true}
);

ImageSchema.methods.aliveURL = function aliveURL() {
    for(let url of this.urls) {
        if (await urlExist(url)) {
            return url;
        }
    }
    return null;
};

module.exports = mongoose.model('Image', ImageSchema);