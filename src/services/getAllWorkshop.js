import axiosInstance from "./axiosInstance";

export const getAllWorkshop = async () => {
  try {
    const res = await axiosInstance.get(`/workshop`, {
      data: null,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export default getAllWorkshop;