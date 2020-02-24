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
        <ul className="forum">
          <li className="form__item">
            <div className="form__item-profile">
              <img src="./carmen.jpg" alt="Carmen Chung" className="form__item-profile-picture" />
              <a href="https://twitter.com/carmenhchung?lang=en" target="_blank" className="form__item-profile-name">Carmen</a>
            </div>
            <div className="form__item-comment">
              <p>
                "Loved talking about XSS attacks at the conference. Thanks for having me, ReactConf AU!"
              </p>
            </div>
          </li>
          <li className="form__item">
            <div className="form__item-profile">
              <img src="./sachi.jpg" alt="Sachi Dog" className="form__item-profile-picture" />
              <a href="https://twitter.com/carmenhchung?lang=en" target="_blank" className="form__item-profile-name">Sachi</a>
            </div>
            <div className="form__item-comment">
              <p>
                "Where was my invite?"
              </p>
            </div>
          </li>
          {
            forum && forum.length && forum.map(item =>
              <li className="form__item" key={item.comment}>
                <div className="form__item-profile">
                  <img src="./anon.png" alt="Anon" className="form__item-profile-picture" />
                  <a href={item.twitterHandle} target="_blank" className="form__item-profile-name">{item.name}</a>
                </div>
                <div className="form__item-comment">
                  <p dangerouslySetInnerHTML={{__html: item.comment}}></p>
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
                className="comment-form__input"
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
