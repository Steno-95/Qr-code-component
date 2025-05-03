import AppLayout from "./ui/AppLayout";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Card from "./Components/Card";

function App() {
  return (
    <div className="bg-slate-300 w-full h-screen flex flex-col">
      <Header />
      <AppLayout>
        <Card />
      </AppLayout>
      <Footer />
    </div>
  );
}

export default App;
