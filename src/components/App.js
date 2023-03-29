import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListAllRestaurants from './ListAllRestaurants';

function App() {
  return (
    <BrowserRouter>
      <ListAllRestaurants />
    </BrowserRouter>
  );
}

export default App;
