import NavMenuItem from "./NavMenuItem";

const NavMenu = () => {
  return (
    <div className="h-full">
      <ul className="flex items-center h-full">
        <NavMenuItem href="/" label="Home" />
        <NavMenuItem href="/services" label="Services" />
        <NavMenuItem href="/services" label="Services" />
        <NavMenuItem href="/services" label="Services" />
        <NavMenuItem href="/services" label="Services" />
        <NavMenuItem href="/services" label="Services" />
        <NavMenuItem href="/services" label="Services" />
        <NavMenuItem href="/services" label="Services" />
        <NavMenuItem href="/services" label="Services" />
      </ul>
    </div>
  );
};

export default NavMenu;
