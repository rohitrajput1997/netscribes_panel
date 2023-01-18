import Cookies from 'js-cookie';

const NSCookies = () => {
    return {
        setUser(obj) {
            return Cookies.set('user', JSON.stringify(obj));
        },
        setToken(token) {
            return Cookies.set('token', token);
        },
    };
};

export default NSCookies();

