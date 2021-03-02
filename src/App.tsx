import React, { FunctionComponent } from 'react';

import MainTemplate from 'shared/components/templates/MainTemplate';
import HomePage from 'components/HomePage';

const App: FunctionComponent = () => {
  return (
    <MainTemplate>
      <HomePage />
    </MainTemplate>
  );
};

export default App;