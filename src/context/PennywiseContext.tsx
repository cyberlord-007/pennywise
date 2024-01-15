import { createContext, useRef } from 'react';
import { SupabaseClient } from '../supabase/SupabaseClient';

const PennywiseContext  = createContext({});

export function PennywiseProvider({ children }: any) {
  const supabaseRef = useRef(new SupabaseClient());

  const _context = {
    supabase: supabaseRef.current?.getClient(),
    isAuthenticated: false
  };

  return (
    <PennywiseContext.Provider value={{ ..._context }}>
      {children}
    </PennywiseContext.Provider>
  );
}

export default PennywiseContext;
