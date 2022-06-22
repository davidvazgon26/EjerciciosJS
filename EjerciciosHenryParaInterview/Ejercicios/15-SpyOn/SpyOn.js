const spyOn = (fn) => {
  let callCount = 0;
  const calledWith = new Set();
  const returns = new Set();
  const spy = (...args) => {
      callCount += 1;
      args.forEach(arg => calledWith.add(arg));
      const result = fn(...args);
      returns.add(result);
      return result;
  }
  spy.getCallCount = () => callCount;
  spy.wasCalledWith = (val) => calledWith.has(val);
  spy.returned = (val) => returns.has(val);
  return spy;
}

module.exports = spyOn;
