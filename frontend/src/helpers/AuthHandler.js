import Cookies from 'js-cookie';

export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
};

export const doLogin = (token, stayloggued = false) => {
    if (stayloggued){
        Cookies.set('token', token, { expires:999 });
    } else {
        Cookies.set('token', token);
    }
};

export const getToken = () => {
    let token = Cookies.get('token');
    if (token){
        return token;
    }
    
}

export const doLogout = () => {
    Cookies.remove('token');
};