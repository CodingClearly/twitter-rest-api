"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetSchema = exports.UserSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    userName: {
        type: String,
        required: 'enter a user name',
        tweets: [{
                type: Schema.Types.ObjectId,
                ref: "Tweets"
            }]
    },
});
exports.TweetSchema = new Schema({
    text: {
        type: String,
        required: 'type your tweet',
        tweets: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=models.js.map