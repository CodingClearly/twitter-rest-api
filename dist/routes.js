"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const controllers_1 = require("./controllers");
class Routes {
    constructor() {
        this.userController = new controllers_1.UserController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'welcome to mock twitter'
            });
        });
        app.route('/user')
            .get(this.userController.getUsers);
        // .post(this.contactController.addNewContact);
        app.route('/user/:id');
        // .get(this.contactController.getContactWithID)
        // .put(this.contactController.updateContact)
        // .delete(this.contactController.deleteContact)
        // Endpoints
        // GET /user
        // GET /user/:id
        // GET /user/:id/tweet
        // POST /user
        // GET /tweet
        // GET /tweet/:id
        // POST /tweet
        // GET /search
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map