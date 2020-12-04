"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const mongoose = require("mongoose");
const models_1 = require("./models");
const User = mongoose.model('User', models_1.UserSchema);
class UserController {
    addNewUser(req, res) {
        let newUser = new User(req.body);
        newUser.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    getUsers(req, res) {
        User.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    getUserById(req, res) {
        User.findById(req.params.userId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    deleteUser(req, res) {
        User.remove({ _id: req.params.userId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'user deleted' });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=controllers.js.map