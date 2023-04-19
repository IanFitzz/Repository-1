let test = 'This is testing';
let character = {"backpack":["grenade 1","grenade 2"]};

for (let item of character.backpack) {
    console.log(item);
}

character.backpack = [];
console.log(character.backpack);