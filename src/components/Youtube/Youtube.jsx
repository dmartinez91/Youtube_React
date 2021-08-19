import axios from "axios";

const KEY = 'AIzaSyDPP_0jwJ7O2lH6pJKVBbNwqrs28QmH0lo';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        q: 'cat',
        part: 'snippet',
        maxResults: 5, 
        key: KEY
    }
})