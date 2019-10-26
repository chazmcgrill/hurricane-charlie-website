export default [
    { id: 0, name: 'gallery', url: '/gallery' },
    { id: 1, name: 'contact', url: '/contact' },
    { id: 2, name: 'shop', url: '/shop' },
]

export interface NavData {
    id: number;
    name: string;
    url: string;
}