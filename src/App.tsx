import axios from 'axios';
import { useState } from 'react';
import './App.css';

type GITHUBResponses = {
  name: string;
  bio: string;
  avatar_url: string;
}



function App() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("Aguardando...");
  const [bio, setBio] = useState("Aguardando...");
  const [avatarURL, setAvatarURL] = useState("Aguardando...");

  const handleSearch = () => {
    axios.get<GITHUBResponses>(`https://api.github.com/users/${search}`)
    .then((res) => {
      setName(res.data.name);
      setBio(res.data.bio);
      setAvatarURL(res.data.avatar_url);
    });
  };





  return (
    <div className="container-app">
      <div className="container">
        <header className='header-top'>
          <ul>
            <li>Search GitHub</li>
          </ul>
        </header>

        <main>
          <div className="form">
            <h1>Buscar Perfil no GitHub</h1>
            <input 
              type="text" 
              placeholder="Digite o usuario" 
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>

          <div className="content">
            <div>
              <img src={avatarURL} alt="perfil" />
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
