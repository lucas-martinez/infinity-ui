import { Dispatch } from 'react';

const bindActionCreators = <A, T extends Record<string, (...args: any[]) => A>>(creators: T, dispatch: Dispatch<A>): T =>
  Object.entries(creators).reduce(
    (result, [key, creator]) => Object.assign(result, { [key]: (...args: any[]) => dispatch(creator(...args)) }),
    {} as T
  );

export default bindActionCreators;
