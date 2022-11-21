export const baseURL = 'http://3.110.157.141:3003/api/v1';
// const baseURL = 'http://localhost:3003/api/v1';
export const login = `${baseURL}/user/login`;
export const signup = `${baseURL}/user/signup`;
export const createOrders = `${baseURL}/app/order/add`;
export const getAllOrders = `${baseURL}/app/order/all`;
export const updateOrders = `${baseURL}/app/order/update/:id`;
export const fetchOrders = (userid) => `${baseURL}/app/order/getUserOrder/${userid}`;