import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState(
    {user: '', twitter: '', comment: ''}
  );

  const [forum, setForum] = useState([
    {user: 'Carmen', twitter: 'https://www.twitter.com/carmenhchung', comment: 'stretch stretch', id: 1},
    {user: 'Sachi', twitter: 'https://www.twitter.com/sachidog', comment: 'woof woof', id: 2}
  ]);

  useEffect(() => {
    const item = window.localStorage.getItem('forum');
    if (item) {
      setForum(JSON.parse(item))
    } else {
      window.localStorage.setItem('forum', JSON.stringify(forum))
    }
  }, [])

  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setForum([...forum, {...form, id: forum.length + 1}])
    setForm({user: '', twitter: '', comment: ''})
    window.localStorage.setItem('forum', JSON.stringify([...forum, {...form, id: forum.length + 1}]))
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    const newForum = forum.filter(item => item.id !== id);
    setForum(newForum)
    window.localStorage.setItem('forum', JSON.stringify(newForum))
  }

  return (
    <div className="App">
      <h1>ReactConf AU 2020</h1>
      <ul>
        {
          forum && forum.length && forum.map(item =>
            <li key={item.comment}>
              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <p>{item.user}</p>
                <a href={item.twitter} target="_blank">Twitter</a>
                <p dangerouslySetInnerHTML={{__html: `${item.comment}`}}></p>
                <button onClick={(e) => handleDelete(e, item.id)}>Delete me</button>
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
            name="user"
            value={form.user}
            onChange={handleFormChange}
          />
          <label htmlFor="twitter">Twitter Handle</label>
          <input
            id="twitter"
            type="text"
            name="twitter"
            value={form.twitter}
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
