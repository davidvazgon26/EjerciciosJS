const curry = (fn) => {
  return function curriedFn(...args) {
      if (args.length >= fn.length) return fn(...args);
      else return (...nextArgs) => curriedFn(...args, ...nextArgs);
  };
};

module.exports = curry;
