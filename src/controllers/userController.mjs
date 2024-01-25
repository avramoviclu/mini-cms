import userService from "../services/userService.mjs";

class UserController {
    static getUsers(request, response) {
        return userService.getUsers(request, response);
    }

    static getUser(request, response) {
        return userService.getUser(request, response);
    }

    static createUser(request, response) {
        return userService.createUser(request, response);
    }

    static updateUser(request, response) {
        return userService.updateUser(request, response);
    }

    static deleteUser(request, response) {
        return userService.deleteUser(request, response);
    }

    static acceptInvitation(request, response) {
        return userService.acceptInvitation(request, response);
    }

    static getInvitation(request, response) {
        return userService.getInvitation(request, response);
    }

    static createInvitation(request, response) {
        return userService.createInvitation(request, response);
    }
}

export default UserController;