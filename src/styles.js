import styled from 'styled-components';

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: #F9F2EC;
    text-align:center
`;
export const TitleItem = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: black;
    
`;
export const Input = styled.TextInput`
    font-size: 18px;
    color: black;
    border-width:1px;
    width:250px;
    border-radius:10px;
    padding-top:10px
`;
export const Header = styled.View`
background-color: #98b7CC;
width:500px;
height:75px;
`;
export const Container = styled.View`
flex:1;
background-color: #F9F2EC;
`;
export const ContainerList = styled.View`
flex-direction:row;
`;
export const ContainerItem = styled.View`
background-color: #F9F2EC;
flex-direction:column;
width:500px;
height:100px;
border-bottom-width:1px
`;