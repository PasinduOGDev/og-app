import './App.css';
import Button from './Components/Button';
import Main from './Components/Main';

const user = {
  name: 'Pramuditha',
  city: 'Horana',
  position: 'Frontend Dev'
}

function App() {
  return (
    <>
      <div>
        <h1>Pasindu Madhuwantha</h1>
      </div>
      <Main name='Ashan' city='Moratuwa' position='Frontend Developer' />
      <Main name={user.name} city={user.city} position={user.position} />
      <Button />
    </>
  );
}

export default App;