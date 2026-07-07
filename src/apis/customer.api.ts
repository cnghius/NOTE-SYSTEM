import api from "../configs/config";

export const getCustomer = (resource: string) => {
  return api.get(`/${resource}`).then((res) => {
    const data = res.data;
    console.log("data get bôkign", res);
    return data || [];
  });
};
export const createCustomer = (resource: string, data: string) => {
  return api.post(`/${resource}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
export const updateCustomer = (resource: string, data: string, id: string) => {
  return api.put(`/${resource}/${id}`, data).then((res) => {
    const data = res.data;
    return data;
  });
};
export const deleteCustomer = (resource: string, id: string) => {
  return api.patch(`/${resource}/${id}`).then((res) => {
    const data = res.data;
    return data;
  });
};
