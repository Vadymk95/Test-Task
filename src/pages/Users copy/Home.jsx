import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { v4 as uuidv4 } from 'uuid';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  const removeUser = (id) => {
    dispatch({ type: 'REMOVE_USER' });
  };

  return (
    <div className="home">
      <h1 className="home__title">Home Page</h1>
      <div className="home__card-container">
        <div className="home__card-wrap">
          {data.users.length > 0 ? (
            <div className="home__card-users">
              {data.users.map((user) => (
                <Card key={uuidv4()} user={user} removeUser={removeUser} />
              ))}
            </div>
          ) : (
            <div className="home__card-empty">
              <h2 className="home__list-title">The List is Empty!</h2>
            </div>
          )}
        </div>
        <div className="home__button-container">
          <button className="button home__button">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
