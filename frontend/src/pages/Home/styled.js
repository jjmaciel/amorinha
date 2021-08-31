import styled from 'styled-components';

export const PageArea = styled.div`

    display:flex;
    margin-top:20px;
    flex-wrap:wrap;

    .home-image {
        width: 50%;
        flex:1; 
        box-shadow: 10px 10px 74px -14px rgba(0,0,0,0.75);        

        img {
            width: 100%;
    
        }
    }

    .home-text {
        width: 50%;
        display:flex;
        flex:1;
        font-size: 40px;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        color:#fff;
        font-family: 'Dancing Script', cursive;

        &:hover {
            box-shadow: 10px 10px 74px -14px rgba(0,0,0,0.75);
        }

    }

    .text1 {
        background-color:#cc5745;
    }

    .text2 {
        background-color:#5a5aed;
    }

    .text3 {
        background-color:#4dd16a;
    }
    
`;