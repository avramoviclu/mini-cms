import UserService from "../services/userService.mjs";

class UserController {
    static getUsers(request, response) {
        return UserService.getUsers(request, response);
    }

    static getUser(request, response) {
        return UserService.getUser(request, response);
    }

    static createUser(request, response) {
        return UserService.createUser(request, response);
    }

    static updateUser(request, response) {
        return UserService.updateUser(request, response);
    }

    static deleteUser(request, response) {
        return UserService.deleteUser(request, response);
    }

    static acceptInvitation(request, response) {
        return userService.acceptInvitation(request, response);
    }

    static getInvitation(request, response) {
        return UserService.getInvitation(request, response);
    }

    static createInvitation(request, response) {
        return UserService.createInvitation(request, response);
    }
}

export default UserController;