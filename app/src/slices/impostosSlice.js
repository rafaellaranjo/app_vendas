import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import impostosService from '../services/impostosService';

const initialState = {
    impostos: [],
    error: false,
    success: false,
    loading: false,
};

export const createImpostos = createAsyncThunk(
    'impostos/create',
    async (impostos, thunkAPI) => {
        const data = await impostosService.createImpostos(impostos);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const updateImpostos = createAsyncThunk(
    'impostos/update',
    async (impostos, thunkAPI) => {
        const data = await impostosService.updateImpostos(impostos);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const removeImpostos = createAsyncThunk(
    'impostos/remove',
    async (impostos, thunkAPI) => {
        const data = await impostosService.removeImpostos(impostos);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const showImpostos = createAsyncThunk(
    'impostos/show',
    async (impostos, thunkAPI) => {
        const data = await impostosService.showImpostos(impostos);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const listImpostos = createAsyncThunk(
    'impostos/list',
    async (impostos, thunkAPI) => {
        const data = await impostosService.listImpostos(impostos);

        if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
        }

        return data;
    
    }
);

export const impostosSlice = createSlice({
    name: 'impostos',
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createImpostos.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(createImpostos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.impostos = action.payload;
        }).addCase(createImpostos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.impostos = null;
        }).addCase(updateImpostos.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(updateImpostos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.impostos = action.payload;
        }).addCase(updateImpostos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.impostos = null;
        }).addCase(removeImpostos.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(removeImpostos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.impostos = action.payload;
        }).addCase(removeImpostos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.impostos = null;
        }).addCase(showImpostos.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(showImpostos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.impostos = action.payload;
        }).addCase(showImpostos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.impostos = null;
        }).addCase(listImpostos.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(listImpostos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.impostos = action.payload;
        }).addCase(listImpostos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.impostos = null;
        });
        
    }
});

export const { reset } = impostosSlice.actions;
export default impostosSlice.reducer;