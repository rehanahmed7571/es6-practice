const ages = [12, 13,14,15,16];
const ages2 = [17,18,19,20];
const ages3 = [21,22,23,24,25];

//const allAges = ages.concat(ages2).concat(ages3).concat(5);
const allAges = [...ages, ...ages2,5,...ages3] 

//console.log(allAges);

const business = 650;
const jobHolder = 350;
const jomidar = 950;
const highProfile = Math.max(business,jobHolder,jomidar)

//console.log(highProfile);

const land = [5, 10, 12, 3, 4, 40];

const rich = Math.max(...land);
console.log(rich);