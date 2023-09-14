import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data); //get url from server to data 

export default fetcher;