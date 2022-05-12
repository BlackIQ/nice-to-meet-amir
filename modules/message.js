const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const messageSchema = new Scheme({
    from: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;