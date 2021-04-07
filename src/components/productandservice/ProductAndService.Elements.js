import styled from "styled-components";


export const InfoSec = styled.div`
color: #fff;
padding: 100px 0;
background: ${({lightBg}) => (lightBg ? '#fff' : '#F6F6F6')};

@media screen and (max-width:768px) {
padding: 50px 0 25px;
}
`

export const InfoRow = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:space-evenly;
align-items:center;
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
    align-items:center;

    &:not(:last-child){
    margin-bottom:50px;
}
}
`

export const TextWrapper = styled.div`
max-width: 350px;
height:180px;

@media screen and (max-width: 768px) {
    text-align:center;
}
`
export const Heading = styled.h1`
margin-bottom: 50px;
font-size: 40px;
line-height: 1.1;
color: ${({lightText}) => (lightText ? '#1F2E35' : '#1c2237')};
text-align:center;

@media screen and (max-width: 768px) {
    font-size:32px;
}
`
export const HighLight = styled.h1`
font-size: 30px;
line-height: 1.8;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#EE4248')};

@media screen and (max-width: 768px) {
    font-size:32px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({lightTextDesc}) => (lightTextDesc ? '#30444E' : '#1c2237')};

@media screen and (max-width: 768px) {
    font-size:16px;
    margin:1rem;
}
`

export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end') };
`

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`