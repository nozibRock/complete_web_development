import logo from "./logo.svg";
import "./App.css";

const singer = { name: "Katy Perry", profession: "Singer" };

const singerStyle = {
  color: "goldenrod",
  textShadow: "1px 0px 1px #ccc"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="music">
          <p style={singerStyle}>Name: {singer.name}</p>
          <span style={{ color: "purple", textShadow: "0px 1px 1px #eee" }}>
            Profession: {singer.profession}{" "}
          </span>
        </div>
      </header>
      <Person></Person>
      <Person></Person>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, repellendus expedita quod quasi ipsum, voluptatum quis blanditiis alias minus autem enim magnam. Veniam ut temporibus odio dignissimos! Libero, reprehenderit ipsum?</p>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person-container">
      <h1>Kapil Dev</h1>
      <p>
        When a prolific batsman comes along from the production hub that is
        India, it isn't particularly surprising. India wouldn't blink if the
        successor to a Tendulkar or a Kohli comes along tomorrow. However, tell
        them that at one point, Test cricket's highest wicket-taker was one of
        their own, and they will give you a blank stare of disbelief. Or perhaps
        ridicule you. Kapildev Ramlal Nikhanj, arguably India's best fast
        bowler, and certainly India's best all-rounder, will always be
        remembered for leading the country to the title that changed Indian
        cricket into phenomenon it is today: the 1983 World Cup triumph. As
        Kapil Dev lifted that chalise of champions, several young cricketers,
        including a frizzy-haired Mumbaikar, watched in awe. Kapil Dev was known
        for his energetic curved run-up and lethal outswingers as a result of
        that open-chested action. With the bat, he was an aggressive
        lower-middle order batsman who could cause carnage with the bat in an
        era before helmets, monster bats, or T20s.
      </p>
    </div>
  );
}

export default App;
