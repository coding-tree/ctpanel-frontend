import React, { FunctionComponent } from 'react';

import NavigationBar from 'shared/components/molecules/NavigationBar';

type MainTemplateProps = {
    children: JSX.Element[] | JSX.Element;
};

const MainTemplate: FunctionComponent<MainTemplateProps> = ({ children }) => (
    <>
        <NavigationBar />
        <main>
            {children}
        </main>
    </>
);

export default MainTemplate;