function consecutiveSubstrings(string) {
  const individual = [...string]
  const combined = []
  const length = individual.length
  
  for(let i = 0; i < length; i++) {
    for(let j = (i + 1); j <= length; j++) {
      const substring = individual.slice(i,j).join('')
      combined.push(substring)
    }

  }

  return combined
}

//Big O(n^2)

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


