import Menu from './Menu';

const NavBar = ({ title }) => {
  return (
    <header className='flex pb-3 justify-between items-center mt-5 h-[50px] w-full'>
      <h1 className='cebc-title text-2xl select-none subpixel-antialiased'>{ title }</h1>
      <Menu />
    </header>
  )
};

export default NavBar;
