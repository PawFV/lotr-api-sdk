import axios from 'axios';
const movie = {
    async getById(movieId, filterOptions) {
        try {
            const response = await axios.get(`/movie/${movieId}`, {
                params: filterOptions
            });
            return response.data;
        }
        catch (error) {
            console.error(error.message);
        }
    },
    async getAll(filterOptions) {
        try {
            const response = await axios.get('/movie', { params: filterOptions });
            return response.data;
        }
        catch (error) {
            console.error(error.message);
        }
    },
    async getQuotesById(movieId, filterOptions) {
        try {
            const response = await axios.get(`/movie/${movieId}/quote`, { params: filterOptions });
            return response.data;
        }
        catch (error) {
            console.error(error.message);
        }
    }
};
export { movie };
//# sourceMappingURL=index.js.map