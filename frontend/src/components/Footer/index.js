import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinkWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Partners</FooterLink>
              <FooterLink to="/">Events</FooterLink>
              <FooterLink to="/register">Register</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Strategic Partners</FooterLinkTitle>
              <FooterLink to="/">Strategic</FooterLink>
              <FooterLink to="/">Strategic</FooterLink>
              <FooterLink to="/">Strategic</FooterLink>
              <FooterLink to="/">Strategic</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Media Partners</FooterLinkTitle>
              <FooterLink to="/">Media</FooterLink>
              <FooterLink to="/">Media</FooterLink>
              <FooterLink to="/">Media</FooterLink>
              <FooterLink to="/">Media</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>General Queries</FooterLinkTitle>
              <FooterLink to="/">Dinda 0812 3456 7879</FooterLink>
              <FooterLinkTitle>General Queries</FooterLinkTitle>
              <FooterLink to="/">Dinda 0812 3456 7879</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to="/">CENS-UI 2020</SocialLogo> */}
            <WebsiteRights>CENS-UI © 2020 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
