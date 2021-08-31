import React, { useState } from 'react';
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage, SuccessMessage } from '../../components/MainComponents'
import useAPI from '../../helpers/AmorinhaAPI';


function Page(){

    const api = useAPI();

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [responsableName, setResponsableName] = useState('');
    const [phone, setPhone] = useState('');
    const [emergencyWarning, setEmergencyWarning] = useState('');
    const [phoneEmergency, setPhoneEmergency] = useState('');
    const [foodRestriction, setFoodRestriction] = useState('');
    const [descriptionFoodRestriction, setDescriptionFoodRestriction] = useState('');
    const [imageAuthorization, setImageAuthorization] = useState('');
    const [authorizedPeople , setAuthorizedPeople] = useState('');
    const [schoolClass, setSchoolClass] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [disable, setDisable] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setDisable(true);
        setError('');

        const json = await api.addStudent( name, birthDate, responsableName, phone, emergencyWarning, phoneEmergency, foodRestriction, descriptionFoodRestriction, imageAuthorization, authorizedPeople, schoolClass, additionalNotes);
        
        if (json.error){
            setError(json.error);
        } else {
            setSuccess("Cadastro realizado com sucesso!");
            setName('');
            setResponsableName('');
            setPhone('');
            /**CRIAR UM BOTÃO EDITAR */
        }

        setDisable(false);
    }

    return(
        <PageContainer>
            <PageTitle>Cadastro de Aluno</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                {success &&
                    <SuccessMessage>{success}</SuccessMessage>
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
                                // required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Data de Nascimento</div>
                        <div className="area-input">
                            <input 
                                type="date" 
                                disabled={disable} 
                                value={birthDate}
                                onChange={ e => setBirthDate(e.target.value) }
                                // required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Nome do Responsável</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                checked={responsableName}
                                onChange={e => setResponsableName(e.target.value)}
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Telefone de Contato</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                value={phone}
                                onChange={ e => setPhone(e.target.value) }
                                // required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Aviso de Emergência</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                value={emergencyWarning}
                                onChange={ e => setEmergencyWarning(e.target.value) }
                                // required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Telefone para Emergência</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                value={phoneEmergency}
                                onChange={ e => setPhoneEmergency(e.target.value) }
                                // required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Restrição Alimentar</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                value={foodRestriction}
                                onChange={ e => setFoodRestriction(e.target.value) }
                                // required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Descrição da Restrição Alimentar</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                value={descriptionFoodRestriction}
                                onChange={ e => setDescriptionFoodRestriction(e.target.value) }
                                // required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Autorização Para Uso da Imagem</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                value={imageAuthorization}
                                onChange={ e => setImageAuthorization(e.target.value) }
                                // required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Autorizados Para Buscar a Criança</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                value={authorizedPeople}
                                onChange={ e => setAuthorizedPeople(e.target.value) }
                                // required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Turma</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                value={schoolClass}
                                onChange={ e => setSchoolClass(e.target.value) }
                                // required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Observações Adicionais</div>
                        <div className="area-input">
                            <input 
                                type="text" 
                                disabled={disable} 
                                value={additionalNotes}
                                onChange={ e => setAdditionalNotes(e.target.value) }
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button disabled={disable}>Cadastrar</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page;