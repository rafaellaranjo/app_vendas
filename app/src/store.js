import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import produtoReducer from './slices/produtoSlice';
import tipoProdutoReducer from './slices/tipoProdutoSlice';
import impostosReducer from './slices/impostosSlice';
import vendasReducer from './slices/vendasSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        produto: produtoReducer,
        tipoProduto: tipoProdutoReducer,
        impostos: impostosReducer,
        vendas: vendasReducer,
    },
})