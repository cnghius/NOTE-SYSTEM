import api from "../configs/config";

export const getAccount = async (resource: string) => {
  return api.get(`/${resource}`).then((res) => {
    const data = res.data;
    return data;
  });
};

export const createAccount = async (resource: string, data: string) => {
  return api.post(`/${resource}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
export const updateAccount = (resource: string, data: string, id: string) => {
  return api.put(`/${resource}/${id}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
export const deleteAccount = (resource: string, id: string) => {
  return api.delete(`/${resource}/${id}`).then((res) => {
    const data = res.data;
    return data;
  });
};
