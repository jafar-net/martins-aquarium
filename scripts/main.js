import { FishList } from "./Fish/FishList.js";
FishList();

import { getFish } from './Fish/FishData.js'

const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(fish)
}