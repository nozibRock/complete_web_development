import { useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    const [volunteers] = useVolunteers();

    const [searchResult, setSearchResult] = useState([]);

    /* const handleChange = (event) => {
      console.log(event.target.value);
    } */

    /* const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    }; */

    const handleSearchChange2 = event =>{
        const searchText = event.target.value;
        const match = volunteers.filter(v => v.title.toLowerCase().includes(searchText));
        setSearchResult(match);
    }
    
    return (
      <div>
        <h2>Volunteer Activities: {searchResult.length}</h2>
        <div className="input">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange2}
          />
        </div>
        <div className="activity-container">
          {searchResult.map((activity) => (
            <Activity key={activity._id} activity={activity}></Activity>
          ))}
        </div>
      </div>
    );
};

export default Main;