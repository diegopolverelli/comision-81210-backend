const starWarsCharacters = [
    {
        id: 1,
        name: "Luke Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 2,
        name: "Darth Vader",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 3,
        name: "Princess Leia Organa",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 4,
        name: "Emperor Palpatine",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 5,
        name: "Han Solo",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 6,
        name: "Boba Fett",
        affiliation: "Villain",
        species: "Human",
        weapon: "Blaster",
        side: "Neutral"
    },
    {
        id: 7,
        name: "Obi-Wan Kenobi",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 8,
        name: "Count Dooku",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 9,
        name: "Rey",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 10,
        name: "Kylo Ren",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 11,
        name: "Yoda",
        affiliation: "Hero",
        species: "Yoda's species",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 12,
        name: "Maul",
        affiliation: "Villain",
        species: "Dathomirian",
        weapon: "Double-bladed lightsaber",
        side: "Dark"
    },
    {
        id: 13,
        name: "Chewbacca",
        affiliation: "Hero",
        species: "Wookiee",
        weapon: "Bowcaster",
        side: "Light"
    },
    {
        id: 14,
        name: "General Grievous",
        affiliation: "Villain",
        species: "Kaleesh",
        weapon: "Multiple lightsabers",
        side: "Dark"
    },
    {
        id: 15,
        name: "Anakin Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 16,
        name: "Jabba the Hutt",
        affiliation: "Villain",
        species: "Hutt",
        weapon: "None",
        side: "Neutral"
    },
    {
        id: 17,
        name: "Lando Calrissian",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 18,
        name: "Admiral Thrawn",
        affiliation: "Villain",
        species: "Chiss",
        weapon: "Strategist",
        side: "Dark"
    },
    {
        id: 19,
        name: "Padmé Amidala",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 20,
        name: "Asajj Ventress",
        affiliation: "Villain",
        species: "Dathomirian",
        weapon: "Dual lightsabers",
        side: "Dark"
    },
]


const operar=(a, b, cb)=>{   // cb es callback function
    try {
        return cb(null, a, b)          
    } catch (error) {
        return cb(error)
    }
}


console.log(operar(2, 4, (error, a, b)=>a+b))
console.log(operar(2, 4, (error, a, b)=>a-b))
console.log(operar(2, 4, (error, a, b)=>a*b))
console.log(operar(2, 4, (error, a, b)=>a/b))

console.log(operar(2, 4, (error, a, b)=>{
    let per1=starWarsCharacters.find(p=>p.id==a)
    let per2=starWarsCharacters.find(p=>p.id==b)

    return `${per1.name}  vs. ${per2.name}`
}))

