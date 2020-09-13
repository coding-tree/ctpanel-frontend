import React, { FunctionComponent } from 'react';

interface NavbarElement {
    icon: null,
    link: string,
    linkText: string
};

const navbarElements: Array<NavbarElement> = [
    {    
        icon: null,
        link: "string",
        linkText: "Strona główna"
    },
    {    
        icon: null,
        link: "string",
        linkText: "Harmonogram"
    },
    {    
        icon: null,
        link: "string",
        linkText: "Baza tematów"
    },
    {    
        icon: null,
        link: "string",
        linkText: "Historia"
    },
    {    
        icon: null,
        link: "string",
        linkText: "Konto"
    }
];

const NavigationBar: FunctionComponent = () => (
    <section>
        <header>
            <h1>
                Coding Tree Panel
            </h1>
        </header>
        <nav>
           <ul>
                {
                    navbarElements.map(({icon, link, linkText}) => (
                        <li>
                            <i>

                            </i>
                            <a>
                                {linkText}
                            </a>
                        </li>
                    ))
                }
           </ul>
        </nav>
        <footer>
            <p>
                Copyright © Coding Tree | 2020
            </p>
        </footer>
    </section>
);

export default NavigationBar;