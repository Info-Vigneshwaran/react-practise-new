import React from 'react';
import './style.css';
import Home from './components/Home';
import Counter from './components/Counter';
import Posts from './components/Posts';
import UseMemofn from './components/UseMemofn';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  useHistory,
  Link,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="counter">Counter</Link> |{' '}
        <Link to="posts">useEffect(Dynamic API Call)</Link> |{' '}
        <Link to="slow_fn">useMemo</Link> |{' '}
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="posts" element={<Posts />} />
        <Route path="slow_fn" element={<UseMemofn />} />
      </Routes>
    </Router>
  );
}
