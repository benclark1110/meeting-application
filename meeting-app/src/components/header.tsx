import {
    Navbar,
    NavbarBrand,
    NavbarText,
  } from 'reactstrap';

const Header = (props: any) => {

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarText>Simple Text</NavbarText>
      </Navbar>
    </div>
  );
}

export default Header;