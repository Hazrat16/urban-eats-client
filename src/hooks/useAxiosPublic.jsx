import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://urban-eats-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;