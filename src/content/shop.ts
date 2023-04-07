export interface ShopItemData {
    id: number;
    url: string;
    title: string;
    price: number;
    desc: string;
    soldOut: boolean;
    shopUrl: string;
}

const shop: ShopItemData[] = [
    {
        id: 1,
        url: 'shop01.jpg',
        title: 'Mushroom Lumberjack',
        price: 9.95,
        desc: 'monochrome screenprint',
        soldOut: false,
        shopUrl: 'mushroomjack',
    },
    {
        id: 2,
        url: 'shop02.jpg',
        title: 'Patterned Beetle',
        price: 22.5,
        desc: 'five colour screenprint',
        soldOut: false,
        shopUrl: 'patterned-beetle',
    },
    {
        id: 3,
        url: 'shop03.jpg',
        title: 'Desert Smoker',
        price: 3.95,
        desc: 'glossy giclee full colour',
        soldOut: false,
        shopUrl: 'desert-smoker',
    },
    {
        id: 4,
        url: 'shop04.jpg',
        title: 'Robot Workshop',
        price: 12.95,
        desc: 'art stock giclee',
        soldOut: false,
        shopUrl: 'robot-workshop',
    },
    {
        id: 5,
        url: 'shop05.jpg',
        title: 'Patterned Butterfly',
        price: 22.5,
        desc: 'five colour screenprint',
        soldOut: false,
        shopUrl: 'patterned-butterfly',
    },
    {
        id: 6,
        url: 'shop06.jpg',
        title: 'Desert Portrait',
        price: 3.95,
        desc: 'glossy giclee full colour',
        soldOut: true,
        shopUrl: 'desert-portrait',
    },
];

export default shop;
