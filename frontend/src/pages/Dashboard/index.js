import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory  } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import { PageContainer } from '../../components/MainComponents'
import useAPI from '../../helpers/AmorinhaAPI';
import img_student from './aluno.png';

let timer;

function Page(){

    const api = useAPI();
    const history = useHistory();

    const useQueryString = () => {
        return new URLSearchParams( useLocation().search )
    }

    const query = useQueryString();

    const [students, setStudents] = useState([]);
    const [query_search, setSearch] = useState(query.get('query_search') != null ? query.get('query_search') : '');

    const getStudents = async () => {
        const json = await api.searchStudent({
            sort: 'asc',
            limit: 10,
            offset:0,
            query_search
        });
        setStudents(json.student_array);
    };
    
    useEffect(() => {
        
        if (query_search){
            history.replace({
                search: `?query_search=${query_search}`
            });
        }

        if (timer){
            clearTimeout(timer);
        }

        timer = setTimeout(getStudents, 3000);

    }, [query_search]);


    return(
        <>  
            <SearchArea>
                <PageContainer>
                    <div className="search-box">
                        <form method="GET">
                            <input 
                                type="text" 
                                name="query_search" 
                                value={query_search}
                                placeholder="Qual aluno você procura?"
                                onChange={ e => setSearch(e.target.value) }
                            />
                            <button>Pesquisar</button>
                        </form>

                    </div>
                    <div className="list-student">

                    </div>
                </PageContainer>    
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <div className="container-student">
                        {students.map((i,k) =>
                            <Link key={k} to={`/student/info/${i.id}`} className="list-students">
                                <div className="img_student">
                                    <img src={img_student} alt="aluno" />
                                </div>
                                <div className="data-student">
                                    <span>{i.name}</span><br/>
                                    <span>{i.responsableName}</span><br/>
                                    <span>{i.phone}</span><br/>
                                </div>
                            </Link>
                        )}
                    </div>
                </PageArea>
            </PageContainer>
        </>
    )
}

export default Page;