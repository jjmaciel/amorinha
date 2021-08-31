import React from 'react';
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';
import imgHome01 from './home01.jpg';
import imgHome02 from './home02.jpg';
import imgHome03 from './home03.jpg';

function Page(){
    return(
        <PageContainer>
            <PageArea>
                <div className="home-image">
                    <img src={imgHome01} alt="imagem do logo da escola amorinha" />
                </div>
                <div className="home-text text1">
                    <p>Aqui Seu Filho Faz <br/> Parte de Uma Família</p>
                </div>
            </PageArea>
            
            <PageArea>
                <div className="home-text text2">
                    <p>Sempre conectado com o <br/> Que há de mais moderno</p>
                </div>
                <div className="home-image">
                    <img src={imgHome02} alt="imagem do logo da escola amorinha" />
                </div>
            </PageArea>

            <PageArea>
                <div className="home-image">
                    <img src={imgHome03} alt="imagem do logo da escola amorinha" />
                </div>
                <div className="home-text text3">
                    <p>Uma nova experiência  <br/> em cada aula</p>
                </div>
            </PageArea>
            

        </PageContainer>
    );
}

export default Page;