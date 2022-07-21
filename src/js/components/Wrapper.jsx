import Navigation from './Navigation/Navigation';

/**
 * @param {Object}  props           Properties passed to this component.
 * @param {Array}   props.children  Child elements/components passed to this component.
 * @returns {Wrapper}
 */
const Wrapper = (props) => {
  return (
    // Page container
    <div className='h-full flex flex-col grow'>
      {/* Container for everything else but a few modals */}
      <div className='flex grow'>
        {/* Left navigation and transparent backdrop container */}
        <Navigation />
      </div>
    </div>
  );
};

export default Wrapper;
