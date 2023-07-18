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
