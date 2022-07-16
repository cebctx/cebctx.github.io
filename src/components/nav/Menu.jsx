import Home from '../../pages/Home/Home';
import Item from './Item';

const Menu = ({ activeParam, switchPageHandler }) => {
  const pages = [
    {
      page: Home,
      name: 'home'
    }
  ];

  return (
    <ul>
      {pages.map((page) => {
        const isActive = page.name === activeParam;
        return (
          <li key={page.name}>
            <Item
              isActive={isActive}
              onClick={switchPageHandler}
              page={page}
            />
          </li>
        )
      })}
    </ul>
  );
}

export default Menu;
