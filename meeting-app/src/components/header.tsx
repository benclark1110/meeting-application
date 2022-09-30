import {
    Navbar,
    NavbarBrand,
    NavbarText,
  } from 'reactstrap';

const Header = (props: any) => {

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">Meeting Application</NavbarBrand>
        <NavbarText>Add your case meetings</NavbarText>
      </Navbar>
    </div>
  );
}

export default Header;