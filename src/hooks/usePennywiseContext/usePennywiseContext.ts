import { useContext } from 'react';
import PennywiseContext from '../../context/PennywiseContext';

const usePennywiseContext = () => {
  const ctx = useContext(PennywiseContext);
  return ctx;
};

export default usePennywiseContext;
