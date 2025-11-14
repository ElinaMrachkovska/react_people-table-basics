import React from 'react';
import cn from 'classnames';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { pathname, hash } = useLocation();

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              cn('navbar-item', {
                'has-background-grey-lighter': isActive || pathname === '/' || hash === '#/',
              })
            }
          >
            Home
          </NavLink>

          <Link
            className={cn('navbar-item', {
              'has-background-grey-lighter': pathname.startsWith('/people'),
            })}
            to="/people"
          >
            People
          </Link>
        </div>
      </div>
    </nav>
  );
};
