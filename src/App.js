import './App.css';
import Main from './Components/Main';

function App() {
  return (
    <>
      <div>
        <h1>Pasindu Madhuwantha</h1>
      </div>
      <Main name='Ashan' city='Moratuwa' position='Frontend Developer'>
        <h5>Pasindu OG Dev</h5>
        <p>Full Stack Developer</p>
      </Main>
      <Main name='Pasindu' city='Matugama' position='Web Developer' />
      <Main name='Hirusha' city='Mawanella' position='QA and Testing' />
    </>
  );
}

export default App;