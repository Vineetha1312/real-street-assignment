import './App.css';
import NavBar from './components/Navbar/Navbar';
import MultiStepForm from './forms/MultiStepForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto mt-10 p-4">
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
