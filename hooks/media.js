import { useMediaQuery } from 'react-responsive';

export const isSm = () => (useMediaQuery({ query: '(max-width: 475px)' }));
export const isMd = () => (useMediaQuery({ query: '(max-width: 760px)' }));
export const isLg = () => (useMediaQuery({ query: '(max-width: 1024px)' }));
export const isXLg = () => (useMediaQuery({ query: '(max-width: 1200px)' }));

export const isSmCallback = (callback) => (useMediaQuery({ query: '(max-width: 475px)' }, undefined, callback));
export const isMdCallback = (callback) => (useMediaQuery({ query: '(max-width: 760px)' }, undefined, callback));
export const isLgCallback = (callback) => (useMediaQuery({ query: '(max-width: 1024px)' }, undefined, callback));
export const isXLgCallback = (callback) => (useMediaQuery({ query: '(max-width: 1200px)' }, undefined, callback));