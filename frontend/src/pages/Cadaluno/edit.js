import React, { useState, useEffect, useRef } from 'react';
import { useParams  } from 'react-router-dom';
import { ErrorMessage, SuccessMessage } from '../../components/MainComponents'
import useAPI from '../../helpers/AmorinhaAPI';
import {Container, TextField, Button, FormGroup, Checkbox, FormControlLabel, Grid, Select, InputLabel, MenuItem, Fab, Box} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
// import { useFormik } from 'formik';
import { useStyles } from './styled';

const BASEIMG = "http://localhost:5000/media/"

function Page(){

    const { id } = useParams();

    const usestyles = useStyles();

    const api = useAPI();

    const fileField = useRef();
    
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [responsableName, setResponsableName] = useState('');
    const [phone, setPhone] = useState('');
    const [photoName, setPhotoName] = useState('');
    const [emergencyWarning, setEmergencyWarning] = useState('');
    const [phoneEmergency, setPhoneEmergency] = useState('');
    const [foodRestriction, setFoodRestriction] = useState(false);
    const [descriptionFoodRestriction, setDescriptionFoodRestriction] = useState('');
    const [imageAuthorization, setImageAuthorization] = useState(false);
    const [authorizedPeople , setAuthorizedPeople] = useState('');
    const [classes, setClasses] = useState('Turminha');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [disable, setDisable] = useState(false);
    const [photo, setPhoto] = useState('');

    const [classesList, setClassesList] = useState([]);

    useEffect(() => {
        const getClasses = async () => {
            const json = await api.getClasses();
            setClassesList(json.classes);
        };

        getClasses();
    }, [])

    useEffect(() => {
      const getStudent = async () => {
          const json = await api.getStudent(id);
          setName(json.student.name);
          setBirthDate(json.student.birthDate);
          setResponsableName(json.student.responsableName);
          setPhone(json.student.phone);
          setEmergencyWarning(json.student.emergencyWarning);
          setPhoneEmergency(json.student.phoneEmergency);
          setFoodRestriction(json.student.foodRestriction);
          setDescriptionFoodRestriction(json.student.descriptionFoodRestriction);
          setImageAuthorization(json.student.imageAuthorization);
          setAuthorizedPeople(json.student.authorizedPeople);
          setClasses(json.student.classes);
          setAdditionalNotes(json.student.additionalNotes);
          setPhoto(json.student.photo);
          console.log(json.student.photo);
          
      }
      getStudent();
  },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setDisable(true);
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
            console.log(fileField);
            fData.append('photo', fileField.current.files[0]);
        }
        
        const json = await api.editStudent(id, fData);
                
        if (json.error){
            setError(json.error);
        } else {
            setSuccess("Alteração realizado com sucesso!");
            /**CRIAR UM BOTÃO EDITAR */
            // history.push(`/students/edit/${json.id}`);
        }

        setDisable(false);
    }


    return(
        <Container>
            
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                {success &&
                    <SuccessMessage>{success}</SuccessMessage>
                }
                <FormGroup>
                    <div className={usestyles.root}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                          <Box
                            component="img"
                            sx={{
                              // height: 233,
                              width: 100,
                              maxHeight: { xs: 233, md: 167 },
                              maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="Imagem Aluno."
                            src={BASEIMG+photo}
                          />
                          </Grid>

                            <Grid item xs={8}>
                                <TextField fullWidth label="Nome" type="text" value={name} onChange={ e => setName(e.target.value) } />
                            </Grid>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justifyContent="space-around" item xs={4}>
                                    <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    // id="date-picker-inline"
                                    label="Data de Nascimento"
                                    value={birthDate}
                                    onChange={ (date) => setBirthDate(date) }
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>    

                            <Grid item xs={8}>
                                <TextField fullWidth type="text" label="Nome do Responsável" disabled={disable} value={responsableName} onChange={ e => setResponsableName(e.target.value) } />
                            </Grid>

                            <Grid item xs={4}>
                                <TextField fullWidth type="text" label="Telefone de Contato" disabled={disable} value={phone} onChange={ e => setPhone(e.target.value) } />
                            </Grid>
                            
                            <Grid item xs={8}>
                                <TextField fullWidth type="text" label="Aviso de Emergência" disabled={disable} value={emergencyWarning} onChange={ e => setEmergencyWarning(e.target.value) } />
                            </Grid>

                            <Grid item xs={4}>
                                <TextField fullWidth type="text" label="Telefone para Emergência" disabled={disable} value={phoneEmergency} onChange={ e => setPhoneEmergency(e.target.value) } />
                            </Grid>

                            <Grid item xs={4}>
                                <FormControlLabel label="Restrição Alimentar" control={<Checkbox disabled={disable} onChange={e => setFoodRestriction(!foodRestriction)} />} />
                            </Grid>

                            <Grid item xs={4}>
                                <FormControlLabel label="Autorização Para Uso da Imagem" control={<Checkbox disabled={disable} onChange={ e => setImageAuthorization(true)} /> } /> 
                            </Grid>

                            <Grid item xs={4}>
                                <InputLabel id="demo-mutiple-name-label">Turma</InputLabel>
                                    <Select
                                    className={usestyles.formSelect}
                                    value={classes}
                                    onChange={ e => setClasses(e.target.value)  }
                                    >
                                    {classesList.map((i) => (
                                        <MenuItem key={i._id} value={i._id} > {i.name}  </MenuItem>
                                    ))}
                                </Select>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField fullWidth type="text" label="Descrição da Restrição Alimentar" disabled={disable} value={descriptionFoodRestriction} onChange={ e => setDescriptionFoodRestriction(e.target.value) } />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField fullWidth type="text" label="Autorizados Para Buscar a Criança" disabled={disable} value={authorizedPeople} onChange={ e => setAuthorizedPeople(e.target.value)  } />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField fullWidth type="text" label="Observações Adicionais" disabled={disable} value={additionalNotes} onChange={ e => setAdditionalNotes(e.target.value)  } />
                            </Grid>

                            <Grid item xs={2}>
                                <label>
                                    <input
                                    style={{ display: "none" }}
                                    id="upload-photo"
                                    name="upload-photo"
                                    type="file"
                                    ref={fileField}
                                    onChange={() => setPhotoName(window.document.getElementById("upload-photo").files[0].name) }
                                    />
                                    <Fab
                                    color="secondary"
                                    size="small"
                                    component="span"
                                    aria-label="add"
                                    variant="extended"
                                    > Upload Foto
                                    </Fab>
                                </label>
                            </Grid>

                            <Grid item xs={8}>
                                { photoName}
                            </Grid>

                            <Grid item xs={2}>
                                <Button onClick={handleSubmit} variant="contained" color="primary" disabled={disable}>Editar</Button>
                            </Grid>

                        </Grid>

                    </div> {/* usestyle.root */}
                                      
                </FormGroup>
            
        </Container>
    )
}

export default Page;