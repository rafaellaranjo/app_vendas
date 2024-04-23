import { api, requestConfig } from '../utils/config';

const create = async (data) => {
    const config = requestConfig('POST', data);

    try {
        const res = await fetch(api + '/tipos_produto', config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const update = async (id, data) => {
    const config = requestConfig('PUT', data);

    try {
        const res = await fetch(api + `/tipos_produto?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const remove = async (id) => {
    const config = requestConfig('DELETE');

    try {
        const res = await fetch(api + `/tipos_produto?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const show = async (id) => {
    const config = requestConfig();

    try {
        const res = await fetch(api + `/tipos_produto?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const listTipoProduto = async () => {
    const config = requestConfig();

    try {
        const res = await fetch(api + '/tipos_produto', config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const tipoProdutoService = {
    create,
    update,
    remove,
    show,
    listTipoProduto,
};

export default tipoProdutoService;