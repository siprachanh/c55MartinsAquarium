import { getFish } from './fish/FishData.js'
import { FishList } from './fish/FishList.js';

const allTheFish = getFish();



FishList();
//allows us to invoke the FishList function; this works because we declared modele on line 26 in index.html