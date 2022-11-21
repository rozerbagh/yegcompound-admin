import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/AxiosIstance";

const initialState = {
    // login
    isLoading: false,
    isLoggedIn: localStorage.getItem(`admintoken`) || false,
    isLoggedOut: false,
    isError: false,
    errorMessage: "",
    user: JSON.parse(localStorage.getItem(`user`)) || {},

    // forget password
    isEmailSent: false,
    successMessage: "",
};

export const login = createAsyncThunk(`login`, async (credentials) => {
    try {
        const res = await api.post(`/user/login`, credentials);
        const { data } = res;
        return data;
    } catch (error) {
        throw error;
    }
});

export const forgotPassword = createAsyncThunk(
    `forgotPassword`,
    async (email) => {
        try {
            const res = await api.post(`/user/forgot-password`, email);
            const { data } = res;
            return data;
        } catch (error) {
            throw error;
        }
    }
);

const authSlice = createSlice({
    name: `auth`,
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem(`admintoken`);
            localStorage.removeItem(`user`);
            state.isLoggedIn = false;
            state.isLoggedOut = true;
            state.isError = false;
            state.errorMessage = "";
            state.user = {};
        },
    },
    extraReducers: {
        // login
        [login.pending]: (state) => {
            state.isLoading = true;
            state.isLoggedIn = false;
            state.isError = false;
            state.isLoggedOut = false;
            state.isEmailSent = false;
            state.successMessage = "";
            state.errorMessage = "";
            state.user = {};
        },
        [login.fulfilled]: (state, action) => {
            const { status } = action?.payload;
            state.isLoading = false;
            if (status === 200) {
                const { user, accessToken } = action?.payload;
                localStorage.setItem(`admintoken`, accessToken);
                localStorage.setItem(`user`, JSON.stringify(user));

                state.isLoggedIn = true;
                state.user = user;
            }
            if (status === 400) {
                localStorage.removeItem(`admintoken`);
                const { message } = action?.payload;

                state.isError = true;
                state.errorMessage = message;
            }
        },
        [login.rejected]: (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = {};
        },

        // forget password
        [forgotPassword.pending]: (state) => {
            state.isLoggedIn = false;
            state.isLoading = true;
            state.isEmailSent = false;
            state.isError = false;
            state.errorMessage = "";
            state.successMessage = "";
        },
        [forgotPassword.fulfilled]: (state, action) => {
            const { status } = action?.payload;
            state.isLoading = false;
            if (status === 200) {
                const { message } = action?.payload;

                state.isEmailSent = true;
                state.successMessage = message;
            }
            if (status === 400) {
                const { message } = action?.payload;

                state.errorMessage = message;
                state.isError = true;
            }
        },
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
