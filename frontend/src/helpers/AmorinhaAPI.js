import Cookies from "js-cookie";
import qs from 'qs';

const BASEAPI = 'http://localhost:5000';

const apiFetchFile = async (endpoint, body) => {
    // verifica se não tem um token junto no body (corpo da mensagem), neste caso ele busca
    // nos Cookies pelo token e agrega junto no body
    if (!body.token){
        let token = Cookies.get('token');
        if (token){
            body.append = ('token', token);
        }
    }

    // cria uma constante de comunicação com o webservice envaindo o endereço (BASEAPI) + a rota (endpoint)
    // enviando body para o webservice
    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        body
    });

    // a const json recebe a resposta de um json vindo do webservice
    const json = await res.json();
    
    // se nessa resposta tiver um parâmetro chamado notallowed, é pq deu algum erro
    // este notallowed vem do backend de um middlewares chamado Auth.js, que é o teste de privacidade de uma rota.
   /* if (json.notallowed){
        window.location.href = '/login';
        return;
    } */

    // se não tiver o notallowed, a resposta do webservice é retornada
    return json;
}

// envaindo dados para o webservice via POST
const apiFetchPost = async (endpoint, body) => {

    // verifica se não tem um token junto no body (corpo da mensagem), neste caso ele busca
    // nos Cookies pelo token e agrega junto no body
    if (!body.token){
        let token = Cookies.get('token');
        if (token){
            body.token = token;
        }
    }

    // cria uma constante de comunicação com o webservice envaindo o endereço (BASEAPI) + a rota (endpoint)
    // enviando os dados para o webservice
    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });

    // a const json recebe a resposta de um json vindo do webservice
    const json = await res.json();
    
    // se nessa resposta tiver um parâmetro chamado notallowed, é pq deu algum erro
    // este notallowed vem do backend de um middlewares chamado Auth.js, que é o teste de privacidade de uma rota.
    if (json.notallowed){
        window.location.href = '/login';
        return;
    }

    // se não tiver o notallowed, a resposta do webservice é retornada
    return json;
}

// o processo de GET é muito semelhante ao do POST, a diferença que uma URL é enviada para o webservice
const apiFetchGet = async (endpoint, body = []) => {

    // verifica se não tem um token junto no body (corpo da mensagem), neste caso ele busca
    // nos Cookies pelo token e agrega junto no body
    if (!body.token){
        let token = Cookies.get('token');
        if (token){
            body.token = token;
        }
    }

    // cria a url e o fetch faz essa requisição
    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);

    // o res passa a resposta json() para a const json
    const json = await res.json();

    // se nessa resposta tiver um parâmetro chamado notallowed, é pq deu algum erro
    // este notallowed vem do backend de um middlewares chamado Auth.js, que é o teste de privacidade de uma rota.
    if (json.notallowed){
        window.location.href = '/login';
        return;
    }

    // se não tiver o notallowed, a resposta do webservice é retornada
    return json;
}

// Esta API faz a conexão com as páginas, ela recebe os parâmetros vindo do HTML e envia para
// o apiFetchPost ou apiFetchGet com a rota correta e os parâmetros que recebeu.
const AmorinhaAPI = {
    login: async (email, password) => {
        const json = await apiFetchPost(
            '/user/login',
            {email, password}
        );
        
        return json;
    },

    signup: async (name, email, password) => {
        const json = await apiFetchPost(
            '/user/signup',
            { name, email, password }
        );

        return json;
    },

    userInfo: async (token) => {
        const json = await apiFetchPost(
            '/user/info',
            {token}
        );

        return json;
    },

    // envia dados e arquivos. Tudo esta no array fData
    addStudent: async (fData) => {
        const json = await apiFetchFile(
            '/student/add',
            fData
        );

        return json;
    },

    searchStudent: async (query_search) => {
        const json = await apiFetchGet(
            '/student/list',
            query_search
        );
        
        return json;
    },

    getStudent: async (id) => {
        const json = await apiFetchGet(
            '/student/info/:'+id,
        );

        return json;
    },

    getClasses: async () => {
        const json = await apiFetchGet(
            '/classes/list',
        );

        return json;
    }

};

export default () => AmorinhaAPI;


// addStudent: async (name, birthDate, responsableName, phone, emergencyWarning, phoneEmergency, foodRestriction, descriptionFoodRestriction, imageAuthorization, authorizedPeople, schoolClass, additionalNotes) => {
//     const json = await apiFetchPost(
//         '/student/add',
//         {name, birthDate, responsableName, phone, emergencyWarning, phoneEmergency, foodRestriction, descriptionFoodRestriction, imageAuthorization, authorizedPeople, schoolClass, additionalNotes}
//     );

//     return json;
// }