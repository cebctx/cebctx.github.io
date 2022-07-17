import Home from '../../pages/Home/Home';
import Item from './Item';

const Menu = ({ className }) => {
  const pages = [
    {
      path: '/',
      name: 'home'
    },
  ];

  return (
    <nav className={className}>
      <ul className='flex'>
        {pages.map((page) => {
          return (
            <li key={`${page.path}-${page.name}`}>
              <Item page={page} />
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Menu;
