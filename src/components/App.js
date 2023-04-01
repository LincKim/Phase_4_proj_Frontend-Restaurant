import Restaurant from './addrestaurant';
import '../App.css';
import Myrestaurantlist from './myrestaurants';
import Review from './addreview';


function App() {
  return (
    <div className="App">
      <Myrestaurantlist />
     <Restaurant />
     <Review />
    </div>
  );
}

export default App;
