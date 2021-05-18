import Profile from './Profile/Profile.js'
import './style.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function App() {
  const alertName = (myname) => {
    alert(`Hello I am ${myname}`);
  };
  let profile = {
    Name: 'Mohamed Fares Larouchi',
    /*img:'https://holocaustmusic.ort.org/typo3conf/ext/ne_hm_t3template/Resources/Public/Images/loader.gif', */
    img: 'http://cdn.shopify.com/s/files/1/1057/8088/products/instagram-logo-animation_grande.gif?v=1484764300',
    bio: 'My name is Mohamed Fares Larouchi I am a full-strack Web Application Developer and Software Developer, I live in tunisia . I have a baccalaureate degree with a major in economics and management from the Private Institute, Al-Amal, two headquarters.I am currently studying for a second year, majoring in language, literature and English civilization at the Faculty of Human and Social Sciences in Tunis.My main focus and my drive for life is web development',
    profession: 'Full-stack web developer',
  }

  let desc='If You Like This Content Send Me E-mail : larouchifares.07@gmail.com'
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Blog</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Academic Profile</Nav.Link>
        <NavDropdown title="Contact" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Contact1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Contact2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Contact3</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Social Media</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    <Profile profile={profile} alertName={alertName} desc={desc} >
      <p className='copyright'> © 2021 Copyright </p>
    </Profile>
    </>
  );
}
export default App;