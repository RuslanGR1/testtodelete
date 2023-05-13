import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get('http://localhost:3001')
      console.log(response.data);
      setPosts(response.data)
    }
    getPosts()
  }, [])

  return (
    <div className="App">
      fdfdfd
    </div>
  );
}

export default App;
