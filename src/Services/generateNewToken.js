import axiosInstance from "./axios";

async function generateNewToken() {

    const refreshTokenValue = localStorage.getItem('refreshToken');
    const result = await axiosInstance.get ('refreshToken',{
        headers : {
            Authorization : `Bearer ${refreshTokenValue}`
        }
    });
    return result;
}

export default generateNewToken