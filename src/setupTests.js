global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
