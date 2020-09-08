import React, { FunctionComponent } from 'react';

type MainTemplateProps = {
    children: JSX.Element[] | JSX.Element
};

const MainTemplate: FunctionComponent<MainTemplateProps> = ({ children }) => (
    <div>
        <div>
            Navbar
        </div>
        {children}
    </div>
);

export default MainTemplate;