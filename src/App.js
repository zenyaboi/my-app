import Todo from './components/Todo'

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
    </div>
  );
}

export default App;
