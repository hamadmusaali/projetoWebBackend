const mongoose = require('../database');

const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        unique: true,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Posts = mongoose.model('Posts', PostSchema);

module.exports = Posts;