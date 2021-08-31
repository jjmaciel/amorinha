import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color:#ddd;
    border-bottom:1px solid #ccc;
    padding:20px 0;

    .search-box {
        background-color: #832791;
        padding:20px 15px;
        border-radius:5px;
        box-shadow:1px 1px 0.3px rgba(0,0,0,0.2);
        display:flex;
    

        form {
            flex:1;
            display:flex;

            input {
                flex:1;
                height: 40px;
                border:0;
                border-radius:5px;
                outline:0;
                font-size:15px;
                color:#000;
                margin-right:20px;
                padding:0 10px;
            }

            button {
                cursor:pointer;
            }
        }
    }
`;

export const PageArea = styled.div`
    

    .container-student {
        display:flex;
        flex-wrap:wrap;
        margin-top:20px;

        .list-students {
            width: 33%;
            display:flex;
            color: #000;
            align-items:center;
            text-decoration:none;
            margin-bottom:10px;
            transition:all ease .4s;
            
            &:hover{
                border:1px solid #cc67db;
                border-radius:5px;
                box-shadow:2px 2px 0.3px rgba(0,0,0,0.2);
            }
            
            img {
                width: 80px;
            }

            .data-student {
                margin-left: 7px;
                padding: 5px;
            }
                
        }
        
    }

`;