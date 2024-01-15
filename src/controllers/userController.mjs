import * as userService from "../services/userService.mjs";

const getUsers = ((request, response) => {
    return userService.getUsers(request, response);
});

const getUser = ((request, response) => {
    return userService.getUser(request, response);
});

const createUser = ((request, response) => {
    return userService.createUser(request, response);
});

const updateUser = ((request, response) => {
    return userService.updateUser(request, response);
});

const deleteUser = ((request, response) => {
    return userService.deleteUser(request, response);
});

const acceptInvitation = ((request, response) => {
    return userService.acceptInvitation(request, response);
});

const getInvitation = ((request, response) => {
    return userService.getInvitation(request, response);
});

const createInvitation = ((request, response) => {
    return userService.createInvitation(request, response);
});

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    acceptInvitation,
    getInvitation,
    createInvitation
}