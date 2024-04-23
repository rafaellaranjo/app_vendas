import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tipoProdutoService from '../services/tipoProdutoService';

const initialState = {
    tipoProduto: [],
    error: false,
    success: false,
    loading: false,
};

export const create = createAsyncThunk(
    'auth/create',
    async (produto, thunkAPI) => {
        const data = await tipoProdutoService.create(produto);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const update = createAsyncThunk(
    'auth/update',
    async (produto, thunkAPI) => {
        const data = await tipoProdutoService.update(produto);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const remove = createAsyncThunk(
    'auth/remove',
    async (produto, thunkAPI) => {
        const data = await tipoProdutoService.remove(produto);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const show = createAsyncThunk(
    'auth/show',
    async (produto, thunkAPI) => {
        const data = await tipoProdutoService.show(produto);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const listTipoProduto = createAsyncThunk(
    'auth/listTipoProduto',
    async (produto, thunkAPI) => {
        const data = await tipoProdutoService.listTipoProduto(produto);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const tipoProdutoSlice = createSlice({
    name: 'tipoProduto',
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
            state.tipoProduto = action.payload;
        }).addCase(create.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.tipoProduto = null;
        }).addCase(update.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(update.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.tipoProduto = action.payload;
        }).addCase(update.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.tipoProduto = null;
        }).addCase(remove.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(remove.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.tipoProduto = action.payload;
        }).addCase(remove.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.tipoProduto = null;
        }).addCase(show.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(show.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.tipoProduto = action.payload;
        }).addCase(show.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.tipoProduto = null;
        }).addCase(listTipoProduto.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(listTipoProduto.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.tipoProduto = action.payload;
        }).addCase(listTipoProduto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.tipoProduto = null;
        });
        
    }
});

export const { reset } = tipoProdutoSlice.actions;
export default tipoProdutoSlice.reducer;