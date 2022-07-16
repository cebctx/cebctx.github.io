import { useEffect, useState } from 'react';

import NavBar from './components/nav/NavBar';
import Separator from './components/Separator';
import Home from './pages/Home/Home';

const App = ({ page }) => {
  const [activePage, setActivePage] = useState(Home);
  const [activeParam, setActiveParam] = useState(page);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('p', activeParam);
    window.history.pushState(null, null, url);
  }, [activeParam]);

  const switchPageHandler = ({ page, name }) => {
    setActiveParam(name);
    setActivePage(page);
  };

  const ActivePage = activePage;
  return (
    <div className='flex justify-center min-h-screen bg-gradient-to-b from-blue-300 via-orange-200 to-lime-900'>
      <div className='w-[1000px]'>
        <NavBar
          activeParam={activeParam}
          switchPageHandler={switchPageHandler}
          title={window.I18n.t('chin_evangelical_baptist_church_of_texas')}
        />
        <Separator />
        <main>
          { ActivePage }
        </main>
      </div>
    </div>
  );
};

export default App;
