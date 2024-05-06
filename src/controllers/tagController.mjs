import TagService from '../services/tagService.mjs';

class TagController {
    static getTags = async (request, response) => {
        try {
            const tags = await TagService.getTags();
            response.json(tags);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    static getTag = async (request, response) => {
        try {
            const tag = await TagService.getTag(request.params.id);
            if (tag) {
                response.json(tag);
            } else {
                response.status(404).json({ message: 'Tag not found' });
            }
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    static createTag = async (request, response) => {
        try {
            const newTag = await TagService.createTag(request.body);
            response.status(201).json(newTag);
        } catch (error) {
            response.status(400).json({ message: error.message });
        }
    }

    static updatePost = async (request, response) => {
        try {
            const updatedTag = await TagService.updateTag(request.params.id, request.body);
            response.json(updatedTag);
        } catch (error) {
            response.status(400).json({ message: error.message });
        }
    }

    static deleteTag = async (request, response) => {
        try {
            await TagService.deleteTag(request.params.id);
            response.json({ message: 'Tag successfully deleted' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

export default TagController;