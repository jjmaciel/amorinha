import React, { useState } from 'react';
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'
import useAPI from '../../helpers/AmorinhaAPI';
import { doLogin } from '../../helpers/AuthHandler';

function Page(){

    const api = useAPI();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [stayloggued, setStaylogged] = useState('');
    const [disable, setDisable] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        setError('');

        const json = await api.login(email, password);

        if (json.error){
            setError(json.error);
        } else {
            doLogin(json.token, stayloggued);
            window.location.href = '/';
        }

        setDisable(false);
    }

    return(
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
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
                        <div className="area-title">Permanecer Logado?</div>
                        <div className="area-input">
                            <input 
                                type="checkbox" 
                                disabled={disable} 
                                checked={stayloggued}
                                onChange={() => setStaylogged(!stayloggued)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button disabled={disable}>Logar</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page;