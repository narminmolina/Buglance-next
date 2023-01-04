import Link from 'next/link';
import { Menu as ReactMenu, MenuItem, SubMenu } from '@szhsin/react-menu';

const Menu = ({ buttonLabel, list }) => {
  return (
    <ReactMenu className="react-menu" menuButton={({ open }) => <button className={`react-menu-button ${open ? 'opened' : ''}`}>{buttonLabel}</button>}>
      {list.map(({ label, value, sub }) =>
        sub.active && sub.list.length !== 0 ? (
          <SubMenu label={label} key={label}>
            {sub.list.map(({ label: sub_label, value: sub_value }) => (
              <MenuItem key={sub_label}>
                <Link href={sub_value} passHref>
                  <a title={sub_label}>{sub_label}</a>
                </Link>
              </MenuItem>
            ))}
          </SubMenu>
        ) : (
          <MenuItem key={label}>
            <Link href={value} passHref>
              <a title={label}>{label}</a>
            </Link>
          </MenuItem>
        )
      )}
    </ReactMenu>
  );
};

export default Menu;
