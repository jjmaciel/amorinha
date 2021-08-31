import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #fff;
    height: 60px;
    border-bottom:1px solid #ccc;

    a {
        text-decoration:none;
    }

    .container {
        max-width:1000px;
        margin:auto;
        display:flex;
    }

    .logo {
        flex:1;
        display: inline;
        align-items:center;
    }

    .logo img{
        width:55px;
    }

    nav {
        padding-top:10px;
        padding-bottom:10px;

        ul, li {
            margin:0;
            padding:0;
            list-style:none;
        }

        ul {
            align-items:center;
            height:40px;
            display:flex;
        }

        li {
            margin-left:20px;
            margin-right:20px;

            a, button {
                border:0;
                background:none;
                color:#000;
                font-size:16px;
                text-decoration:none;
                cursor:pointer;
                outline:0;

                &:hover {
                    color: #999;
                }
            }
        }

        
        .dropdown {
            position: relative;
            display: inline-block;
          }
          
          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            padding: 12px 16px;
            z-index: 1;
          }
          
          .dropdown:hover .dropdown-content {
            display: block;
          }
        
    }
`;