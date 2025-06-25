import { useState, useEffect } from 'react';

export default function useProducts() {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const grouped = data.reduce((acc, p) => {
          acc[p.category] = acc[p.category] || [];
          acc[p.category].push(p);
          return acc;
        }, {});
        setProductsByCategory(grouped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return { productsByCategory, loading, error };
}
