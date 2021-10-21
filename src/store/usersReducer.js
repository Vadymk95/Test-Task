const initialState = {
  users: [
    {
      name: 'John',
      age: '27',
      job: 'Project Manager',
      nationality: 'Ukrainain',
      id: 1,
      description: 'some text...',
    },
    {
      name: 'John',
      age: '32',
      job: 'Project Manager',
      nationality: 'Ukrainain',
      id: 2,
      description: 'some text...1',
    },
    {
      name: 'Albert',
      age: '28',
      job: 'Backend Developer',
      nationality: 'Russian',
      id: 3,
      description: 'some text...2',
    },
    {
      name: 'Timur',
      age: '18',
      job: 'Sales Manager',
      nationality: 'Moldavian',
      id: 4,
      description: 'some text...3',
    },
    {
      name: 'Jak',
      age: '30',
      job: 'Frontend Developer',
      nationality: 'Polish',
      id: 5,
      description: 'some text...4',
    },
    {
      name: 'Paul',
      age: '26',
      job: 'Human Resources',
      nationality: 'American',
      id: 6,
      description: 'some text...5',
    },
    {
      name: 'Hanna',
      age: '20',
      job: 'Web Designer',
      nationality: 'Ukrainain',
      id: 7,
      description: 'some text...6',
    },
    {
      name: 'Andrey',
      age: '37',
      job: 'Unity Developer',
      nationality: 'Russian',
      id: 8,
      description: 'some text...7',
    },
    {
      name: 'Tatiana',
      age: '35',
      job: 'Head of Human Resources',
      nationality: 'Italian',
      id: 9,
      description: 'some text...9',
    },
    {
      name: 'Vadym',
      age: '29',
      job: 'Backend Developer',
      nationality: 'German',
      id: 10,
      description: 'some text...10',
    },
    {
      name: 'Denis',
      age: '41',
      job: 'Business Analytics',
      nationality: 'Canadian',
      id: 11,
      description: 'some text...11',
    },
    {
      name: 'Tamara',
      age: '22',
      job: 'Project Manager',
      nationality: 'Ukrainain',
      id: 12,
      description: 'some text...12',
    },
    {
      name: 'Roman',
      age: '19',
      job: 'Devops',
      nationality: 'Czech',
      id: 13,
      description: 'some text...13',
    },
    {
      name: 'Du Hwoang',
      age: '24',
      job: 'Software Engineer',
      nationality: 'Chinese',
      id: 14,
      description: 'some text...14',
    },
    {
      name: 'Michael',
      age: '33',
      job: 'Frontend Developer',
      nationality: 'American',
      id: 15,
      description: 'some text...15',
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'REMOVE_USER':
      const userId = action.payload;
      return {
        ...state,
        users: state.users.filter((user) => user.id !== userId),
      };
    case 'EDIT_USER':
      const { user } = action.payload;
      const { users } = state;
      const itemIndex = users.findIndex(
        (user) => user.id.toString() === action.payload.id.toString()
      );
      const changedUser = [
        ...users.slice(0, itemIndex),
        user,
        ...users.slice(itemIndex + 1),
      ];
      return {
        ...state,
        users: changedUser,
      };
    default:
      return state;
  }
};

export const onEdit = (user, id) => ({
  type: 'EDIT_USER',
  payload: { user, id },
});

export const onRemove = (id) => ({ type: 'REMOVE_USER', payload: id });

export const onAdd = (user) => ({ type: 'ADD_USER', payload: user });
