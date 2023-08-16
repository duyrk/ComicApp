import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AxiosIntance = (contentType = 'application/json') => {
  const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.2:3000/api/',
  });
  axiosInstance.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('token');
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': contentType,
      };
      return config;
    },
    err => Promise.reject(err),
  );
  axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
      if (err.request && err.request.status === 401) {
        let failedRequest = err.config;
        return refreshToken().then(response => {
          axiosInstance.defaults.headers['Authorization'] =
            'Bearer ' + response;
          failedRequest.headers['Authorization'] = 'Bearer ' + response;
          return axiosInstance.request(failedRequest);
        });
      }
      return Promise.reject(err);
    },
  );
  return axiosInstance;
};
const refreshToken = async () => {
  try {
    console.log('refreshing token');
    const refresh_token = await AsyncStorage.getItem('refresh_token');
    const response = await AxiosIntance().post(`/user/refreshToken`, {
      refreshToken: refresh_token,
    });
    console.log('' + response.access_token);
    console.log('' + response.refresh_token);
    await AsyncStorage.setItem('token', response.access_token);
    await AsyncStorage.setItem('refresh_token', response.refresh_token);
    return Promise.resolve(response.access_token);
  } catch (error) {
    console.log('Refresh token error' + error);
  }
  return Promise.reject();
};
export default AxiosIntance;

// axiosInstance.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.request && error.request.status === 401) {
//       //  Set Failed Request
//       let failedRequest = error.config; //Method to get new token
//       return renewUserToken().then(response => {
//         // Set axios instance header
//         axiosInstance.defaults.headers['Authorization'] =
//           'Bearer ' + response.token;
//         // Set failed request header
//         failedRequest.headers['Authorization'] = 'Bearer ' + response.token;
//         //Retry failed request
//         return axios.request(failedRequest);
//       });
//     }
//     throw error;
//   },
// );
