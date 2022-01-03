import { Bottom } from "./style";
import FooterLogo from "../../assets/img/footerLogo.png";
import Facebook from "../../assets/icons/ic-facebook.svg";
import Twitter from "../../assets/icons/ic-twitter.svg";
import Instagram from "../../assets/icons/ic-instagram.svg";
import Pintrest from "../../assets/icons/ic-pinterset.svg";

const Footer = () => {
  return (
    <Bottom>
      <Bottom.Socials>
        <Bottom.Logo>
          <img src={FooterLogo} alt="logo" width={32} height={39} />
          <Bottom.Heading>Furniking</Bottom.Heading>
        </Bottom.Logo>
        <Bottom.Text>
          Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
        </Bottom.Text>
        <Bottom.Media>
          <img src={Facebook} alt="Facebook icon" width={8} height={16} />
          <img src={Twitter} alt="Facebook icon" width={16} height={13} />
          <img src={Instagram} alt="Facebook icon" width={16} height={16} />
          <img src={Pintrest} alt="Facebook icon" width={13} height={16} />
        </Bottom.Media>
      </Bottom.Socials>
      <Bottom.FooterItems>
        <Bottom.ItemTitle>Help</Bottom.ItemTitle>
        <Bottom.Links>Privacy Policy</Bottom.Links>
        <Bottom.Links>Shipping & Delivery</Bottom.Links>
        <Bottom.Links>Refound Policy</Bottom.Links>
        <Bottom.Links>Truck Your Order</Bottom.Links>
      </Bottom.FooterItems>
      <Bottom.FooterItems>
        <Bottom.ItemTitle>Store</Bottom.ItemTitle>
        <Bottom.Links>Furniture</Bottom.Links>
        <Bottom.Links>Tabble</Bottom.Links>
        <Bottom.Links>Sofa</Bottom.Links>
        <Bottom.Links>Other</Bottom.Links>
      </Bottom.FooterItems>
      <Bottom.FooterItems>
        <Bottom.ItemTitle>Supports</Bottom.ItemTitle>
        <Bottom.Links>Feedback</Bottom.Links>
        <Bottom.Links>Contact us</Bottom.Links>
        <Bottom.Links>Download app</Bottom.Links>
        <Bottom.Links>Terms condition</Bottom.Links>
      </Bottom.FooterItems>
    </Bottom>
  );
};

export default Footer;
