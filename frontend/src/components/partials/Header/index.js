import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {

    let logged = isLogged();
    
    const hadleLogout = () => {
        doLogout();
        window.location.href = '/'; 
    }

 
    return (
        <HeaderArea>
            <div className="container">
                <dvi className="logo">
                    <Link to="/">
                        <img src={logo} alt="imagem do logo da escola amorinha" />
                    </Link>
                </dvi> 

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/registration">Cadastro</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">DashBoard</Link>
                                </li>
                                <li>
                                <div class="dropdown">
                                <span>Eu</span>
                                    <div class="dropdown-content">
                                    <p>{"teste"}</p>
                                </div>
                                </div>
                                </li>
                                <li>
                                    <button onClick={hadleLogout}>Sair</button>
                                </li>
                            </>
                        }

                        {!logged &&
                            <>
                                <li>
                                    <Link to="/login">Entrar</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Inscrever-se</Link>
                                </li>
                            </>
                        }
                    </ul>   
                </nav>

            </div> {/* container */}
            
        </HeaderArea>
    );
};

export default Header;