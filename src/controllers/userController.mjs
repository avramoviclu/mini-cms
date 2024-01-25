import UserService from "../services/userService.mjs";

class UserController {
    getUsers = (request, response) => {
        return UserService.getUsers(request, response);
    }

    getUser = (request, response) => {
        return UserService.getUser(request, response);
    }

    createUser = (request, response) => {
        return UserService.createUser(request, response);
    }

    updateUser = (request, response) => {
        return UserService.updateUser(request, response);
    }

    deleteUser = (request, response) => {
        return UserService.deleteUser(request, response);
    }

    acceptInvitation = (request, response) => {
        return userService.acceptInvitation(request, response);
    }

    getInvitation = (request, response) => {
        return UserService.getInvitation(request, response);
    }

    createInvitation = (request, response) => {
        return UserService.createInvitation(request, response);
    }
}

export default UserController;