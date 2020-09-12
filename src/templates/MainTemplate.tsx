import React, { FunctionComponent } from 'react';

type MainTemplateProps = {
    children: JSX.Element[] | JSX.Element
};

const MainTemplate: FunctionComponent<MainTemplateProps> = ({ children }) => (
    <>
        <nav>
            Navbar
        </nav>
        <main>
            {children}
        </main>
    </>
);

export default MainTemplate;