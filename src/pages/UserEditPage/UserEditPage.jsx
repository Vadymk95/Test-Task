import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { onEdit } from '../../store/usersReducer';
import './UserEditPage.css';

const UserEditPage = () => {
  const dispatch = useDispatch();

  const router = useHistory();
  const params = useParams();
  const data = useSelector((state) => state.users);
  const user = data.users.find((el) => el.id.toString() === params.id);

  const [userName, setUserName] = useState(user.name);
  const [userJob, setUserJob] = useState(user.job);
  const [userAge, setUserAge] = useState(user.age);
  const [userNatio, setUserNatio] = useState(user.nationality);
  const [userDescript, setUserDescript] = useState(user.description);

  const editUser = (e) => {
    e.preventDefault();
    const user = {
      name: userName,
      job: userJob,
      age: userAge,
      nationality: userNatio,
      description: userDescript,
      id: params.id,
    };

    dispatch(onEdit(user, params.id));
    router.push('/users');
  };

  return (
    <div className="user-page">
      <button
        type="button"
        onClick={() => router.push('/users')}
        className="button button__hover"
      >
        Back
      </button>
      <h2 className="user-page__title">User page with ID - {params.id}</h2>
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
                defaultValue={user.name}
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
                defaultValue={user.job}
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
                defaultValue={user.age}
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
                defaultValue={user.nationality}
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
                defaultValue={user.description}
                id="descriptField"
              />
            </fieldset>
          </div>
        </div>
        <button
          type="submit"
          onClick={editUser}
          className="button button__hover"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UserEditPage;
