import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        return await axios.post(`${url}/add`, data);

    } catch (error) {

        console.log('Error while calling addUser API ', error);
    }
}


export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}

export const setConversations = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);

    } catch (error) {

        console.log('Error while calling setConversations API ', );
        console.log(error);
    }
}


export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

    

export const newMessage = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {   
        console.log('Error while calling newMessage API ', error);
    }
}


export const getMessages = async (id) => {

    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

