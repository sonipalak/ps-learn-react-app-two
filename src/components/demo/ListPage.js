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
            <Link to={`/details/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
