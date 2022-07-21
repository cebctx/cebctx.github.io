const NavigationBackdrop = () => {
  const style = {
    minWidth: '256px',
    boxShadow: 'rgba(0, 0, 0, 0.1) -25px 0px 9px -25px inset',
    marginLeft: '0px',
    transition: 'margin-left 150ms ease-in-out 0s'
  };
  return (
    <div className='flex grow lg:static lg:h-auto fixed left-0 top-o z-50 h-screen md:h-full' style={style}>
      <div className='lg:top-0 lg:sticky flex flex-col overflow-y-auto overscroll-contain h-screen'>

      </div>
    </div>
  )
};

export default NavigationBackdrop;
