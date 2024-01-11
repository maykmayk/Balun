import axios from "axios";

class ProvaApi {
    axiosClient = axios.create();

    makeRequest = async (url) => {
        try { 
            const fullUrl = `https://www.fotmob.com/${url}`;
            const response = await this.axiosClient({
                method: "GET",
                url: fullUrl,
            });    
            // console.log(response);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
}

export default ProvaApi;
