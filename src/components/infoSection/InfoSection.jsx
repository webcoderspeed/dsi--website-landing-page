import {Link} from 'react-router-dom'
import { 
    InfoSec, 
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    HighLight,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.Elements';
import { Container, Button } from '../../globalStyles';

const IntroSection = ({
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description, 
    headline, 
    highlight,
    lightText, 
    topLine,
    alt,
    img,
    start
}) => {
  return (
     <>
           <InfoSec lightBg={lightBg}>
               <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}
                        <HighLight>{highlight}</HighLight>
                        </Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to='read-more'>
                            <Button big fontBig primary={primary}>
                                {buttonLabel}
                            </Button>
                        </Link>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
               </Container>
            </InfoSec> 
        </>
  )
}

export default IntroSection
