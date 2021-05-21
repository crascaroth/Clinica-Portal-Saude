import styled from "styled-components"

export const ImgWave = styled.div `
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
`

export const MainLogin = styled.div ``

export const MainContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
`
export const DivImg = styled.div `
    background-color: #363635;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    
`

export const Avatar = styled.img `
    width: 100px;
`

export const LoginContainer = styled.div `
        background-color: #e83b4c;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        h3 {
            font-size: 2rem;
            line-height: 1.1;
            font-family: Metropolis,Inter,X-LocaleSpecific,sans-serif;
            color: #d2d2d2;
            font-weight: 700;
            margin: 0 0 .5em;
            text-align: right !important;
            margin-left: 200px;
        }
`

export const Form = styled.div `
    position: absolute;
    left: 38.333%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 8px 12px 1px rgba(29,17,51,.04),0 3px 16px 2px rgba(9,32,77,.12),0 5px 10px -3px rgba(29,17,51,.12);
    margin: 16px;
    padding: 64px;

    h2 {
            font-size: 2.375rem;
            line-height: 1.05;
            /* text-transForm: uppercase; */
            font-family: Metropolis,Inter,X-LocaleSpecific,sans-serif;
            color: #363635;
            font-weight: 700;
            margin: 0 0 .5em;
        }


`

export const InputDiv = styled.div `

        display: grid;
        grid-template-columns: 7% 93%;
        margin: 25px 0;
        padding: 5px 0;
`


export const DivOne = styled.div `
    margin-top: 0;
    `

export const DivTwo = styled.div `
    margin-bottom: 4px;
    `

export const IconeDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    i { 
        color: red;
    }

`
