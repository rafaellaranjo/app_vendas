import { api, requestConfig } from '../utils/config';

const createVendas = async (data) => {
    const config = requestConfig('POST', data);

    try {
        const res = await fetch(api + '/venda', config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const setprodutoVenda = async (data) => {
    const config = requestConfig('POST', data);

    try {
        const res = await fetch(api + '/venda_produtos', config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const updateVendas = async (id, data) => {
    const config = requestConfig(`PUT`, data);

    try {
        const res = await fetch(api + `/venda?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const removeVendas = async (id) => {
    const config = requestConfig(`DELETE`);

    try {
        const res = await fetch(api + `/venda?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const removeProdutoVenda = async (id) => {
    const config = requestConfig(`DELETE`);

    try {
        const res = await fetch(api + `/venda_produtos?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const showVendas = async (id) => {
    const config = requestConfig();

    try {
        const res = await fetch(api + `/venda?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const listVendas = async () => {
    const config = requestConfig();

    try {
        const res = await fetch(api + '/venda', config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const listProdutosVenda = async (id) => {
    const config = requestConfig();

    try {
        const res = await fetch(api + `/venda_produtos?venda_id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const vendasService = {
    createVendas,
    updateVendas,
    removeVendas,
    listVendas,
    showVendas,
    setprodutoVenda,
    removeProdutoVenda,
    listProdutosVenda
};

export default vendasService;