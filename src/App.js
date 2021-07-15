import { useEffect, useState } from 'react';
import { Route, Router, BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Main from './route/main';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path='/' component={Main} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
