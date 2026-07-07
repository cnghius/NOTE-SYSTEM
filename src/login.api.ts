import api from "./configs/config";

export const LoginApi = async (data: { email: string; password: string }) => {
  try {
    const res = await api.post("/auth/login", data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
