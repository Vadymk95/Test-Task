import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';
import News from '../pages/News/News.jsx';
import Users from '../pages/Users/Users.jsx';
import UserEditPage from '../pages/UserEditPage/UserEditPage.jsx';
import UserAddPage from '../pages/UserAddPage/UserAddPage.jsx';

export const routes = [
  { path: '/home', component: Home, exact: true },
  { path: '/about', component: About, exact: true },
  { path: '/news', component: News, exact: true },
  { path: '/users', component: Users, exact: true },
  { path: '/users/:id', component: UserEditPage, exact: true },
  { path: '/add', component: UserAddPage, exact: true },
];
