let baseurl = 'https://seal-app-mb688.ondigitalocean.app/api/v1';
if (process.env.NODE_ENV === 'development') {
    baseurl = 'https://seal-app-mb688.ondigitalocean.app/api/v1';
    // baseurl = 'http://3.110.157.141:3003/api/v1';
} else {
    baseurl = 'https://seal-app-mb688.ondigitalocean.app/api/v1';
    // baseurl = 'http://localhost:3003/api/v1';
}
export const baseURL = baseurl
export const login = `${baseurl}/user/login`;
export const signup = `${baseurl}/user/signup`;
export const createOrders = `${baseurl}/app/order/add`;
export const getAllOrders = `${baseurl}/app/order/all`;
export const updateOrders = `${baseurl}/app/order/update/:id`;
export const fetchOrders = (userid) => `${baseurl}/app/order/getUserOrder/${userid}`;