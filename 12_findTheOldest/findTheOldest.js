function findTheOldest(people) {
  const currentYear = new Date().getFullYear();
  let oldestPerson = people[0];

  for (let i = 0; i < people.length; i++) {
    let person = people[i];

    let age = (person.yearOfDeath || currentYear) - person.yearOfBirth;

    let oldestAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;
    
    if (age > oldestAge) {
      oldestPerson = person;
    }
  }

  return oldestPerson;

}
// Do not edit below this line  
module.exports = findTheOldest;
