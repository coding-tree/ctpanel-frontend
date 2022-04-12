import React, { FunctionComponent, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import MainTemplate from 'shared/components/templates/MainTemplate';
import HomePage from 'pages/HomePage';

const App: FunctionComponent = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <MainTemplate>
          <Suspense fallback={<h3>Loading Details...</h3>}>
            <HomePage />
          </Suspense>
        </MainTemplate>
      </Suspense>
    </RecoilRoot>
  );
};

export default App;