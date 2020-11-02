//axios config
import axios from "axios"
import SearchBar from "../components/SearchBar"
const KEY = "AIzaSyCebhtwQu8p8-kO4ghJ2KpO_3JJpsB20MI";

export default axios.create(
    {
        baseURL: "https://www.googleapis.com/youtube/v3",
        params: {
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            // videoEmbeddable: true,
            key: KEY
        }

    }
);