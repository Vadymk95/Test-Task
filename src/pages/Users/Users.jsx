import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { v4 as uuidv4 } from 'uuid';
import MySelect from '../../components/UI/Select/MySelect';
import './Users.css';

const Users = () => {
  const data = useSelector((state) => state.users);

  const [selectedSort, setSelectedSort] = useState('');

  const [partOfElems, setPartOfElems] = useState(3);

  const slice = data.users.slice(0, partOfElems);

  const showMore = () => {
    setPartOfElems(partOfElems + partOfElems);
  };

  const sortUsers = (sort) => {
    setSelectedSort(sort);
    data.users.sort((a, b) => a[sort].localeCompare(b[sort]));
  };

  return (
    <div className="users-page">
      <h1 className="users-page__title">Users Page</h1>
      <div className="users-page__card-container">
        <div className="users-page__card-wrap">
          {data.users.length > 0 ? (
            <>
              <div className="users-page__sort-block">
                <MySelect
                  value={selectedSort}
                  onChange={sortUsers}
                  defaultValue="Sorting by..."
                  options={[
                    { value: 'name', name: 'Name' },
                    { value: 'nationality', name: 'Nationality' },
                  ]}
                />
              </div>

              <div className="users-page__card-users">
                {slice.map((user) => (
                  <Card key={uuidv4()} user={user} />
                ))}
              </div>
              <div className="users-page__button-container">
                <button
                  onClick={showMore}
                  className="button users-page__button"
                >
                  Show More
                </button>
              </div>
            </>
          ) : (
            <div className="users-page__card-empty">
              <h2 className="users-page__list-title">The List is Empty!</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
