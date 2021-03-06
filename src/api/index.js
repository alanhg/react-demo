import axios from 'axios';

export const getUserInfo = () => axios.get('static/mock-data/userInfo.json', {
  params: {
    a: '#'
  }
});

export const getUserInfos = () => axios.get('static/mock-data/userInfo-list.json');

export const getAddress = () => axios.get('static/mock-data/address.json');

export const getUserHistory = () => axios.get('static/mock-data/userHistory.json');

export const getBooks = () => axios.get('static/mock-data/books.json');

export const getTreeData = () => axios.get('static/mock-data/tree-data.json');

export const getBadRequest = () => axios.get('http://mock-api.com/wz2wL5gL.mock/test/bad-request', {
  errorHandle: true
});

export const getMockRedirectInfos = () => axios.get('http://localhost:3200/api/login');
