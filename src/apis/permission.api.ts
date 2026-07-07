import api from "../configs/config";

export const getPermission = async (resource: string) => {
  return api.get(`/${resource}`).then((res) => {
    const data = res.data;
    return data;
  });
};
export const createPermission = async (resource: string, data: string) => {
  return api.post(`/${resource}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
