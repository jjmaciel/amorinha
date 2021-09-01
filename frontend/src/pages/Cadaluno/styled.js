import styled from 'styled-components';

export const PageArea = styled.div`
    form {
        backround-color: #fff;
        border-radius: 3px;
        padding:10px;
        box-shadow:0px 0px 3px #999;

        .area {
            display:flex;
            align-items:center;
            padding:10px;
            max-width: 1000px;
            background-color:#804a7a;
            

            .area-title {
                width:300px;
                text-align:right;
                padding-right:20px;
                font-weight:bold;
                font-size:14px;
            }

            .area-input {
                flex:1;
                
                input, textarea, select {
                    width:100%;
                    font-size:14px;
                    padding: 10px;
                    border:1px solid #ddd;
                    border-radius:5px;
                    outline:0;
                    transition: all ease .4s;

                    &:focus {
                        border:1px solid #333;
                        color:#333;
                    }

                }

                button {
                    background-color: #0089ff;
                    border: 0;
                    outline: 0;
                    padding: 5px 10px; 
                    border-radius: 4px;
                    color: #fff;
                    font-size: 15px;
                    cursor:pointer;
                }

                &:hover {
                    background-color: #
                }

            }
        }
    }
`;