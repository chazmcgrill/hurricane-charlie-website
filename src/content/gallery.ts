export interface GalleryItemData {
    id: number;
    name: string;
    src: string;
    // isLarge: boolean;
    shop: boolean;
    desc: string;
    modalImage: string;
}

const gallery: GalleryItemData[] = [
    {
        id: 0,
        name: 'choose life',
        src: 'thumbs-022.jpg',
        shop: false,
        desc: 'The result of working in an office for too long. Made using ink, brush and pigment ink pens.',
        modalImage: 'modal-000.jpg',
    },
    {
        id: 1,
        name: 'desert eyes',
        src: 'thumbs-002.jpg',
        shop: false,
        desc: 'Part of my desert tryptich illustration. Pen and ink drawings coloured using mixed media and finished on Photoshop.',
        modalImage: 'modal-001.jpg',
    },
    {
        id: 2,
        name: 'bardo pond',
        src: 'thumbs-003.jpg',
        shop: false,
        desc: 'Gig poster for american space rock band Bardo Pond. Created for Room237 promotions using pen and ink, coloured using Photoshop.',
        modalImage: 'modal-002.jpg',
    },
    {
        id: 3,
        name: 'patterned butterfly',
        src: 'thumbs-015.jpg',
        shop: true,
        desc: 'Butterfly illustration created using pen and ink, coloured on illustrator. Screenprints available to buy 5 colours on heavy duty paper.',
        modalImage: 'modal-007.jpg',
    },
    {
        id: 4,
        name: 'angled pike',
        src: 'thumbs-004.jpg',
        shop: false,
        desc: 'An angular pike drawn for Wharf Chambers gig Man Forever. Pen and ink coloured using Photoshop.',
        modalImage: 'modal-003.jpg',
    },
    {
        id: 5,
        name: 'mission of burma',
        src: 'thumbs-005.jpg',
        shop: false,
        desc: 'Gig poster for legendary post punk band Mission Burma gig. created for Room237 and Brudenell Social Club. Created using pen and ink and coloured on Photoshop and Illustrator.',
        modalImage: 'modal-004.jpg',
    },
    {
        id: 6,
        name: 'mushroomjack',
        src: 'thumbs-021.jpg',
        shop: true,
        desc: 'Mushroom lumberjack detailed illustration. I used pigment pens, a quill, a brush and platinum carbon ink, on heavy duty art paper. This is a available to buy in screenprint form.',
        modalImage: 'modal-005.jpg',
    },
    {
        id: 7,
        name: 'folläkzoid',
        src: 'thumbs-007.jpg',
        shop: false,
        desc: 'Gig poster for Chilean space rock band Föllakzoid produced for Third Eye and Karma promotions. Created using pen and ink, coloured pencil and Photoshop.',
        modalImage: 'modal-006.jpg',
    },
    {
        id: 8,
        name: 'angler fish',
        src: 'thumbs-009.jpg',
        shop: false,
        desc: 'Computer illustrated picture of an deep sea Angler Fish. Created using Adobe Illustrator and Photoshop.',
        modalImage: 'modal-008.jpg',
    },
    {
        id: 9,
        name: 'patterned bug',
        src: 'thumbs-010.jpg',
        shop: true,
        desc: 'Beetle illustration created using pen and ink, coloured on illustrator. Screenprints available to buy 5 colours on heavy duty paper.',
        modalImage: 'modal-009.jpg',
    },
    {
        id: 10,
        name: 'you mug',
        src: 'thumbs-011.jpg',
        shop: false,
        desc: 'Comedy mug illustration computer drawn. This was made using Adobe Illustrator and Photoshop.',
        modalImage: 'modal-010.jpg',
    },
    {
        id: 11,
        name: 'mutant bmx',
        src: 'thumbs-012.jpg',
        shop: false,
        desc: 'A crazy hand drawn illustration of a mutant riding a BMX. Created using water colour and ink',
        modalImage: 'modal-011.jpg',
    },
    {
        id: 12,
        name: 'collapse',
        src: 'thumbs-018.jpg',
        shop: false,
        desc: 'Hand drawn illustration of head collapsing together in a circle with varying degrees of torment. Created using pen and ink',
        modalImage: 'modal-017.jpg',
    },
    {
        id: 13,
        name: 'nf fly',
        src: 'thumbs-013.jpg',
        shop: false,
        desc: 'Debut gig poster for Leeds based gig promoters Northern Flowerhouse. Hand drawn illustration texture and colour done with Photoshop.',
        modalImage: 'modal-012.jpg',
    },
    {
        id: 14,
        name: 'desert smoker',
        src: 'thumbs-014.jpg',
        shop: true,
        desc: 'Part of my desert tryptich illustration. Pen and ink drawings coloured using mixed media and finished on Photoshop.',
        modalImage: 'modal-013.jpg',
    },
    {
        id: 15,
        name: 'leaf insect',
        src: 'thumbs-001.jpg',
        shop: false,
        desc: 'Another gig poster for Leeds based gig promoters Northern Flowerhouse. This time featuring a leaf insect. Created using Illustrator and Photoshop.',
        modalImage: 'modal-021.jpg',
    },
    {
        id: 16,
        name: 'dylan carlson',
        src: 'thumbs-016.jpg',
        shop: false,
        desc: 'Gig poster for drone legend Dylan Carlson, created for Room237. Created using pen and ink and coloured on Photoshop and Illustrator.',
        modalImage: 'modal-015.jpg',
    },
    {
        id: 17,
        name: 'robot workshop',
        src: 'thumbs-008.jpg',
        shop: true,
        desc: "Hand drawn illustration of a robot being built. This was exhibited at North Bar for an exhibition titled 'Under Construction'. Created using pigment pens and water colour. Giclee prints on art paper available to buy.",
        modalImage: 'modal-014.jpg',
    },
    {
        id: 18,
        name: 'octopsss',
        src: 'thumbs-017.jpg',
        shop: false,
        desc: 'Computer illustrated picture of an Octopussssss. Created using Adobe Illustrator and Photoshop.',
        modalImage: 'modal-016.jpg',
    },
    {
        id: 19,
        name: 'rat race',
        src: 'thumbs-019.jpg',
        shop: false,
        desc: 'Computer illustrated picture of a rat working in the rat race. Created using Adobe Illustrator and Photoshop.',
        modalImage: 'modal-018.jpg',
    },
    {
        id: 20,
        name: 'papa m house',
        src: 'thumbs-020.jpg',
        shop: false,
        desc: 'Gig poster for Slint legend Papa M, created for Room237. Created using Photoshop and Illustrator. I have massive screen printed posters of this for sale',
        modalImage: 'modal-019.jpg',
    },
    {
        id: 21,
        name: 'bass overload',
        src: 'thumbs-006.jpg',
        shop: false,
        desc: 'Computer illustrated picture of what happens with too much bass. Created using Adobe Illustrator and Photoshop.',
        modalImage: 'modal-020.jpg',
    },
    {
        id: 22,
        name: 'crab man',
        src: 'thumbs-023.jpg',
        shop: false,
        desc: 'Crazy crab military bird nest something or other man illustration. I used pigment pens, a quill, a brush and platinum carbon ink, on heavy duty art paper.',
        modalImage: 'modal-022.jpg',
    },
    {
        id: 23,
        name: 'tree man',
        src: 'thumbs-024.jpg',
        shop: false,
        desc: 'Hand drawn illustration of a colourful tree man. Created using pigment pens and water colour.',
        modalImage: 'modal-023.jpg',
    },
    {
        id: 24,
        name: 'cosmic tree',
        src: 'thumbs-025.jpg',
        shop: false,
        desc: 'Hand drawn detailed illustration of cosmic creature living a tree stump. I used pigment pens, a quill, a brush and platinum carbon ink, on heavy duty art paper.',
        modalImage: 'modal-024.jpg',
    },
    {
        id: 25,
        name: 'stump creep',
        src: 'thumbs-026.jpg',
        shop: false,
        desc: 'Hand drawn illustration of a creepy dude living in a tree stump. Created using pen, ink and watercolours.',
        modalImage: 'modal-025.jpg',
    },
    {
        id: 26,
        name: 'tree head',
        src: 'thumbs-027.jpg',
        shop: false,
        desc: 'Hand drawn illustration of a guy with a tree stump growing from his head. Created using pen, ink and colouring pencils.',
        modalImage: 'modal-026.jpg',
    },
    {
        id: 27,
        name: 'robot poster',
        src: 'thumbs-028.jpg',
        shop: false,
        desc: 'Robot gig poster created for fourteen pulsars, poster was printed using two colour risograph.',
        modalImage: 'modal-028.jpg',
    },
    {
        id: 28,
        name: 'four seasons poster',
        src: 'thumbs-029.jpg',
        shop: false,
        desc: 'Four seasons gig poster created for fourteen pulsars gig birth; life; death; relection.',
        modalImage: 'modal-029.jpg',
    },
    {
        id: 29,
        name: 'plywood lazy demo',
        src: 'thumbs-030.jpg',
        shop: false,
        desc: 'Demo cover artwork for Leeds band Plywood Lazy pen, ink and computer.',
        modalImage: 'modal-030.jpg',
    },
];

export default gallery;
