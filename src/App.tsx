import React, { FunctionComponent } from 'react';

import MainTemplate from 'templates/MainTemplate';
import HomePage from 'pages/HomePage';

const App: FunctionComponent = () => {
  return (
    <MainTemplate>
      <HomePage />
    </MainTemplate>
  );
};

export default App;