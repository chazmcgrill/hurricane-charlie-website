import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";

interface NavData {
    id: number;
    name: string;
    url: string;
}

const activeNav = { borderBottom: "3px solid #FF2E63" };

const Navbar = () => {
    const { data } = useStaticQuery(graphql`
        query {
            data: navYaml {
                nav {
                    id
                    name
                    url
                }
            }
        }
    `);

    return (
        <nav>
            {data.nav.map((item: NavData) => (
                <li key={item.id}>
                    <Link to={item.url} activeStyle={activeNav} partiallyActive>
                        {item.name}
                    </Link>
                </li>
            ))}
        </nav>
    );
}

export default Navbar;