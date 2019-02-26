import axios from 'axios';

axios.defaults.baseURL =  'http://api.duyiedu.com'
axios.interceptors.request.use(function(config) {
    config.params = {
        ...config.params,
        appkey: "joyce0507_1550560125398"
    }
    return config;
}, function (error) {
    return Promise.reject(error);
})

export default axios;