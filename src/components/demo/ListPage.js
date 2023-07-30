import React from 'react';
import { Link } from 'react-router-dom';

function ListPage() {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return (
    <div>
      <h2>List Page</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/list/details/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;



// import React, { useState, useEffect } from 'react';

// function ListPage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     fetch('https://dummyjson.com/products/')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   const handleCategoryChange = (event) => {
//     const category = event.target.value;
//     setSelectedCategory(category);

//     if (category) {
//       const filtered = products.filter((product) => product.category === category);
//       setFilteredProducts(filtered);
//     } else {
//       setFilteredProducts(products);
//     }
//   };

//   return (
//     <div>
//       <h2>Product List</h2>
//       <select value={selectedCategory} onChange={handleCategoryChange}>
//         <option value="">All Categories</option>
//         <option value="smartphones">Smartphones</option>
//         <option value="laptops">Laptops</option>
//         <option value="accessories">Accessories</option>
//       </select>

//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListPage;



// import React from 'react';
// import DetailsPage from './DetailsPage';

// const App = () => {
//   return (
//     <div>
//       <h1>My React App</h1>
//       <DetailsPage />
//     </div>
//   );
// };

// export default App;