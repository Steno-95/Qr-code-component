import AppLayout from "./AppLayout";
import Footer from "./Footer";
import Header from "./Header";
import Card from "./Components/Card";

function App() {
  return (
    <div className="bg-slate-300 w-full h-dvh flex flex-col">
      <Header />
      <AppLayout>
        <Card />
      </AppLayout>
      <Footer />
    </div>
  );
}

export default App;
