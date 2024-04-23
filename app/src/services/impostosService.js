import { api, requestConfig } from '../utils/config';

const createImpostos = async (data) => {
    const config = requestConfig('POST', data);

    try {
        const res = await fetch(api + '/percentual_impostos', config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const updateImpostos = async (id, data) => {
    const config = requestConfig(`PUT`, data);

    try {
        const res = await fetch(api + `/percentual_impostos?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const removeImpostos = async (id) => {
    const config = requestConfig(`DELETE`);

    try {
        const res = await fetch(api + `/percentual_impostos?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const showImpostos = async (id) => {
    const config = requestConfig();

    try {
        const res = await fetch(api + `/percentual_impostos?id=${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const listImpostos = async () => {
    const config = requestConfig();

    try {
        const res = await fetch(api + '/percentual_impostos', config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const impostosService = {
    createImpostos,
    updateImpostos,
    removeImpostos,
    listImpostos,
    showImpostos,
};

export default impostosService;