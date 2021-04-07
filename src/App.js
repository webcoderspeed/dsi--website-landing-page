import  Navbar  from './components/navbar/Navbar';
import { BrowserRouter, Switch} from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Section from './components/section/Section';

function App() {
  return (
   <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Switch>
      <Section />
      {/* Product And Service Section*/}
      {/* Footer */}
      </Switch>
   </BrowserRouter>
  );
}

export default App;
