import styled from "styled-components";


export const InfoSec = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#fff' : '#F6F6F6')};

@media screen and (max-width:768px) {
padding: 0;
}
`

export const InfoRow = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:space-evenly;
`

export const InfoColumn = styled.div`
margin-bottom:15px;
display:flex;
align-items:flex-start;
flex-direction:column;

@media screen and (max-width:768px) {
    max-width:100%;
    flex-basis:100%;
    display: flex;
    justify-content: center;

    &:not(:last-child){
    margin-bottom:50px;
}
}
`

export const Img = styled.img`
max-width: 100%;
max-height: 500px;
`

export const Heading = styled.h3`
color:#000;
line-height:2;
`

export const Subtitle = styled.p`
color:#000;
line-height:1.5;
`

export const CopyRight = styled.p`
color:#fff;
text-align:center;
background: #EE4248;
width:100%;
height:50px;
line-height:50px;
`