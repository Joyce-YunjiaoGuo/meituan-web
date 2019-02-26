import axios from '@/axios.js'

var api = {
    getSearchHotWords() {
        return axios.get('/api/meituan/header/searchHotWords.json')
    },
    getSearchWords() {
        return axios.get('/api/meituan/header/search.json')
    },
    getMenuNav() {
        return axios.get('/api/meituan/index/nav.json')
    },
    getResultsByKeywords() {
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },
    getCityList() {
        return axios.get('/api/meituan/city/cityList.json');
    },
    getHotCityList() {
        return axios.get('/api/meituan/city/hot.json');
    },
    getRecentCityList() {
        return axios.get('/api/meituan/city/recents.json');
    },
    getProvinceList() {
        return axios.get('/api/meituan/city/province.json');
    },
    getProductList() {
        return axios.get('/api/meituan/list/goodsList.json');
    },
    getTypeCategoryList() {
        return axios.get('/api/meituan/list/classify.json');
    },
    getAreaCategoryList() {
        return axios.get('/api/meituan/list/areaList.json');
    },
    getCurrentPosition() {
        return axios.get('/api/meituan/city/getPosition.json');
    },
    submitLoginForm(params) {
        return axios.get('/api/meituan/login', params);
    },
    submitRegisterForm(params) {
        return axios.get('/api/meituan/register', params);
    }
}

export default api;