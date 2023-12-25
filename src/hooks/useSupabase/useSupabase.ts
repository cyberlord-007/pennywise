import { useEffect, useState } from 'react';
import { SupabaseClient } from '../../supabase/SupabaseClient';

const useSupabase = () => {
  const [supabase, setSupabase] = useState<any>(
    new SupabaseClient()
  );
  useEffect(() => {
    const _supabase = new SupabaseClient();
    console.log(_supabase);
    const client = _supabase.getClient();
    setSupabase(client);
  }, []);

  return {
    insert: supabase.insertRows,
  };
};

export default useSupabase;
