import styled from 'styled-components';

export const Title = styled.Text`
    font-size: ${props => props.fontSize};
    font-weight: 500;
    color: ${props => props.color};
    text-align:${props => props.textAlign};
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
background-color:  ${props => props.backgroundColor};
width:500px;
height:75px;
align-items:center;
flex-direction:row;
padding-left:10px;
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
border-bottom-width:1px;
padding-left:10px;
`;
export const ContainerHeaderTitle= styled.View`
flex:${props => props.flex};
`;
export const ContainerTitle= styled.View`
flex:${props => props.flex};

`;

export const ContainerLoading = styled.View`
flex:1;
background-color: #F9F2EC;
align-items:center
justify-content:center
`;