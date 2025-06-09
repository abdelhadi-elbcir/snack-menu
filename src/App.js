import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    // Fetch menu items from an API or define them statically
    const fetchMenuItems = async () => {
        axios.get('https://localhost:8081/menu')
    }

    fetchMenuItems();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Menu</h1>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
