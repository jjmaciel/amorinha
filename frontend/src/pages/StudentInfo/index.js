import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import { PageArea } from './styled';
import { PageContainer } from '../../components/MainComponents'
import useAPI from '../../helpers/AmorinhaAPI';

const BASEIMG = "http://localhost:5000/media/"

function Page(){

    const api = useAPI();

    const { id } = useParams();

    const [student, setStudent] = useState([]);

    useEffect(() => {
        const getStudent = async () => {
            const json = await api.getStudent(id);
            setStudent(json.student);
        }
        getStudent();
    },[]);

    return(
        <>  
            <PageContainer>
                <PageArea>
                <div className="container-student">
                    <div className="row">
                        <div className="col-md-3 img-students">  
                            <img src={BASEIMG+student.photo} alt="aluno" />
                        </div>
                        <div className="col-md-3 primary-info">
                            <p>Aluno</p>
                            <p>Responsável</p>
                            <p>Telefone</p>
                        </div>
                        <div className="col-md-6">
                            <p>{student.name}</p>
                            <p>{student.responsableName}</p>
                            <p>{student.phone}</p>
                        </div>
                    </div>

                    <hr/>
                    <div className="row">
                        <div className="col-md-3 primary-info">
                            <p>Outras Informações</p>
                            <hr/>
                        </div>
                    </div>
                    
                    <div className="">
                    <div className="row">
                        <div className="col-md-4 others-info">
                            <p>Data de Nascimento:</p>
                        </div>
                        <div className="col-md-8">
                            <p>{student.birthstudent}</p>
                        </div>
                        <div className="col-md-4 others-info">
                            <p>Aviso de Emergência:</p>
                        </div>
                        <div className="col-md-8">
                            <p>{student.emergencyWarning}</p>
                        </div>
                        <div className="col-md-4 others-info">
                            <p>Telefone De emergência:</p>
                        </div>
                        <div className="col-md-8">
                            <p>{student.phoneEmergency}</p>
                        </div>
                        <div className="col-md-4 others-info">
                            <p>Restrição alimentar:</p>
                        </div>
                        <div className="col-md-8">
                            <p>{student.foodRestriction}</p>
                        </div>
                        <div className="col-md-4 others-info">
                            <p>Descrição da Restrição:</p>
                        </div>
                        <div className="col-md-8">
                            <p>{student.descriptionFoodRestriction}</p>
                        </div>
                        <div className="col-md-4 others-info">
                            <p>Autorização de uso da Imagem:</p>
                        </div>
                        <div className="col-md-8">
                            <p>{student.imageAuthorization}</p>
                        </div>
                        <div className="col-md-4 others-info">
                            <p>Pessoas Autorizadas:</p>
                        </div>
                        <div className="col-md-8">
                            <p>{student.authorizedPeople}</p>
                        </div>
                        <div className="col-md-4 others-info">
                            <p>Turma:</p>
                        </div>
                        <div className="col-md-8">
                            <p>{student.schoolClass}</p>
                        </div>
                        <div className="col-md-4 others-info">
                            <p>Observações:</p>
                        </div>
                        <div className="col-md-8">
                            <p>{student.additionalNotes}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </PageArea>
        </PageContainer>
        </>
    )
}

export default Page;

// id: student[i]._id,
//                 

//                 authorizedPeople: student[i].authorizedPeople,
//                 schoolClass: student[i].schoolClass,
//                 additionalNotes: student[i].additionalNotes