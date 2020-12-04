import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    userName: {
        type: String,
        required: 'enter a user name',

    },
    tweets:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }]

});

export const TweetSchema = new Schema({
    text: {
        type: String,
        required: 'type your tweet',
    },    
	user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: 'this is required'
	},
    created_date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Tweet', TweetSchema);
module.exports = mongoose.model('User', UserSchema);