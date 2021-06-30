import axiosInstance from "./axiosInstance";

export const getAllResearch = async () => {
  try {
    const res = await axiosInstance.get(`/research`, {
      data: null,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export default getAllResearch;