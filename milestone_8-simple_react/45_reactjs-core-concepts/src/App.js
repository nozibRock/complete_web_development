import logo from "./logo.svg";
import "./App.css";

const singer = { name: "Katy Perry", profession: "Singer" };

const singerStyle = {
  color: "goldenrod",
  textShadow: "1px 0px 1px #ccc"
};

const indianTeam = [
  "Kapil Dev",
  "Sunil Gavaskar",
  "Kris Srikkanth",
  "Mohinder Amarnath",
  "Sandeep Patil",
  "Madan Lal",
  "Roger Binny",
];
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

      {/* <Person
        name="Kapil Dev"
        profile="When a prolific batsman comes along from the production hub that is
        India, it isn't particularly surprising. India wouldn't blink if the
        successor to a Tendulkar or a Kohli comes along tomorrow. However, tell
        them that at one point, Test cricket's highest wicket-taker was one of
        their own, and they will give you a blank stare of disbelief. Or perhaps
        ridicule you. Kapildev Ramlal Nikhanj, arguably India's best fast
        bowler, and certainly India's best all-rounder, will always be
        remembered for leading the country to the title that changed Indian
        cricket into phenomenon it is today: the 1983 World Cup triumph. As
        Kapil Dev lifted that chalise of champions, several young cricketers,
        including a frizzy-haired Mumbaikar, watched in awe."
      ></Person>
      <Person
        name="Sunil Gavaskar"
        profile="Before Sachin Tendulkar took apart attacks, the original little master dominated in the early seventies and brought them a lot of pride in the next decade and a half. Sunil Manohar Gavaskar, a man synonymous with grit, character, and defiance, brought about a revolution in Test batsmanship - one of extraordinary consistency against some of the most fierce and intimidating bowling attacks of all time."
      ></Person>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        repellendus expedita quod quasi ipsum, voluptatum quis blanditiis alias
        minus autem enim magnam. Veniam ut temporibus odio dignissimos! Libero,
        reprehenderit ipsum?
      </p>
      <Person
        name="Kris Srikkanth"
        profile="Long before Virender Sehwag, India boasted of an naturally aggressive opener who could spoil the party of the opposition in a matter of a few overs. An engineer by profession, Srikkanth graduated from the prestigious College of Engineering, Guindy in Chennai, India."
      ></Person>
      <Person
        name="Mohinder Amarnath"
        profile="Long before India knew of a man called Sourav Ganguly, Mohinder Amarnath owned the title “comeback king”. The career, which began in 1969, lasted 2 eventful decades and saw him achieve the highest of peaks and also sink to the lowest of troughs. Cricket ran in his blood; he is the son of India’s first post Independence captain Lala Amarnath, the brother of former Test cricketer
Surinder Amarnath and also Rajinder Amarnath, a former first class cricketer. He started his career as a medium pace bowler who could bat, but finished as one of the best batsmen produced by India."
      ></Person>
      <Person
        name="Sandeep Patil"
        profile="Born on August 19, 1956 in Mumbai, Sandeep Patil was a destructive right-handed middle-order batsman who represented India, Mumbai and Madhya Pradesh. He coached the Kenya national side, which made history under him in 2003 by qualifying for a semi-final of the World Cup for the first time. He also replaced Dav What more to become the director of the National Cricket Academy in Bangalore before being named the new chief of the BCCI selection committee in 2012."
      ></Person>
      <Person
        name="Madan Lal"
        profile="A top-class all-rounder, Madan Lal, represented India in 39 Tests and 67 ODIs. With a side-on bowling action, he was a medium pacer and a handy batsman lower down the order. He was an important member of the Indian squad that won the 1983 World Cup."
      ></Person>
      <Person
        name="Roger Binny"
        profile="An integral part of the 1983 World Cup winning squad, Roger Michael Humphrey Binny, is a former Indian all-rounder who played 27 Tests and 72 ODIs for India. Not just the World Cup, he was also part of the Indian squad that won the World Championship of Cricket in 1985."
      ></Person> */}

      <Person
        name={indianTeam[0]}
        profile="When a prolific batsman comes along from the production hub that is
        India, it isn't particularly surprising. India wouldn't blink if the
        successor to a Tendulkar or a Kohli comes along tomorrow. However, tell
        them that at one point, Test cricket's highest wicket-taker was one of
        their own, and they will give you a blank stare of disbelief. Or perhaps
        ridicule you. Kapildev Ramlal Nikhanj, arguably India's best fast
        bowler, and certainly India's best all-rounder, will always be
        remembered for leading the country to the title that changed Indian
        cricket into phenomenon it is today: the 1983 World Cup triumph. As
        Kapil Dev lifted that chalise of champions, several young cricketers,
        including a frizzy-haired Mumbaikar, watched in awe."
      ></Person>
      <Person
        name={indianTeam[1]}
        profile="Before Sachin Tendulkar took apart attacks, the original little master dominated in the early seventies and brought them a lot of pride in the next decade and a half. Sunil Manohar Gavaskar, a man synonymous with grit, character, and defiance, brought about a revolution in Test batsmanship - one of extraordinary consistency against some of the most fierce and intimidating bowling attacks of all time."
      ></Person>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        repellendus expedita quod quasi ipsum, voluptatum quis blanditiis alias
        minus autem enim magnam. Veniam ut temporibus odio dignissimos! Libero,
        reprehenderit ipsum?
      </p>
      <Person
        name={indianTeam[2]}
        profile="Long before Virender Sehwag, India boasted of an naturally aggressive opener who could spoil the party of the opposition in a matter of a few overs. An engineer by profession, Srikkanth graduated from the prestigious College of Engineering, Guindy in Chennai, India."
      ></Person>
      <Person
        name={indianTeam[3]}
        profile="Long before India knew of a man called Sourav Ganguly, Mohinder Amarnath owned the title “comeback king”. The career, which began in 1969, lasted 2 eventful decades and saw him achieve the highest of peaks and also sink to the lowest of troughs. Cricket ran in his blood; he is the son of India’s first post Independence captain Lala Amarnath, the brother of former Test cricketer
Surinder Amarnath and also Rajinder Amarnath, a former first class cricketer. He started his career as a medium pace bowler who could bat, but finished as one of the best batsmen produced by India."
      ></Person>
      <Person
        name={indianTeam[4]}
        profile="Born on August 19, 1956 in Mumbai, Sandeep Patil was a destructive right-handed middle-order batsman who represented India, Mumbai and Madhya Pradesh. He coached the Kenya national side, which made history under him in 2003 by qualifying for a semi-final of the World Cup for the first time. He also replaced Dav What more to become the director of the National Cricket Academy in Bangalore before being named the new chief of the BCCI selection committee in 2012."
      ></Person>
      <Person
        name={indianTeam[5]}
        profile="A top-class all-rounder, Madan Lal, represented India in 39 Tests and 67 ODIs. With a side-on bowling action, he was a medium pacer and a handy batsman lower down the order. He was an important member of the Indian squad that won the 1983 World Cup."
      ></Person>
      <Person
        name={indianTeam[6]}
        profile="An integral part of the 1983 World Cup winning squad, Roger Michael Humphrey Binny, is a former Indian all-rounder who played 27 Tests and 72 ODIs for India. Not just the World Cup, he was also part of the Indian squad that won the World Championship of Cricket in 1985."
      ></Person>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person-container">
      <h1>{props.name} </h1>
      <p> {props.profile}</p>
    </div>
  );
}

export default App;
