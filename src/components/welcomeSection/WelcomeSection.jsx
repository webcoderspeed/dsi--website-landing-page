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
} from './WelcomeSection.Element'
import { Container } from '../../globalStyles';


const WelcomeSection = ({
  lightBg,
  imgStart,
  start,
  img,
  alt,
  lightText,
  headline,
  highlight,
  lightTextDesc,
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
                        <Heading lightText={lightText}>{headline}
                        <HighLight>{highlight}</HighLight>
                        </Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>
                            <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span style={{color:'#EE4248'}}>DSI</span>’s distinct front-end based application concept.</p>
                        </Subtitle>
                        <Subtitle lightTextDesc={lightTextDesc}>
                          Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently.
                        </Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
               </Container>
            </InfoSec> 
        </>
  )
}

export default WelcomeSection
