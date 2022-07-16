import NavBar from './nav/NavBar';
import Separator from './Separator';

const Wrapper = ({ children }) => {
  return (
    <div className='flex justify-center min-h-screen bg-gradient-to-b from-blue-300 via-orange-200 to-lime-900'>
      <div className='w-[1000px]'>
        <NavBar title={window.I18n.t('chin_evangelical_baptist_church_of_texas')} />
        <Separator />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Wrapper;