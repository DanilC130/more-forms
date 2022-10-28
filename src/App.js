import UserForm from './components/UserForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserForm firstName={""} lastName={""} email={""} password={""} confirmPassword={""} />

    </div>
  );
}

export default App;
