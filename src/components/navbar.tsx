import nav from '@/content/nav';
import Link from 'next/link';
import React from 'react';

interface NavData {
    id: number;
    name: string;
    url: string;
}

// const activeNav = { borderBottom: '3px solid #FF2E63' };

const Navbar = () => {
    return (
        <nav>
            {nav.map((item: NavData) => (
                <li key={item.id}>
                    <Link href={item.url}>{item.name}</Link>
                </li>
            ))}
        </nav>
    );
};

export default Navbar;
