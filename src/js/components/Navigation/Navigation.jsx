import { useState } from 'react';
import NavigationBackdrop from './NavigationBackdrop';
import NavigationDrawer from './NavigationDrawer';

const Navigation = () => {
  const [showBackDrop, setShowBackDrop] = useState(true);

  return (
    <div className='flex flex-col h-screen md:h-full'>
      {showBackDrop && <NavigationBackdrop />}
      <NavigationDrawer />
    </div>
  )
};

export default Navigation;
