import { Container, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "../common/LanguageSwitcher";

function Header() {
  const { t } = useTranslation();

  return (
    <Navbar expand="lg">
      <Container
        className="d-flex align-items-center justify-content-between"
      >
        <Navbar.Brand>
          {/* TODO: FAI UN LOGO CARINO CON CANVA MAGARI */}
          {t("nav.title")}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-lg-flex mx-5 justify-content-lg-between flex-grow-1 "
        >
          <NavLink to="/" className='nav-link-with-icon'>
            {t("nav.home")}
          </NavLink>
          <NavLink to={"/projects"}>{t("nav.projects")}</NavLink>
          <NavLink to="/about-me">{t("nav.about")}</NavLink>
          <NavLink to={"/contacts"}>{t("nav.contacts")}</NavLink>
        </Navbar.Collapse>
        <LanguageSwitcher />
      </Container>
    </Navbar>
  );
}

export default Header;
