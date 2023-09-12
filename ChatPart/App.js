import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;
