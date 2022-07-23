import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Index from './routes/index';
import ReadBooks from './routes/readBooks';

export default function App() {
  return (
    <>
    <Router>
      <header>
        <h1 id='title'>Library</h1>
        <nav>
          <ul>
            <li><Link className='Link' to='/'>HOME</Link></li>
            <li><Link className='Link' to='/read'>READ</Link></li>
          </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/read' element={<ReadBooks />} />
      </Routes>
    </Router>
    </>
  );
}