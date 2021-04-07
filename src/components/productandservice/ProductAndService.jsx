import {Link} from 'react-router-dom'
import { 
    InfoSec, 
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    HighLight,
    Subtitle,
    ImgWrapper,
    Img
} from './ProductAndService.Elements';
import { Container, Button } from '../../globalStyles';
import Product from '../../images/product.svg';
import Service from '../../images/service.svg';
import Technology from '../../images/technology.svg';

const ProductAndService = ({
    primary,
    lightTextDesc, 
    alt,
    start
}) => {
  return (
  <>
           <InfoSec lightBg={true}>
               <Container>
                 <Heading>Product And Service</Heading>
                <InfoRow>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={Product} alt={alt} />
                        </ImgWrapper>
                        <TextWrapper>
                          <HighLight>
                            Our Product
                          </HighLight>
                          <Subtitle lightTextDesc={lightTextDesc}>
                          Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.
                          </Subtitle>
                        </TextWrapper>
                        <Link to='read-more'>
                            <Button big primary={primary}>
                                Read More
                            </Button>
                        </Link>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={Service} alt={alt} />
                        </ImgWrapper>
                        <TextWrapper>
                          <HighLight>
                            Our Service
                          </HighLight>
                          <Subtitle lightTextDesc={lightTextDesc}>
                          DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
                          </Subtitle>
                        </TextWrapper>
                        <Link to='read-more'>
                            <Button big primary={primary}>
                                Read More
                            </Button>
                        </Link>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={Technology} alt={alt} />
                        </ImgWrapper>
                        <TextWrapper>
                          <HighLight>
                            Our Technology
                          </HighLight>
                          <Subtitle lightTextDesc={lightTextDesc}>
                          First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.
                          </Subtitle>
                        </TextWrapper>
                        <Link to='read-more'>
                            <Button big primary={primary}>
                                Read More
                            </Button>
                        </Link>
                    </InfoColumn>
                </InfoRow>
               </Container>
            </InfoSec> 
    </>
  )
}

export default ProductAndService
