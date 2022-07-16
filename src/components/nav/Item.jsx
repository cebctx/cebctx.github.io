const Item = ({ isActive, onClick, page }) => {
  const onItemClick = () => {
    onClick(page);
  };

  // too many classes so they're joined from a more manageable array
  const itemContainerCls = [
    isActive ? 'shadow-lg shadow-cyan-500/50' : '',
    'cursor-pointer', // pointer
    'bg-blue-300', // default background
    'active:bg-blue-400', // background when active
    'hover:bg-blue-300/75', // background when hover
    'border-[1px] border-solid border-amber-50 rounded-lg', // border
    'text-center w-[100px] pb-[5px]', // layout
    'drop-shadow-lg', // effects
  ].join(' ');

  return (
    <div className={itemContainerCls} onClick={onItemClick}>
      <span className='select-none drop-shadow-md text-amber-50'>
        { window.I18n.t(page.name) }
      </span>
    </div>
  );
};

export default Item;
