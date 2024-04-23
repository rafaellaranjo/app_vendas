export const api = "http://localhost:8000"

export const requestConfig = (method = 'GET', data, token = null) => {
    let config;

    if (method === "DELETE" || data === null) {
        config = {
            method: method,
            headers: {}
        }
    } else {
        config = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    }

    config.token = token;

    return config;
}