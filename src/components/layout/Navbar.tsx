import Logo from "../Logo";
import NavMenu from "../NavMenu";
import Container from "../ui/Container";

const Navbar = () => {
  return (
    <div className="bg-white py-1.5">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <NavMenu />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
