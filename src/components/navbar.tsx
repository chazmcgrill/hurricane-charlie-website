import nav from '@/content/nav';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavData {
    id: number;
    name: string;
    url: string;
}

const activeNav = { borderBottom: '3px solid #FF2E63' };

const Navbar = () => {
    const { pathname } = useRouter();
    return (
        <nav>
            {nav.map((item: NavData) => (
                <li key={item.id} style={pathname === item.url ? activeNav : undefined}>
                    <Link href={item.url}>{item.name}</Link>
                </li>
            ))}
        </nav>
    );
};

export default Navbar;
