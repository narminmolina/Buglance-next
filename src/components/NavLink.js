import Link from 'next/link';
import { cloneElement } from 'react';
import { useRouter } from 'next/router';

const NavLink = ({ href, setSelectedCategory = null, children }) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.asPath === href) {
    className = `${className} active`;
    if (setSelectedCategory) setSelectedCategory();
  }

  return (
    <Link href={href} passHref>
      {cloneElement(children, { className })}
    </Link>
  );
};

export default NavLink;
