import axios from 'axios';
import { Env } from './env';

export const Axios = axios.create({
  baseURL: Env.VITE_API_BASE_URL,
});
