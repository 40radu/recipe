import axiosInstance from "./axios";

class Http  {
    
    static async get (url) {
        try {
            const res = await axiosInstance.get (url);
            return res;
        } catch (error) {
            console.error (`Error: ${error.message}`)
        }
    }

    static async post (url, data) {
            try {
                const res = await axiosInstance.post(url,data);
                return res;
            } catch (error) {
                console.error(error.message)
            }
    }

    static async put (url,data) {
        try {
            const res = await axiosInstance.put (url, data);
            return res;
        } catch (error) {
            console.error(error.message)
            
        }
    }

}

export default Http
