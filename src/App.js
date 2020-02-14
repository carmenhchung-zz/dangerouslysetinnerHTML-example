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
      <header className="toolbar">
        <img alt="ReactConf" src="./logo.svg" className="toolbar--logo" />
        <ul className="toolbar--nav">
          <li className="toolbar--nav-item">FORUM</li>
        </ul>
      </header>
      <div class="container">
        <img alt="ReactConf" src="./logo--on-white.svg" className="logo" />
        <ul>
          {
            forum && forum.length && forum.map(item =>
              <li key={item.comment}>
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                  <p>{item.name}</p>
                  <a href={item.twitterHandle} target="_blank" rel="noopener noreferrer">Twitter</a>
                  <p dangerouslySetInnerHTML={{__html: item.comment}}></p>
                  <button onClick={(e) => handleDelete(e, item._id)}>Delete me</button>
                </div>
              </li>
            )
          }
        </ul>
        <div className="comment-form">
          <h2 className="comment-form__heading">Comment:</h2>
          <form className="comment-form__form" onSubmit={handleSubmit}>
            <div className="comment-form__field">
              <label htmlFor="name" className="comment-form__label">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                className="comment-form__input"
                value={form.name}
                onChange={handleFormChange}
              />
            </div>
            <div className="comment-form__field">
              <label htmlFor="twitterHandle" className="comment-form__label">Twitter Handle:</label>
              <input
                id="twitter"
                type="text"
                name="twitterHandle"
                className="comment-form__input"
                value={form.twitterHandle}
                onChange={handleFormChange}
              />
            </div>
            <div className="comment-form__field">
              <label htmlFor="comment" className="comment-form__label">Comment:</label>
              <textarea
                id="comment"
                name="comment"
                className="comment-form__input comment-form__input--textarea"
                value={form.comment}
                onChange={handleFormChange}
              ></textarea>
            </div>
            <button id="submit-btn" className="comment-form__button" type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
