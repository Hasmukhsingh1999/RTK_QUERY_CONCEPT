import { useState } from "react";
import "./App.css";

import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

function App() {
  const { isLoading, data } = useGetPostsQuery("");
  const [newPost] = useNewPostMutation();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const post = {
      title,
      body,
      id: Math.random() * 10000,
    };
    newPost(post);
    setBody("");
    setTitle("");
  };
  return (
    <div>
      <h1>My App</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="title" placeholder="title" />
        <input type="body" name="body" placeholder="body" />
        <button>Add</button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((item, id) => <li key={id}>{item.title}</li>)
      )}
    </div>
  );
}

export default App;
