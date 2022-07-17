import { NavLink } from 'react-router-dom';

const Item = ({ page }) => {
  // too many classes so they're joined from a more manageable array
  const className = [
    'block', // display
    'cursor-pointer', // pointer
    'bg-transparent', // default background
    'active:bg-blue-400', // background when active
    'border-b-solid border-b-2 border-b-blue-300 rounded', // border
    'text-center', // layout
    'py-2 px-3'
  ].join(' ');

  const activeClassName = 'shadow-lg shadow-cyan-500/50';

  return (
    <NavLink
      to={`${page.path}`}
      className={({ isActive }) => isActive ? `${className} ${activeClassName}` : className}
    >
      <span className='select-none text-amber-100 font-bold'>
        {window.I18n.t(page.name)}
      </span>
    </NavLink>
  );
};

export default Item;
