"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharatersCollection_1 = require("./CharatersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
var charatersCollection = new CharatersCollection_1.CharatersCollection("xcabd");
var sorter = new Sorter_1.Sorter(numbersCollection);
var charSorter = new Sorter_1.Sorter(charatersCollection);
//const sorter = new Sorter('abdce');
sorter.sort();
charSorter.sort();
console.log("For number " + numbersCollection.data);
console.log("For string " + charatersCollection.data);
