import axios, { AxiosInstance } from 'axios';

export const samuraiInstance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '6d37f9b3-5211-4067-a35f-17f090789f82' },
});

export const placeholderInstance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
