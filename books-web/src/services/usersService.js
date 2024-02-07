import http from "./BaseService";

export const getUser = (id) => http.get(`/users/${id}`);
