import React, { FC } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface INavItemProps {
  to: string;
  title: string;
  active: boolean;
}

const NavItem: FC<INavItemProps> = props => {
  const { to, title, active } = props;

  return (
    <Nav.Link href={to} className={`nav-link ${active ? 'active' : ''}`}>
      {title}
    </Nav.Link>
  );
};

export default NavItem;