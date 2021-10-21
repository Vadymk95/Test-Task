import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import './Card.css';
import { onRemove } from '../../store/usersReducer';

const Card = (props) => {
  const router = useHistory();
  const dispatch = useDispatch();

  const removeUser = () => {
    dispatch(onRemove(props.user.id));
  };

  return (
    <div className="card">
      <div className="card__content">
        <p>
          User name:{' '}
          <span className="card__user-params">{props.user.name}</span>
        </p>
        <p>
          Age: <span className="card__user-params">{props.user.age}</span>
        </p>
        <p>
          Job: <span className="card__user-params">{props.user.job}</span>
        </p>
        <p>
          Nationality:{' '}
          <span className="card__user-params">{props.user.nationality}</span>
        </p>
        <p>
          Description:{' '}
          <span className="card__user-params">{props.user.description}</span>
        </p>
      </div>
      <div className="card__buttons-block">
        <button
          onClick={() => router.push(`/users/${props.user.id}`)}
          className="button card__button card__button--edit"
        >
          Edit
        </button>
        <button
          onClick={removeUser}
          className="button card__button card__button--remove"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
