import api from "../configs/config";

export const getCate = (resource: string) => {
  return api.get(`/${resource}`).then((res) => {
    const data = res.data;
    return data || [];
  });
};
export const createCate = (resource: string, data: string) => {
  return api.post(`/${resource}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
export const updateCate = (resource: string, data: string, id: string) => {
  return api.put(`/${resource}/${id}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
export const deleteCate = (resource: string, id: string) => {
  return api.patch(`/${resource}/${id}`).then((res) => {
    const data = res.data;
    return data;
  });
};
