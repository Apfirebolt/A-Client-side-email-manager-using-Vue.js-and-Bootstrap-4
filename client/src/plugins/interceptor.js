import axios from 'axios';
import router from '../routes/index';
import { useAuth } from '../store/auth';
import { useToast } from 'vue-toastification';

const toast = useToast();
let baseURL = 'http://localhost:5000/api/';

const httpClient = axios.create({ baseURL });

export default httpClient;