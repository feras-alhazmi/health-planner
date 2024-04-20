// components/Profile/layout.tsx
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Static Header Placeholder */}
      <header className="bg-white p-4 shadow-md">
        <h1>App Name</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      {/* Static Footer Placeholder */}
      <footer className="bg-white p-4 shadow-up">
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default Layout;
