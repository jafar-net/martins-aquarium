/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const myName = "Ben";
let myFavoriteColor = "Blue";

export const getFish = () => {
    return fishCollection
}

export const getMostHolyFish = () => {
    const holyFishArray = []

    for (const fish of fishCollection) {
        if(fish.length % 3 === 0){
            holyFishArray.push(fish);
        }
    }
    
    return holyFishArray

}

export const getSoldierFish = () => {
    const soldierFishArray = [];

for (const fishObj of fishCollection){
    if (fishObj.length % 5 === 0){
        soldierFishArray.push(fishObj);
    }
}

return soldierFishArray

}

export const getUnworthy = () => {
    const unworthyArray = []

    for (const fishFish of fishCollection) {
        if(!(fishFish.length % 3 === 0 && fishFish.length % 5 === 0)){
            unworthyArray.push(fishFish);
        }
    }
    
    return unworthyArray;

}



const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
		image: "bluefish.jpeg",
		species: "Trigger",
		length: 7,
		waterType: "Salt",
		harvestLocation: "Costa Rica"
    },
	{
        name: "Mr Freeze",
        food: "Meal Worms",
		image: "cat.jpeg",
		species: "Tang",
		length: 3,
		waterType: "Salt",
		harvestLocation: "Florida"
    },
	{
        name: "Nemo",
        food: "Goldfish",
        image: "crazy-fish.jpeg",
        species: "Clown",
        length: 3,
        waterType: "Salt-water",
        harvestLocation: "Florida"
    },
	{
        name: "Don Julio",
        food: "snails",
        image: "dopeyfish.jpeg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"
    },
	{
        name: "Karen",
        food: "Algae",
        image: "Gold.jpeg",
        species: "Siamese algae eater",
        length: 5,
        waterType: "salt", 
        harvestLocation: "Puerto Rico"
    },
	{
		name: "Robin Gilliams",
		food: "Bee Moths",
		image: "orangefish.jpeg",
		species: "Clownfish",
		length: 2,
		waterType: "Salt",
		harvestLocation: "Mexico"
	},
	{
        name: "Bruce",
        food: "not fish",
        image: "pinkfish.jpeg",
        species: "greatWhite",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    },
	{
        name: "Bloat",
        food: "shrimp",
        image: "purplefish.jpeg",
        species: "Blow Fish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
	{
        name: "Gordon",
        food: "Krill",
        image: "yellowbluefish.jpeg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    }
]