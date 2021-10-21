import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { onAdd } from '../../store/usersReducer';

const UserAddPage = () => {
  const [userName, setUserName] = useState('');
  const [userJob, setUserJob] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userNatio, setUserNatio] = useState('');
  const [userDescript, setUserDescript] = useState('');

  const router = useHistory();
  const dispatch = useDispatch();

  const addUser = e => {
    e.preventDefault();
    const user = {
      name: userName,
      job: userJob,
      age: userAge,
      nationality: userNatio,
      description: userDescript,
      id: uuidv4(),
    };

    dispatch(onAdd(user));
    router.push('/users');
  };

  return (
    <div className="user-page">
      <button
        onClick={() => router.push('/users')}
        className="button button__hover"
      >
        Back
      </button>
      <h2 className="user-page__title">USER ADD PAGE</h2>
      <form className="user-page__form">
        <div className="user-page__container">
          <div className="user-page__row">
            <fieldset className="user-page__col">
              <label className="block" htmlFor="nameField">
                Name{' '}
              </label>
              <input
                onChange={(e) => setUserName(e.currentTarget.value)}
                placeholder="write text..."
                className="user-page__input"
                id="nameField"
              />
            </fieldset>
            <fieldset className="user-page__col">
              <label className="block" htmlFor="jobField">
                Job{' '}
              </label>
              <input
                onChange={(e) => setUserJob(e.currentTarget.value)}
                placeholder="write text..."
                className="user-page__input"
                type="text"
                id="jobField"
              />
            </fieldset>
          </div>
          <div className="user-page__row">
            <fieldset className="user-page__col">
              <label className="block" htmlFor="ageField">
                Age{' '}
              </label>
              <input
                onChange={(e) => setUserAge(e.currentTarget.value)}
                placeholder="write text..."
                className="user-page__input"
                type="text"
                id="ageField"
              />
            </fieldset>
            <fieldset className="user-page__col">
              <label className="block" htmlFor="natioField">
                Nationality{' '}
              </label>
              <input
                onChange={(e) => setUserNatio(e.currentTarget.value)}
                placeholder="write text..."
                className="user-page__input"
                type="text"
                id="natioField"
              />
            </fieldset>
          </div>
          <div className="user-page__row">
            <fieldset className="user-page__col">
              <label className="block" htmlFor="descriptField">
                Comment{' '}
              </label>
              <textarea
                onChange={(e) => setUserDescript(e.currentTarget.value)}
                placeholder="write text..."
                className="user-page__input"
                type="text"
                id="descriptField"
              />
            </fieldset>
          </div>
        </div>
      </form>
      <button onClick={addUser} className="button button__hover">
        Add User
      </button>
    </div>
  );
};

export default UserAddPage;
