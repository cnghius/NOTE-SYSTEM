import api from "../configs/config";

export const getTrash = (resource: string) => {
  return api.get(`/${resource}`).then((res) => {
    const data = res.data;
    console.log("data get bôkign", res);
    return data || [];
  });
};
export const createTrash = (resource: string, data: string) => {
  return api.post(`/${resource}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
export const updateTrash = (resource: string, data: string, id: string) => {
  return api.put(`/${resource}/${id}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
export const deleteTrash = (resource: string, id: string) => {
  return api.delete(`/${resource}/${id}`).then((res) => {
    const data = res.data;
    return data;
  });
};
