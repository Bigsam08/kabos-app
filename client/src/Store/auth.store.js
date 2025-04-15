/**
 * using zustand to handle global state management
 */

import { create } from "zustand";
import { apiFetch } from "../Utils/axiosInstance"
import { toast } from "react-hot-toast";


const authStore = create((set) => ({
    isCheckingauth: true,
    userAuth: null,
    isLoading: false,
    loggedIn: false,
    signedUp: false,
    isForgetPassword: false,
    isResetPassword: false,
    tokenValid: null,


    checkAuth: async () => {
        set({ isCheckingauth: true })
        try {
            // use api to fetch data from backend
            const response = await apiFetch.get('/auth/check')
            set({ userAuth: response.data, loggedIn: true, isCheckingauth: false })

        } catch (error) {
            set({ userAuth: null, loggedIn: false, isCheckingauth: false })
            // Handle any errors, log the error message for debugging
            console.error("Error checking authentication:", error.message);
        }

    },

    signup: async (data) => {
        try {
            const response = await apiFetch.post('auth/register', data)
            if (response.status === 201)
                set({ signedUp: true })
            toast.success(response.data.message)
        } catch (error) {
            set({ signedUp: false })
            if (!error.response) {
                return toast.error("Server currently down try again later")
            }
            console.log("error in auth signup store", error.message)
            return toast.error(error.response?.data?.message || "Something went wrong")
        }

    },

    login: async (data) => {
        try {
            const response = await apiFetch.post('/auth/login', data);
            if (response.status === 200) {
                set({ loggedIn: true, userAuth: response.data })
                toast.success(response.data.message)
            }
        } catch (error) {
            set({ loggedIn: false, userAuth: null })
            if (!error.response) {
                // Server did not respond or off
                return toast.error("Server currently unavailable, try again later");
            }
            // Server responded with an error
            return toast.error(error.response.data.message || "Something went wrong");
        }
    },

    logout: async () => {
        try {
            const response = await apiFetch.post("/auth/logout");
            if (response.status === 200) {
                set({ loggedIn: false, userAuth: null })
                toast.success(response.data.message);
            }
        } catch (error) {
            if (!error.response) {
                // Server did not respond or off
                return toast.error("Server currently unavailable, try again later");
            }
            // Server responded with an error
            return toast.error(error.response.data.message);
        }
    },

    forgetPassword: async (email) => {
        set({ userAuth: null })
        try {
            const response = await apiFetch.post('/forget-password', { email });
            if (response.status === 200) {
                set({ isForgetPassword: true })
                return toast.success(response.data.message);
            }

        } catch (error) {
            set({ isForgetPassword: false })
            if (!error.response) {
                console.log("failed to connect to api backend", error.message)
                return toast.error("Internal Server Error try again in few minutes!")
            }
            return toast.error(error.response?.data?.message || "Something went wrong");
        }
    },

    validateToken: async (token) => {
        console.log("checking token....");
        try {
            const res = await apiFetch.get(`/validate-token/${token}`);
            if (res.status === 200) {
                console.log("res status", res.status)
                set({ tokenValid: true })
            } else {
                set({ tokenValid: false });
            }
        } catch (error) {
            console.error("Token validation failed:", error);
            set({ tokenValid: false });
        }

    },


    resetPassword: async (password, token) => {
        set({ userAuth: null })
        try {
            const response = await apiFetch.post(`/reset-password/${token}`, { password })
            if (response.status === 201) {
                set({ isResetPassword: true })
                return toast.success(response.data.message);
            }

        } catch (error) {
            set({ isResetPassword: false })
            if (!error.response) {
                return toast.error("Server is currently down, try again later!");
            }
            console.log(error.message);
            return toast.error(error.response?.data?.message || "Something went wrong");
        }

    },

}))

export default authStore;