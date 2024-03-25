import axios from 'axios';

export const api  = axios.create({
    //Adicionar a API Key
    baseURL: 'https://hrpsdhnvtwoclnpwnqrw.supabase.co/rest/v1',
    headers: {
        apikey: "",
        authorization: ""
    }
})