import React, { FunctionComponent } from 'react';

interface NavbarElement {
    icon: string,
    link: string,
    linkText: string
};

const navbarElements: Array<NavbarElement> = [
    {    
        icon: "fa-home",
        link: "string",
        linkText: "Strona główna"
    },
    {    
        icon: "fa-clock",
        link: "string",
        linkText: "Harmonogram"
    },
    {    
        icon: "fa-database",
        link: "string",
        linkText: "Baza tematów"
    },
    {    
        icon: "fa-calendar-alt",
        link: "string",
        linkText: "Historia"
    },
    {    
        icon: "fa-user-circle",
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
                            <i className={`fas ${icon}`}></i>
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