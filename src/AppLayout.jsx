function AppLayout({ children }) {
  return (
    <main className="bg-slate-300 h-full flex items-center justify-center">
      {children}
    </main>
  );
}

export default AppLayout;
