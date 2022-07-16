import Menu from './Menu';

const NavBar = ({ activeParam, switchPageHandler, title }) => {
  return (
    <header className='flex pb-3 justify-between items-center mt-5 h-[50px] w-full'>
      <h1 className='cebc-title text-2xl select-none subpixel-antialiased'>{ title }</h1>
      <Menu
        activeParam={activeParam}
        switchPageHandler={switchPageHandler}
      />
    </header>
  )
};

export default NavBar;
