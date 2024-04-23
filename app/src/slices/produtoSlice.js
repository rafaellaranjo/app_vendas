import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import produtoService from '../services/produtoService';

const initialState = {
    produto: [],
    error: false,
    success: false,
    loading: false,
};

export const create = createAsyncThunk(
    'auth/create',
    async (produto, thunkAPI) => {
        const data = await produtoService.create(produto);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const update = createAsyncThunk(
    'auth/update',
    async (produto, thunkAPI) => {
        const data = await produtoService.update(produto);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const remove = createAsyncThunk(
    'auth/remove',
    async (produto, thunkAPI) => {
        const data = await produtoService.remove(produto);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const show = createAsyncThunk(
    'auth/show',
    async (produto, thunkAPI) => {
        const data = await produtoService.show(produto);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const list = createAsyncThunk(
    'auth/list',
    async (produto, thunkAPI) => {
        const data = await produtoService.list(produto);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const produtoSlice = createSlice({
    name: 'produto',
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(create.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(create.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.produto = action.payload;
        }).addCase(create.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.produto = null;
        }).addCase(update.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(update.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.produto = action.payload;
        }).addCase(update.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.produto = null;
        }).addCase(remove.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(remove.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.produto = action.payload;
        }).addCase(remove.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.produto = null;
        }).addCase(show.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(show.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.produto = action.payload;
        }).addCase(show.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.produto = null;
        }).addCase(list.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(list.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.produto = action.payload;
        }).addCase(list.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.produto = null;
        });
        
    }
});

export const { reset } = produtoSlice.actions;
export default produtoSlice.reducer;