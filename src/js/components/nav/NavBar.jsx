import Menu from './Menu';

const NavBar = ({ title }) => {
  return (
    <header className='flex flex-col items-center'>
      <div className='church-logo-container'>
        <img src='/i/logo_500x500.png' className='church-logo w-44 my-5 pointer-events-none' alt={title} />
      </div>
      <Menu className='my-2' />
    </header>
  )
};

export default NavBar;
