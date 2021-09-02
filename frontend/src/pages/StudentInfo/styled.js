import styled from 'styled-components';

export const PageArea = styled.div`
        
    .container-student {
        margin-top:20px;
        margin-left:20px;

        .img-students {

            img {
                width: 80px;
            }
        }

        .primary-info{
            color: #6f0582;
            font-weight: bold;
        }

        .others-info {
            color: #c805eb;
        }


        .list-students {
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

                .left-text {
                    margin-right: 20px;
                    border:1px solid red;
                }

                .right-text {
                    flex:1;
                }
            }
                
        }

        .complement-data {
            margin-left: 7px;
            padding: 5px;
        }
        
    }

`;