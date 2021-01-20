import { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidenavContextProvider = ({ children, ...props }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  /**
   *
   * @param {MouseEvent} event
   */
  const toggleSidebar = (event) => {
    event.stopPropagation();
    setSidebarOpen((isOpen) => !isOpen);
  };
  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidenavContextProvider;
