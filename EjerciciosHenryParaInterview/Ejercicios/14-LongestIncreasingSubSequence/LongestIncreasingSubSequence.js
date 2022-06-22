function longestIncreasingSubsequence(nums) {
  // Your code here:
  const sequences = [[-Infinity]];
  nums.forEach(num => {
      const copySeq = [...sequences];
      copySeq.forEach(sequence => {
          if(sequence.slice(-1)[0] < num) sequences.push([...sequence, num]);
      });
  });
  return sequences.reduce((memo, seq) => {
      if (memo > seq.length) return memo;
      return seq.length;
  }, 1) -1;
}

module.exports = longestIncreasingSubsequence;
