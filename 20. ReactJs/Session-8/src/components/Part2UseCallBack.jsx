import React, { useState, useCallback, useMemo } from 'react';
import propTypes from 'prop-types';
const ProductList = React.memo(({ filteredProducts }) => {
  console.log('ProductList rendered');
  return (
    <ul>
      {filteredProducts.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
});
ProductList.displayName = 'ProductList';
ProductList.propTypes={filteredProducts:propTypes.array.isRequired};

const Parent = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Memoize the filter function using useCallback
  const filterProducts = useCallback(
    (term) => products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    ),
    [products] // Dependency: Updates if products change
  );

  // Cache the filtered results using useMemo
  const filteredProducts = useMemo(
    () => filterProducts(searchTerm),
    [filterProducts, searchTerm] // Dependencies: Function and search term
  );

  // Function to add new products
  const addProduct = () => {
    setProducts((prev) => [...prev, { id: prev.length + 1, name: 'Mango' }]);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search product"
      />
      <button onClick={addProduct}>Add Product</button>
      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
};

export default Parent;

/*
### Execution Flow:
1. On initial render:
   - `products` array and `searchTerm` are initialized.
   - `filterProducts` function is memoized using `useCallback`.
   - `filteredProducts` is calculated using `useMemo`.

2. When `searchTerm` changes:
   - `filterProducts` remains the same (stable reference).
   - `useMemo` recalculates `filteredProducts`.

3. When a new product is added:
   - `products` dependency changes, causing `filterProducts` to be re-memoized.
   - `useMemo` recalculates `filteredProducts` with the updated product list.

### Key Points:
- `useCallback` ensures `filterProducts` has a stable reference inside memory conserving space and time unless `products` changes.
- `useMemo` prevents unnecessary recalculations of `filteredProducts`.
- Together, these improve performance and avoid redundant renders.
*/
