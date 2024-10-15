import { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  return <div className="spinner">Loading...</div>;
};

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {data ? (
        <div></div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default DataFetchingComponent;
