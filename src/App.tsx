import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscer from "./components/Oscer";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "John", last: "Ma" },
    { first: "Jack", last: "Richer" },
  ];
  return (
    <div className="App">
      <Status status="error" />
      <Heading>Placeholder text</Heading>
      <Oscer>
        <Heading>Oscer goes to Leonardo Dicpario!</Heading>
      </Oscer>
      <Greet name="Ezeiel" isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log("Button click", event, id);
        }}
      />
    </div>
  );
}

export default App;
