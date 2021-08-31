import React, { useState } from 'react';
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'
import useAPI from '../../helpers/AmorinhaAPI';
import { doLogin } from '../../helpers/AuthHandler';

function Page(){

    const api = useAPI();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disable, setDisable] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        setError('');

        // testa se as senhas digitadas para ver se são iguais, se não fot
        // envia para a state error uma mensagem para ser exibido na tela
        if (password !== confirmPassword){
            setError("Senhas diferentes");
            setDisable(false);
            return
        }

        // envia os dados para a api signup e espera um retorno
        const json = await api.signup(name, email, password);

        // se tiver algum erro, é enviado para a state error para ser exibido na tela
        // se não tiver erro, o token que retorna do webservice é enviado para o doLogin(dentro de AuthHandler) criar o cooke
        // enviado o link para a rota home.
        if (json.error){
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }

        // libera os campos e botões do form setando false.
        setDisable(false);
    }

    return(
        <PageContainer>
            <PageTitle>Inscrever-se</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">Nome</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                value={name}
                                onChange={ e => setName(e.target.value) }
                                required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Email</div>
                        <div className="area-input">
                            <input 
                                type="email" 
                                disabled={disable} 
                                value={email}
                                onChange={ e => setEmail(e.target.value) }
                                required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Senha</div>
                        <div className="area-input">
                            <input 
                                type="password" 
                                disabled={disable} 
                                value={password}
                                onChange={ e => setPassword(e.target.value) }
                                required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Confirmar Senha</div>
                        <div className="area-input">
                            <input 
                                type="password" 
                                disabled={disable} 
                                value={confirmPassword}
                                onChange={ e => setConfirmPassword(e.target.value) }
                                required
                            />
                        </div>
                    </label>
                    

                    
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button disabled={disable}>Salvar Cadastro</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page;