import TagService from "../services/tagService.mjs";

class TagController {
    getTags = (request, response) => {
        return TagService.getTags(request, response);
    }

    getTag = (request, response) => {
        return TagService.getTag(request, response);
    }

    createTag = (request, response) => {
        return TagService.createTag(request, response);
    }

    updateTag = (request, response) => {
        return TagService.updateTag(request, response);
    }

    deleteTag = (request, response) => {
        return TagService.deleteTag(request, response);
    }
}

export default TagController;