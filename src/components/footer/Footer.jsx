import { Link } from 'react-router-dom';
import { 
    InfoSec, 
    InfoRow,
    InfoColumn,
    Img,
    Heading,
    Subtitle,
    CopyRight
} from './Footer.Elements';
import { Container } from '../../globalStyles';
import Logo from '../../images/logo.svg';
import FooterGroup from '../../images/footergroup.svg';

const Footer = ({
   primary,
    lightTextDesc, 
    alt,
    start
}) => {
  return (
    <>
           <InfoSec lightBg={true}>
               <Container>
                <InfoRow>
                    <InfoColumn>
                            <Img src={Logo} alt={alt} />
                        <Heading>
                        PT Dwidasa Samsara Indonesia
                        </Heading>
                        <Subtitle>
                        Ruko Jalur Sutera 29A No. 53 <br/>
                        Alam Sutera Serpong, Tangerang 15323
                        </Subtitle>
                    </InfoColumn>
                    <InfoColumn>
                      <Heading>
                        Contact
                      </Heading>
                      <Subtitle>
                        Phone : +62.21.5314.1135 <br/>
                        Fax : +62.21.5314.1135 <br/>
                        Email : community@dwidasa.com
                      </Subtitle>
                    </InfoColumn>
                    <InfoColumn>
                      <Img src={FooterGroup} alt={alt} />
                    </InfoColumn>
                </InfoRow>
               </Container>
               <CopyRight>
                  Copyright © 2015 - <Link to='/' style={{
                    color:'#fff',
                    fontWeight:'bold',
                    textDecoration:'none'
                  }}>
                    Dwidasa Samsara Indonesia
                  </Link>
               </CopyRight>
            </InfoSec> 
    </>
  )
}

export default Footer
