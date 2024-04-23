import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vendasService from '../services/vendasService';

const initialState = {
    vendaId: null,
    vendas: [],
    produtos: [],
    error: false,
    success: false,
    loading: false,
};

export const createVendas = createAsyncThunk(
    'venda/create',
    async (vendas, thunkAPI) => {
        const data = await vendasService.createVendas(vendas);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const setprodutoVenda = createAsyncThunk(
    'venda/setprodutoVenda',
    async (produtos, thunkAPI) => {
        const data = await vendasService.setprodutoVenda(produtos);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const updateVendas = createAsyncThunk(
    'venda/update',
    async (vendas, thunkAPI) => {
        const data = await vendasService.updateVendas(vendas);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const removeVendas = createAsyncThunk(
    'venda/remove',
    async (vendas, thunkAPI) => {
        const data = await vendasService.removeVendas(vendas);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const removeProdutoVendas = createAsyncThunk(
    'venda/removeProdutoVendas',
    async (produtos, thunkAPI) => {
        const data = await vendasService.removeProdutoVendas(produtos);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const showVendas = createAsyncThunk(
    'venda/show',
    async (vendas, thunkAPI) => {
        const data = await vendasService.showVendas(vendas);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const listVendas = createAsyncThunk(
    'venda/list',
    async (vendas, thunkAPI) => {
        const data = await vendasService.listVendas(vendas);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const listProdutosVenda = createAsyncThunk(
    'venda/listProdutosVenda',
    async (produtos, thunkAPI) => {
        const data = await vendasService.listProdutosVenda(produtos);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const vendasSlice = createSlice({
    name: 'vendas',
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
        },
        setVendaId: (state, action) => {
            state.vendaId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createVendas.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(createVendas.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.vendas = action.payload;
        }).addCase(createVendas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.vendas = null;
        }).addCase(updateVendas.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(updateVendas.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.vendas = action.payload;
        }).addCase(updateVendas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.vendas = null;
        }).addCase(removeVendas.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(removeVendas.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.vendas = action.payload;
        }).addCase(removeVendas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.vendas = null;
        }).addCase(showVendas.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(showVendas.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.vendas = action.payload;
        }).addCase(showVendas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.vendas = null;
        }).addCase(listVendas.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(listVendas.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.vendas = action.payload;
        }).addCase(listVendas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.vendas = null;
        }).addCase(listProdutosVenda.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(listProdutosVenda.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.produtos = action.payload;
        }).addCase(listProdutosVenda.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.produtos = null;
        }).addCase(setprodutoVenda.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(setprodutoVenda.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.vendas = action.payload;
        }).addCase(setprodutoVenda.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.vendas = null;
        }).addCase(removeProdutoVendas.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(removeProdutoVendas.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.vendas = action.payload;
        }).addCase(removeProdutoVendas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.vendas = null;
        });

    }
});

export const { reset, setVendaId } = vendasSlice.actions;
export default vendasSlice.reducer;