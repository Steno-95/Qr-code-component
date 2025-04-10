function AppLayout({ children }) {
  return (
    <div className="bg-slate-300 h-11/12 flex items-center justify-center">
      {children}
    </div>
  );
}

export default AppLayout;
