import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import ReactifluxLogo from '../assets/logo.svg';

export const Header = styled.header`
  display: flex;
  padding: 24px 32px;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
`;

export const Logo = styled(Link)`
  display: inline-block;
  width: 59px;
  height: 52px;
  background: url(${ReactifluxLogo});
  text-indent: -9999px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding-bottom: 4px;
  margin-right: 40px;
  &:hover {
    border-bottom: 2px solid #dd1d64;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const Title = styled.h1`
  color: #02d8ff;
  height: 200px;
  font-size: 200px;
  letter-spacing: -13px;
  line-height: 200px;
  font-family: 'Space Mono', monospace;
  position: relative;
`;

export const Subtitle = styled.span`
  position: absolute;
  color: #dd1d64;
  font-size: 36px;
  font-family: 'Poppins', sans-serif;
  right: 100px;
  top: -45px;
  letter-spacing: 0px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: 32px;
  line-height: 1.5;
  color: #52244f;
  letter-spacing: -1px;
`;

export const Button = styled(Link)`
  display: inline-block;
  height: 72px;
  width: 320px;
  margin-right: 32px;
  border: 3px solid;
  border-radius: 100px;
  border-color: #dd1d64;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  line-height: 66px;
  color: ${props => props.primary ? '#ffffff' : '#dd1d64'};
  background-color: ${props => props.primary ? '#dd1d64' : '#ffffff'};
  &:hover {
    color: ${props => props.primary ? '#ffffff' : '#ffffff'};
    background-color: ${props => props.primary ? '#ba1853' : '#dd1d64'};
  }
`;

const MovedLink = styled.a`
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  position: relative;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
  &:first-child {
    margin-right: 32px;
  }
`;

export const IconLink = ({ to, title, src, alt }) =>
  <MovedLink href={to} title={title}>
    <img src={src} alt={alt}/>
  </MovedLink>

export const Footer = styled.footer`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-bottom: 60px;
  max-width: 1192px;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  color: #52244f;
  line-height: 19px;
  margin-bottom: 6px;
`;
export const Credits = styled.p`
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 0;
  color: #52244f;
  font-family: 'Space Mono', monospace;
`;

export const SocialLinks = styled.div`
  display: inline-flex;
  align-items: center;
`;