/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        species: "Yellow Tang",
        length: 15,
        location: "Honolulu, HI",
        saltwater: true,
        image: "YellowTangfish1.jpeg",
        name: "Frodo",
        food: "insects"
    },
    {
        species: "Sword Fish",
        length: 2.5,
        location: "Florida",
        saltwater: true,
        image: "SwordFish1.jpeg",
        name: "Sharpy",
        food: ""
    },
    { 
        species: "Shark",
        length: 25,
        location: "Florida",
        saltwater: true,
        image: "MakoShark.jpeg",
        name: "Bruce",
        food: "Yellow Tang"
    }
]

export const getFish = () => {
    return fishCollection
}

