import { NavLink } from 'react-router-dom';

const Item = ({ page }) => {
  // too many classes so they're joined from a more manageable array
  const className = [
    'cursor-pointer', // pointer
    'bg-blue-300', // default background
    'active:bg-blue-400', // background when active
    'hover:bg-blue-300/75', // background when hover
    'border-[1px] border-solid border-amber-50 rounded-lg', // border
    'text-center w-[100px] pb-[5px]', // layout
    'drop-shadow-lg', // effects
  ].join(' ');

  const activeClassName = 'shadow-lg shadow-cyan-500/50';

  return (
    <NavLink
      to={`/${page.path}`}
      className={({ isActive }) => isActive ? `${className} ${activeClassName}` : className}
    >
      <span className='select-none drop-shadow-md text-amber-50'>
        {window.I18n.t(page.name)}
      </span>
    </NavLink>
  );
};

export default Item;
