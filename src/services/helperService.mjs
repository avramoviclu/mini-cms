class HelperService {
    static formatApiResponse(message = 'OK', statusCode = 200, data = []) {
        return {
            message: message,
            status_code: statusCode,
            data: data
        }
    }
}

export default HelperService;