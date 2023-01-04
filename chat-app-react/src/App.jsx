import { useRef } from "react";
import "./App.css";

import { FirebaseApp, initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { SignInMethod } from "firebase/auth";

firebase.initializeApp({
  // config
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="header">
        <h1>Header goes here</h1>
      </header>

      <section>
        <h1>Section goes here</h1>

        {user ? <Chatroom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

function ChatRoom() {
  const dummy = useRef;
  const messagesRef = firestore.collection("messages"); // reference a firestore collection
  const query = messagesRef.orderBy("createAt").limit(25); // query docus in a collection

  const [messages] = useCollectionData(query, { idField: "id" }); // listen to data with a hook
  // renders in realtime with the latest data

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Say something cool"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />

        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = ui === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          alt="/"
        />
      </div>
    </>
  );
}

export default App;
