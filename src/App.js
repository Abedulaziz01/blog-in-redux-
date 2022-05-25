import logo from './logo.svg';
import './App.css';
import PostList from './features/PostList';
import AddForm from './features/AddForm';

function App() {
  return (
    <main className='APP'>
      <AddForm/>
       <PostList/>
    </main>
    
  );
}

export default App;
