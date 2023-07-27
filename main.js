// Returns a random DNA base (provided as part of the project)
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases (provided as part of the project)
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Code written for project:
const pAequorFactory = (number, dnaBasesArray) => { //No two organisms should have the same number (as in, the parameter 'number')
  return newpAequor = {
    specimenNum: number,
    dna: dnaBasesArray,
    mutate() { //This method needs to randomly select a base in the dna property and change the base to one of the other 3 bases
      const randomSub15Num = Math.floor(Math.random() * 15); //Random number generated to target that index of dnaBasesArray
      const randomDNABase = this.dna[randomSub15Num]; //Variable that targets a random index of this.dna
      console.log(randomSub15Num);
      console.log(randomDNABase); //This line will be used to confirm that randomDNABase is changed to a different base below
      if (randomDNABase === 'A') { //SHOULD I USE SETTERS WHEN CHANGING THE this.dna VALUE? IS THIS SET OF CONDITIONALS TOO WORDY???
        const noAArray = ['T', 'C', 'G'];
        const aMutation = noAArray[Math.floor(Math.random() * 3)];
        console.log(aMutation);
        console.log(randomSub15Num);
        this.dna.splice(randomSub15Num, 1, aMutation);
      } else if (randomDNABase === 'T') {
        const noTArray = ['A', 'C', 'G'];
        const tMutation = noTArray[Math.floor(Math.random() * 3)];
        console.log(tMutation);
        console.log(randomSub15Num);
        this.dna.splice(randomSub15Num, 1, tMutation);
      } else if (randomDNABase === 'C') {
        const noCArray = ['A', 'T', 'G'];
        const cMutation = noCArray[Math.floor(Math.random() * 3)];
        console.log(cMutation);
        console.log(randomSub15Num);
        this.dna.splice(randomSub15Num, 1, cMutation);
      } else if (randomDNABase === 'G') {
        const noGArray = ['A', 'T', 'C'];
        const gMutation = noGArray[Math.floor(Math.random() * 3)];
        console.log(gMutation);
        console.log(randomSub15Num);
        this.dna.splice(randomSub15Num, 1, gMutation);
      }
      return this.dna;
    }
  };
};

/*
Code below used to test that mutate() functions properly */
dnaBaseArrayTest = ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']
console.log(pAequorFactory(12345, dnaBaseArrayTest));
console.log(newpAequor.mutate());







