const DesktopSidebar = () => {
  return (
    <div
      className="
            
            hidden
            lg:fixed 

            lg:left
            lg:z-40 
            lg:w-20 
            xl:px-6 
            lg:overflow-y-auto 
            lg:bg-white 
            lg:border-[1px] 
            lg:pb-4 
            lg:flex 
            lg:flex-col 
            justify-between "
    >
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col items-center space-y-1">
          <li>Hassain</li>
          <li>Ahmed</li>
          <li>Ali</li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
