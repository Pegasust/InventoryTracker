// Any inventory item may have optionally many
// tags (electronics, container, liquid, heavy,...)

const mongoose = require('mongoose');
const {Schema} = mongoose;

var TagSchema = new Schema({
    tagname: String
});

const Tag = mongoose.model('Tag', TagSchema);
module.exports = Tag;


TagSchema.statics._newTags = function(tags) {
    let tagDocuments = tags.map(tag => new Tag({tagname: tag}));
    return Tag.insertMany(tagDocuments, {ordered:false});
}
TagSchema.statics.createOrGetTags = function(tags) {
    this._newTags(tags);
    return Tag.where('tagname').in(tags);
}