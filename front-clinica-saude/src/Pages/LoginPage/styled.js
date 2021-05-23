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
    margin: 1px;
    padding: 40px 60px;

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
        margin: 8px 0;
`

export const DivOne = styled.div `
    position: relative;
    height: 48px;
    margin-bottom: 1.5rem;

    label {
        position: absolute;
        left: 1rem;
        top: 1rem;
        padding: 0 .25rem;
        background: #fff;
        color: #999;
        transition: all 0.3s ease;
        z-index: 1;
    }

    input:focus, input:valid {
        border-radius: 15px;
        transition: all 0.3s ease;
        border: 1px solid #999;
    }

    input:focus ~ label,
    input:valid ~ label {
        transform: translateY(-25px);
        font-size: 15px;
        background-color: #fff;
        color: #999;
    }

`

export const DivTwo = styled.div `
    position: relative;
    height: 48px;

label {
    position: absolute;
    left: 1rem;
    top: 1rem;
    padding: 0 .25rem;
    background: #fff;
    color: #999;
    transition: all 0.3s ease;
    z-index: 1;
}

input:focus, input:valid {
    border-radius: 15px;
    transition: all 0.3s ease;
    border: 1px solid #999;
}

input:focus ~ label,
input:valid ~ label {
    transform: translateY(-25px);
    font-size: 15px;
    background-color: #fff;
    color: #999;
}
`

export const IconeDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    i { 
        color: red;
    }

`
export const Input = styled.input `
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    top: 0;
    left: 0;
    border: 1px solid #999;    
    border-radius: 5px;
    outline: none;
    background: none;
    font-size: 1rem;
    font-family: Arial;
    color: #000;
    z-index: 1;
`
export const Label = styled.label``

export const Link = styled.a`
    display: block;
    text-align: left;
    text-decoration: none;
    color: #999;
    font-size: 0.9rem;
    transition: .3s;

    :hover {
        color: #e83b4c;
    }
`

export const BtnLogin = styled.input `
    display: block;
    width: 100%;
    height: 33.333px;
    border-radius: 25px;
    margin: 1rem 0;
    font-size: 0.9rem;
    outline: none;
    border: none;
    background: #363635;
    color: #fff;
    cursor: pointer;
    transition: .5s;
`
