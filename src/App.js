import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState([]);
  const [page] = useState(0);
  const [size] = useState(20);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`https://srv796999.hstgr.cloud/backend/api/categories?page=${page}&size=${size}`);
        setCategories(response.data.content);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchMenuItems();
  }, [page, size]);

  return (
    <div className="app-container">
      <h1 className="app-title">Menu</h1>
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h2 className="category-title">{category.name}</h2>
          {category.menuItems.length > 0 ? (
            <ul className="menu-list">
              {category.menuItems.map((item) => (
                <li key={item.id} className="menu-item">
                  <img src={"https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE"} alt={item.name} className="menu-image" />
                  <div className="menu-details">
                    <h3 className="menu-name">{item.name}</h3>
                    <p className="menu-description">{item.description}</p>
                    <p className="menu-price">{item.price.toFixed(2)} (MAD)</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-message">No items in this category.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
