import React, { useState, useEffect, useRef } from 'react';
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage, SuccessMessage } from '../../components/MainComponents'
import useAPI from '../../helpers/AmorinhaAPI';


function Page(){

    const api = useAPI();

    const fileField = useRef();

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [responsableName, setResponsableName] = useState('');
    const [phone, setPhone] = useState('');
    const [emergencyWarning, setEmergencyWarning] = useState('');
    const [phoneEmergency, setPhoneEmergency] = useState('');
    const [foodRestriction, setFoodRestriction] = useState('');
    const [descriptionFoodRestriction, setDescriptionFoodRestriction] = useState('');
    const [imageAuthorization, setImageAuthorization] = useState(false);
    const [authorizedPeople , setAuthorizedPeople] = useState('');
    const [classes, setClasses] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [disable, setDisable] = useState(false);
    const [button, setButton] = useState('Cadastrar');

    const [classesList, setClassesList] = useState([]);


    useEffect(() => {
        const getClasses = async () => {
            const json = await api.getClasses();
            setClassesList(json.classes);
        };

        getClasses();
    }, [])

    const getStudent = async (id) => {
        const json = await api.getStudent(id);

        setId(id);
        setName(json.student.name);
        setBirthDate(json.student.birthDate);
        setResponsableName(json.student.responsableName);
        setPhone(json.student.phone);
        setEmergencyWarning(json.student.emergencyWarning);
        setFoodRestriction(json.student.foodRestriction);
        setDescriptionFoodRestriction(json.student.descriptionFoodRestriction);
        setImageAuthorization(json.student.imageAuthorization);
        setAuthorizedPeople(json.student.authorizedPeople);
        setClasses(json.student.classes);
        setAdditionalNotes(json.student.additionalNotes);
        setButton('Editar');
        
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        setError('');

        const fData = new FormData();
        fData.append('name', name);
        fData.append('birthDate', birthDate);
        fData.append('responsableName', responsableName);
        fData.append('phone', phone);
        fData.append('emergencyWarning', emergencyWarning);
        fData.append('phoneEmergency', phoneEmergency);
        fData.append('foodRestriction', foodRestriction);
        fData.append('descriptionFoodRestriction', descriptionFoodRestriction);
        fData.append('imageAuthorization', imageAuthorization);
        fData.append('authorizedPeople', authorizedPeople);
        fData.append('classes', classes);
        fData.append('additionalNotes', additionalNotes);
        
        if (fileField.current.files.length > 0){
            fData.append('name', fileField.current.files[0]);
        }

        if (id){
            fData.append('id', id);
        }
        
        const json = await api.addStudent(fData);
                
        if (json.error){
            setError(json.error);
        } else {
            setSuccess("Cadastro realizado com sucesso!");
            /**CRIAR UM BOTÃO EDITAR */
            // history.push(`/students/edit/${json.id}`);
            getStudent(json.id);
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
                                type="checkbox" 
                                disabled={disable} 
                                value={imageAuthorization}
                                onChange={ e => setImageAuthorization(!imageAuthorization) }
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
                            <select
                                disable={disable}
                                onChange={e=>setClasses(e.target.value)}
                                // required
                            >
                                <option></option>
                                {classesList && classesList.map(i => 
                                    <option key={i._id} value={i._id}> {i.name} </option>
                                )}
                            </select>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Observações Adicionais</div>
                        <div className="area-input">
                            <textarea 
                                type="text" 
                                disabled={disable} 
                                value={additionalNotes}
                                onChange={ e => setAdditionalNotes(e.target.value) }
                            ></textarea>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Adicionar Foto</div>
                        <div className="area-input">
                            <input 
                                type="file"
                                disabled={disable}
                                ref={fileField}
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button disabled={disable}>{button}</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page;