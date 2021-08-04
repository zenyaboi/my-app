import Todo from './components/Todo'
import Modal from './components/Modal'
import Backdrop from './components/Backdrop'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <br/>
      <Todo text='Finish Bloodborne' />
      <br/>
      <Todo text='5 months' />
      <br/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
