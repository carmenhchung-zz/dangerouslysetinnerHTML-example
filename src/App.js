import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [form, setForm] = useState(
    {name: '', twitterHandle: '', comment: ''}
  );

  const [forum, setForum] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const items = await axios.get(`${process.env.REACT_APP_API_LOCATION}/items`);
      setForum(items.data)
    }

    fetchData();
  }, [])

  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = await axios.post(`${process.env.REACT_APP_API_LOCATION}/items`, form);
    setForum([...forum, item.data]);
    setForm({name: '', twitterHandle: '', comment: ''});
  }

  const handleDelete = async (e, id) => {
    e.preventDefault();
    await axios.delete(`${process.env.REACT_APP_API_LOCATION}/items/${id}`);
    const newForum = forum.filter(item => item._id !== id);
    setForum(newForum);
  }

  return (
    <div className="App">
      <h1>ReactConf AU 2020</h1>
      <ul>
        {
          forum && forum.length && forum.map(item =>
            <li key={item.comment}>
              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <p>{item.name}</p>
                <a href={item.twitterHandle} target="_blank">Twitter</a>
                <p dangerouslySetInnerHTML={{__html: item.comment}}></p>
                <button onClick={(e) => handleDelete(e, item._id)}>Delete me</button>
              </div>
            </li>
          )
        }
      </ul>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleFormChange}
          />
          <label htmlFor="twitterHandle">Twitter Handle</label>
          <input
            id="twitter"
            type="text"
            name="twitterHandle"
            value={form.twitterHandle}
            onChange={handleFormChange}
          />
          <label htmlFor="comment">Comment</label>
          <input
            id="comment"
            type="text"
            name="comment"
            value={form.comment}
            onChange={handleFormChange}
          />
          <button id="submit-btn" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default App;
