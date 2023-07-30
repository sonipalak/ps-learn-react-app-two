import React from 'react';
import { useParams } from 'react-router-dom';

function DetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h2>Details Page</h2>
      <p>Item ID: {id}</p>
      {/* Render other item details here */}
    </div>
  );
}

export default DetailsPage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DetailsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Function to fetch filtered product data from dummyjson.com
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           'https://dummyjson.com/products?_quantity=10&query=category=random("Electronics","Gadgets");price=random(100,1000)'
//         );
//         // If the response is an object, convert it to an array before setting the state
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           setProducts([response.data]);
//         }
//         setLoading(false); // Set loading to false after fetching data
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//         setLoading(false); // Set loading to false even if an error occurs
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Function to handle search input changes
//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   // Filter products based on the search query
//   const filteredProducts = products.filter((product) =>
//     this.product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Filtered Product List</h2>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearchInputChange}
//         placeholder="Search products..."
//       />
//       <ul>
//         {filteredProducts.map((product, index) => (
//           <li key={index}>
//             <strong>Name:</strong> {product.name}
//             <br />
//             <strong>Category:</strong> {product.category}
//             <br />
//             <strong>Price:</strong> ${product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DetailsPage;
