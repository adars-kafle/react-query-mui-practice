import axiosInstance from "../utils/axiosInstance";
import { UserData } from "../types";

export const verifyToken = async (): Promise<UserData> => {
  try {
    const response = await axiosInstance.post("/auth/verify-token");
    return response.data.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to verify token!");
  }
};

type LoginProps = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginProps) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (err: any) {
    throw new Error(
      err.response?.data?.message || "Login failed, Please try again!"
    );
  }
};

type RegisterProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterProps) => {
  try {
    const response = await axiosInstance.post("/auth/register", {
      firstName,
      lastName,
      email,
      password,
    });

    return response.data;
  } catch (err: any) {
    throw new Error(
      err.response?.data?.message || "Registration failed, Please try again!"
    );
  }
};

export const verifyAccount = async (otp: string) => {
  try {
    const response = await axiosInstance.post("/auth/register/verify-account", {
      otp,
    });

    return response.data;
  } catch (err: any) {
    throw new Error(
      err.respone?.data?.message || "Account verification failed!"
    );
  }
};

export const updateUser = async (updatedData: FormData) => {
  try {
    const response = await axiosInstance.put("/auth/update-user", updatedData);
    return response.data;
  } catch (err: any) {
    throw new Error(
      err.response?.data?.message || "Failed while updating the user!"
    );
  }
};
