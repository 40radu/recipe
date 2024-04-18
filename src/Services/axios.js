import axios from "axios";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { redirect } from "react-router-dom";
import generateNewToken from "./generateNewToken";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default axiosInstance;


axiosInstance.interceptors.response.use((config) => {

    if (localStorage.getItem('token')) {

    } else {
        const token = config.data.token;
        const refreshToken = config.data.refreshToken;
        const id = config.data.user._id;
        token ? localStorage.setItem("token", token) : "";
        refreshToken ? localStorage.setItem("refreshToken", token) : "";
        id ? localStorage.setItem('id', id):"";
    }

    // if (pathname === "/sign") {

    // } else {

    // }

    // const token = config.data.token;
    // const refreshToken = config.data.refreshToken;
    // token ? localStorage.setItem("token", token) : "";
    // refreshToken ? localStorage.setItem("refreshToken", token) : "";





    console.log(config)

    // if (config.status === 401) {
    //     alert ('Veuillez vérifier vos identifiants')
    //     console.log("tsy autoriser")
    // }
    return config;

}, async (error) => {

    if (localStorage.getItem('token') && error.response.status === 401) {
        try {
            const newToken = await generateNewToken();
            localStorage.setItem('token', newToken);
            return axiosInstance(error.config)
        } catch (refreshError) {
            localStorage.clear();
            redirect('/login')
        }

    }


    if (error.response.status === 401) {
        alert('Veuillez vérifier vos identifiants')
        console.log("tsy autoriser")
    } else {
        console.log(error.message)
    }
    
    return Promise.reject(error);
})

axiosInstance.interceptors.request.use((resq) => {

    if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        resq.headers.Authorization = `Bearer ${token}`;
    } else {
        console.log('tsy misy token')
    }
    console.log("request");
    return resq;
}, (error) => {
    console.log(error.message)
    return Promise.reject(error);
})
