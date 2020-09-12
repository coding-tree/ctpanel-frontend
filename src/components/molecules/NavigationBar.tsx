import React, { FunctionComponent } from 'react';

const NavigationBar: FunctionComponent = () => (
    <section>
        <header>
            <h1>
                Coding Tree Panel
            </h1>
        </header>
        <nav>
           <ul>
                <li>
                    <a>
                        Strona główna
                    </a>
                </li>
                <li>
                    <a>
                        Harmonogram
                    </a>
                </li>
                <li>
                    <a>
                        Baza tematów
                    </a>
                </li>
                <li>
                    <a>
                        Historia
                    </a>
                </li>
                <li>
                    <a>
                        Konto
                    </a>
                </li>
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