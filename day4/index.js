// const div = document.getElementById("arrayExercise")

const historicalFigures = [
    {   first:'Albert', 
        last:'Einstein', 
        year:1879, 
        passed:1955
    },
    {
        first:'Issac', 
        last:'Newton', 
        year:1643, 
        passed:1727
    },
    {
        first:'Galileo', 
        last:'Galilei', 
        year:1564, 
        passed:1642
    },
    {
        first:'Marie',
        last:'Curie',
        year:1867,
        passed:1934
    },
    {
        first:'Johannes',
        last:'Kepler',
        year:1571,
        passed:1630
    },
    {
        first:'Nicolaus',
        last:'Copernicus',
        year:1473,
        passed:1543
    },
    {
        first:'Max',
        last:'Planck',
        year:1858,
        passed:1947
    },
]


//Array.Prototype.filter()
//Filter list of inventors born in the 1500s
const figuresBornin1500s = historicalFigures.filter(function(inventor){
    if(inventor.year >= 1500 && inventor.year<1600){
        return true
    }
})

console.log(figuresBornin1500s)
console.table(figuresBornin1500s)

//Array.Prototype.map()
//Give an array of inventor's first and last name
const namesOfInventors = historicalFigures.map((inventor)=>{
    return (`${inventor.first} ${inventor.last}`)
})

console.table(namesOfInventors)

//Array.Prototype.sort()
//sort the inventors by birhtdate, oldest to youngest
const inventorsByAge = historicalFigures.sort((a,b)=>{
    return a.year-b.year
})

console.table(inventorsByAge)

//Array.Prototype.reduce()
//How many years did the inventors livesd in total?

const yearsLived = historicalFigures.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(`The total years the inventors lived are ${yearsLived} years`);


//sort inventors by years lived
const inventorsByYearsLived = historicalFigures.sort((a,b)=>{
    return((b.passed-b.year)-(a.passed-a.year))
})

console.table(inventorsByYearsLived)


//Create a list of boulevards that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category')
const links = [...category.querySelectorAll('a')]
const de = links.map(link=> link.textContent)
    .filter(streetName => streetName.includes('de'))