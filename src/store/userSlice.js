import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from "../utils/AxiosIstance";

const initialState = {
    // users
    isLoading: false,
    users: [],
    totalResults: '',
    resultsPerPage: '',
    currentPageNumber: '',

    // user profile
    userProfile: {},
    // add user
    isAddUserSuccess: false,
    errorMessage: '',
    // update user
    isUpdateUserSuccess: false,
    // delete
    isDeleteSuccess: false,
};

export const getUsers = createAsyncThunk(`getUsers`, async (params) => {
    try {
        const res = await api.get(`users`, { params });
        const { data } = res;
        return data;
    } catch (error) { }
});

export const getUserProfile = createAsyncThunk(
    `getUserProfile`,
    async (userID) => {
        try {
            const res = await api.get(`users/${userID}/profile`);
            const { data } = res;
            return data;
        } catch (error) { }
    }
);

export const addUser = createAsyncThunk(`addUser`, async (user) => {
    try {
        const res = await api.post(`users/create`, user);
        const { data } = res;
        return data;
    } catch (error) { }
});

export const updateUser = createAsyncThunk(`updateUser`, async (user) => {
    try {
        const res = await api.put(`users/${user.id}/profile`, user.profile);
        const { data } = res;
        return data;
    } catch (error) { }
});

export const deleteUser = createAsyncThunk(`deleteUser`, async (userID) => {
    try {
        const res = await api.delete(`users/${userID}`);
        const { data } = res;
        return data;
    } catch (error) { }
});

const userSlice = createSlice({
    name: `users`,
    initialState,
    reducers: {
        resetUsers: (state) => {
            state.isLoading = false;
            state.users = [];
            state.totalResults = '';
            state.resultsPerPage = '';
            state.currentPageNumber = '';
            state.userProfile = {};
            state.isAddUserSuccess = false;
            state.isUpdateUserSuccess = false;
            state.errorMessage = '';
            state.isDeleteSuccess = false;
        },
    },
    extraReducers: {
        // get all users
        [getUsers.pending]: (state) => {
            state.isLoading = true;
        },

        [getUsers.fulfilled]: (state, action) => {
            if (action?.payload) {
                const { users } = action?.payload;
                state.isLoading = false;
                state.users = users?.data;
                state.totalResults = users?.total;
                state.resultsPerPage = users?.take;
                state.currentPageNumber = users?.skip;
            }
        },

        [getUsers.rejected]: (state) => {
            state.isLoading = false;
            state.users = [];
        },

        // get user profile
        [getUserProfile.pending]: (state) => {
            state.isLoading = true;
        },
        [getUserProfile.fulfilled]: (state, action) => {
            const { user } = action.payload;
            state.isLoading = false;
            state.userProfile = user;
        },
        [getUserProfile.rejected]: (state) => {
            state.isLoading = false;
            state.userProfile = {};
        },

        // add user
        [addUser.pending]: (state) => {
            state.isLoading = true;
            state.isAddUserSuccess = false;
            state.errorMessage = '';
        },
        [addUser.fulfilled]: (state, action) => {
            if (action?.payload) {
                const { status, error } = action?.payload;
                state.isLoading = false;
                if (status === 200) {
                    state.isAddUserSuccess = true;
                }
                if (status === 400) {
                    state.isAddUserSuccess = false;
                    state.errorMessage = error;
                }
            }
        },
        [addUser.rejected]: (state) => {
            state.isLoading = false;
            state.isAddUserSuccess = false;
        },

        // update user
        [updateUser.pending]: (state) => {
            state.isLoading = true;
            state.isUpdateUserSuccess = false;
        },
        [updateUser.fulfilled]: (state, action) => {
            if (action?.payload) {
                const { status } = action?.payload;
                state.isLoading = false;
                if (status === 200) {
                    state.isUpdateUserSuccess = true;
                }
            }
        },
        [updateUser.rejected]: (state) => {
            state.isLoading = false;
            state.isUpdateUserSuccess = false;
        },
        // delete sucecess
        [deleteUser.pending]: (state) => {
            state.isLoading = true;
            state.isDeleteSuccess = false;
        },
        [deleteUser.fulfilled]: (state, action) => {
            if (action?.payload) {
                state.isLoading = false;
                const { status } = action?.payload;
                if (status === 200) {
                    state.isDeleteSuccess = true;
                }
            }
        },
        [deleteUser.rejected]: (state) => {
            state.isLoading = false;
            state.isDeleteSuccess = false;
        },
    },
});

export const { resetUsers } = userSlice.actions;

export default userSlice.reducer;