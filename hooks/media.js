import { useMediaQuery } from 'react-responsive';

export const isSm = () => (useMediaQuery({ query: '(max-width: 475px)' }));
export const isMd = () => (useMediaQuery({ query: '(max-width: 760px)' }));
export const isLg = () => (useMediaQuery({ query: '(max-width: 1024px)' }));
export const isXLg = () => (useMediaQuery({ query: '(max-width: 1200px)' }));