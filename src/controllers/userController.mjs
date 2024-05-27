import UserService from '../services/userService.mjs';

class UserController {
    static getUsers = async (request, response) => {
        try {
            const users = await UserService.getUsers();
            response.json(users);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    static getUser = async (request, response) => {
        try {
            const user = await UserService.getUser(request.params.id);
            if (user) {
                response.json(post);
            } else {
                response.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    static createUser = async (request, response) => {
        try {
            const newUser = await UserService.createUser(request.body);
            response.status(201).json(newUser);
        } catch (error) {
            response.status(400).json({ message: error.message });
        }
    }

    static updateUser = async (request, response) => {
        try {
            const updatedUser = await UserService.updateUser(request.params.id, request.body);
            response.json(updatedUser);
        } catch (error) {
            response.status(400).json({ message: error.message });
        }
    }

    static deleteUser = async (request, response) => {
        try {
            await UserService.deleteUser(request.params.id);
            response.json({ message: 'User successfully deleted' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

export default UserController;