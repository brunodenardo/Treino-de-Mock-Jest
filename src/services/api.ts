import axios, { AxiosInstance } from "axios";

const api:AxiosInstance = axios.create({
    baseURL: "http://servicos.cptec.inpe.br/XML",
    headers: {
        "Content-Type":"application/xml"
    }
});

export default api;