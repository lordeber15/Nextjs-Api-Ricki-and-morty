import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const Anchor = styled('a')({});

export const NextLinkComposed = forwardRef((props, ref) => {
  const {
    to, linkAs: as, href, replace, scroll, shallow, prefetch, locale, ...other
  } = props;

  return (
    <NextLink
      passHref
      {...{
        as,
        href,
        prefetch,
        replace,
        scroll,
        shallow,
        locale,
      }}
    >
      <Anchor ref={ref} {...other} />
    </NextLink>
  );
});

NextLinkComposed.displayName = 'NextLinkComposed';

const Link = forwardRef((props, ref) => {
  const {
    activeClassName,
    as: linkAs,
    className: classNameProps,
    href,
    noLinkStyle,
    role, // Link don't have roles.
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  const isExternal = typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

  if (isExternal) {
    if (noLinkStyle) {
      return <Anchor className={className} href={href} ref={ref} {...other} />;
    }

    return <MuiLink className={className} href={href} ref={ref} {...other} />;
  }

  if (noLinkStyle) {
    return <NextLinkComposed className={className} ref={ref} to={href} {...other} />;
  }

  return (
    <MuiLink
      component={NextLinkComposed}
      linkAs={linkAs}
      className={className}
      ref={ref}
      to={href}
      {...other}
    />
  );
});

/* eslint-disable react/forbid-prop-types */
Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  href: PropTypes.any,
  noLinkStyle: PropTypes.bool,
  role: PropTypes.string,
};

/* eslint-enable */

Link.defaultProps = {
  activeClassName: 'active',
  noLinkStyle: false,
  className: null,
  href: null,
  role: null,
  as: null,
};

export default Link;
