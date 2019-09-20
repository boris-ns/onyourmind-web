export const API_BASE = 'http://localhost:8080';

export const API_LOGIN = API_BASE + '/auth/login';
export const API_USERS = API_BASE + '/api/users';
export const API_GET_USER = API_BASE + '/api/users/public';
export const API_REGISTER_USER = API_BASE + '/api/users/public/add-user';
export const API_REGISTER_ADMIN = API_BASE + '/api/users/add-admin';
export const API_DEACTIVATE_USER = API_BASE + "/api/users/deactivate";
export const API_ACTIVATE_USER = API_BASE + "/api/users/activate";

export const API_ALL_POSTS = API_BASE + '/api/posts/public';
export const API_DEACTIVATE_POST = API_BASE + '/api/posts/deactivate';
export const API_ACTIVATE_POST = API_BASE + '/api/posts/activate';
