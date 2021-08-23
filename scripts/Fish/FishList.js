/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish, getSoldierFish } from "./FishData.js";
import { Fish } from "./Fish.js";
import { getMostHolyFish } from "./FishData.js";
import { getUnworthy } from "./FishData.js";


export const FishList = () => {
    const holyFishes = getMostHolyFish();
    addFishToDom(holyFishes);
    const soldierFish = getSoldierFish();
    addFishToDom(soldierFish);
    const unworthyFish = getUnworthy();
    addFishToDom(unworthyFish);
}


const addFishToDom = (arrayOfFish) => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList");

    // // Add to the existing HTML in the content element
	let fishHTMLRepresentation = "";
	for (const oneThingFromTheSea of arrayOfFish) {
		fishHTMLRepresentation += Fish(oneThingFromTheSea);
	}
	
    contentElement.innerHTML += fishHTMLRepresentation
}