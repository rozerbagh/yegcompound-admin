import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/AxiosIstance";

const initialState = {
    // login
    isLoading: false,
    isLoggedIn: localStorage.getItem(`admintoken`) || false,
    isLoggedOut: false,
    isError: false,
    errorMessage: "",
    user: JSON.parse(localStorage.getItem(`user`)) || null,
    token: null,

    // forget password
    isEmailSent: false,
    successMessage: "",
    redirectPath: null,
};

export const login = createAsyncThunk(`login`, async (body, thunkAPI) => {
    console.log(body.email, body.password);
    try {
        const res = await api.post(`/user/login`, {
            "email": body.email,
            "password": body.password
        });
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
            state.user = null;
            state.token = null;
        },
        checkAuthState: (state, action) => {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = localStorage.getItem(`admintoken`);
            if (token !== null && token != undefined && token != "") {
                if (user.role === 1) {
                    state.isLoggedIn = true;
                    state.user = user;
                    state.isLoggedOut = false;
                    state.isError = false;
                    state.errorMessage = "";
                } else {
                    localStorage.removeItem(`admintoken`);
                    localStorage.removeItem(`user`);
                    state.isLoggedIn = false;
                    state.isLoggedOut = true;
                    state.isError = false;
                    state.errorMessage = "not an admin";
                    state.user = null;
                    state.token = null;
                }
            } else {
                localStorage.removeItem(`admintoken`);
                localStorage.removeItem(`user`);
                state.isLoggedIn = false;
                state.isLoggedOut = true;
                state.isError = false;
                state.errorMessage = "";
                state.user = null;
                state.token = null;
            }
        }

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
            const { statuscode } = action?.payload;
            state.isLoading = false;
            if (statuscode === 200) {
                const { token, ...rest } = action?.payload;
                if (rest.role === 1) {
                    localStorage.setItem(`admintoken`, token);
                    localStorage.setItem(`user`, JSON.stringify(action?.payload));
                    state.isLoggedIn = true;
                    state.user = action?.payload;
                    state.redirectPath = '/admin/index'
                }
            } else {
                localStorage.removeItem(`admintoken`);
                const { message } = action?.payload;
                state.isError = true;
                state.errorMessage = message;
                state.isLoggedIn = false;
            }
        },
        [login.rejected]: (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = {};
            alert("Check Email / Password")
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

export const { logout, checkAuthState } = authSlice.actions;

export default authSlice.reducer;
