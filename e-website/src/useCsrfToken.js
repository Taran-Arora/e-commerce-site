import { useEffect } from "react";

const getCookie = (name) => {
    const cookieValue = document?.cookie
    //     .split('; ')
    //     .find(row => row.startsWith(name))
    //     .split('=')[1];
    // return cookieValue;
    if (cookieValue) {
                const cookieRow = cookieValue.split('; ')
                    .find(row => row.startsWith(name));
                if (cookieRow) {
                    return cookieRow.split('=')[1];
                }
            }
};

const useCsrfToken = () => {
    useEffect(() => {
        const setCookie = (name, value, days) => {
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = `expires=${expirationDate.toUTCString()}`;
            document.cookie = `${name}=${value}; ${expires}; path=/`;
        };

        const csrfToken = 'your_csrf_token_value';
        setCookie('csrftoken', csrfToken, 1);
    }, []);
};

export { useCsrfToken, getCookie }; // Export both useCsrfToken and getCookie
