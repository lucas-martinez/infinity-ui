const throttle = <T extends (...args: any[]) => void>(
  func: T,
  threshold: number = 250,
  scope?: any
): T => {
  let last: number, deferTimer: number;
  return function(this: any) {
    let context = scope || this;

    let now = Date.now(),
      args = arguments;
    if (last && now < last + threshold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function() {
        last = now;
        func.apply(context, Array.from(args));
      }, threshold);
    } else {
      last = now;
      func.apply(context, Array.from(args));
    }
  } as T;
}

export default throttle;
