import Home from '../../pages/Home/Home';
import Item from './Item';

const Menu = () => {
  const pages = [
    {
      path: '/',
      name: 'home'
    },
  ];

  return (
    <ul>
      {pages.map((page) => {
        return (
          <li key={`${page.path}-${page.name}`}>
            <Item page={page} />
          </li>
        )
      })}
    </ul>
  );
}

export default Menu;
