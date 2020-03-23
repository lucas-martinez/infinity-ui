// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

export const throttle = (fn, threshold = 250, scope: any = this) => {
  let last;
  let deferTimer;

  return (...args) => {
    const now = Date.now();
    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
        fn.apply(scope, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(scope, args);
    }
  };
};
