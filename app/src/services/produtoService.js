import { api, requestConfig } from '../utils/config';

const create = async (data) => {
    const config = requestConfig('POST', data);

    try {
        const res = await fetch(api + '/produtos', config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const update = async (id, data) => {
    const config = requestConfig(`PUT`, data);

    try {
        const res = await fetch(api + `/produtos?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const remove = async (id) => {
    const config = requestConfig(`DELETE`);

    try {
        const res = await fetch(api + `/produtos?id=${id}`, config)
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
        const res = await fetch(api + `/produtos?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const list = async () => {
    const config = requestConfig();

    try {
        const res = await fetch(api + '/produtos', config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const produtoService = {
    create,
    update,
    remove,
    list,
    show,
};

export default produtoService;