import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 10px;
    background-color: #136713;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    width: auto;
    height: 50px;
`

export const SearchInput = styled.input`
    border: 0px;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    background-color: #FFF;
    outline: none;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    padding-left: 50px;
    transition: all ease .3s;
    cursor: pointer;
    font-size: 15px;
    &:focus{
        cursor: text;
    }

`