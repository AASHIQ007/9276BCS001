import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import DisplayComponent from './DisplayComponent';
import './App.css';

const App = () => {
  const [numberType, setNumberType] = useState('');
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "http://localhost:9876/numbers"
      );
      setExpense(response.data);
    };
    getData();
  }, []);

  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setNumberType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setData(null);
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${numberType}`);
      setData(response.data);
    } catch (err) {
      setError('Error fetching data. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Average Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Number Type (p,f,e,r):
          <input type="text" value={numberType} onChange={handleChange} className="input-field"/>
        </label>
        <button type="submit" className="fetch-button">Fetch Numbers</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {data && <DisplayComponent data={data} />}
    </div>
  );
};

export default App;
