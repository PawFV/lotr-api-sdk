import axios from 'axios';
const quote = {
    async getById(quoteId, filterOptions) {
        try {
            const response = await axios.get(`/quote/${quoteId}`, {
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
            const response = await axios.get('/quote', { params: filterOptions });
            return response.data;
        }
        catch (error) {
            console.error(error.message);
        }
    }
};
export { quote };
//# sourceMappingURL=index.js.map