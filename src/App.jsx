import Card from "./components/Card";
import { data } from "./constants";

function App() {
  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center">
        {data.map((profile) => (
          <Card key={profile.id} {...profile} />
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-inter text-white text-center text-xs">
        Challenge by{" "}
        <a
          className="text-blue-600"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-blue-600"
          href="https://github.com/IsaiasVillegas"
          target="_blank"
        >
          Isaias Villegas
        </a>
        .
      </div>
    </>
  );
}

export default App;
