// Any inventory item may have optionally many
// tags (electronics, container, liquid, heavy,...)

const mongoose = require('mongoose');
const {Schema} = mongoose;
const ImageSchema = require('image.js').schema;
const Tag = require("tag.js");


function suffix(prefix, creator) {
    // "Hello" -> "Hello0"
    let Item = mongoose.model('Item');
    var result = prefix;
    Item.find({creator: creator}).find({itemName: {$regex: `^{prefix}`}}).count(function(err, count) {
        result += count;
    });
    return result;
}
function emptyArr() {return [];}
var ItemSchema = new Schema({
    itemName: {type: String, default: suffix("Untitled", creator)},
    itemBrief: {type: String, default: "Some words about this item"},
    itemDesc: {type: String, default: "Detailed description about this item"},
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    // thumbnail: ImageSchema,
    // itemImages: [ImageSchema],
    tags: {type: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
            default: emptyArr},
    notes: {type: [String], default: emptyArr},
    metadata: {type: Map, default: function(){return{};}},
}, {timestamps: true});



module.exports = mongoose.model('Item', ItemSchema);
const Item = mongoose.model('Item', ItemSchema);
ItemSchema.statics.newItem = function(obj) {
    if(obj.tags != null) {
        this.modifyTag(obj.tags);
    }
    let item = new Item(obj);
    return item.save;
};
ItemSchema.statics.viewAllFilter = function() {

};


ItemSchema.statics.modifyTag = function(newTags) {
    return Tag.createOrGetTags(newTags);
};
