import api from "../configs/config";

export const getParentCate = (resource: string) => {
  return api.get(`/${resource}`).then((res) => {
    const data = res.data;
    console.log("data get bôkign", res);
    return data || [];
  });
};
export const createParentCate = (resource: string, data: string) => {
  return api.post(`/${resource}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
export const updateParentCate = (
  resource: string,
  data: string,
  id: string,
) => {
  return api.put(`/${resource}/${id}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
export const deleteParentCate = (resource: string, id: string) => {
  return api.delete(`/${resource}/${id}`).then((res) => {
    const data = res.data;
    return data;
  });
};
