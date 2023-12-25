import { createClient } from '@supabase/supabase-js';
import { ISupabase } from './ISupabase';
import { ExpenseRecord } from './schema/ExpenseRecord';
const env = import.meta.env;

export class SupabaseClient implements ISupabase {
  client: any = null;
  constructor() {
    if (this.client) return;
    this.client = createClient(
      env.VITE_SUPABASE_URL,
      env.VITE_SUPABASE_ANON_KEY
    );
  }

  getClient() {
    return this;
  }

  async insertRows(table: String, records: Array<ExpenseRecord>) {
    console.log(this.client);
    const { data, error } = await this.client
      .from(table)
      .insert(records)
      .select();
    if (!error) {
      console.log(data);
      return {
        success: true,
        response: data,
      };
    } else {
      console.log(error);
      return {
        success: false,
        response: error,
      };
    }
  }

  async queryData(table: string) {
    const { data, error } = await this.client.from(table).select('amount');
    if (!error) {
      return {
        success: true,
        response: data,
      };
    } else {
      return {
        success: false,
        response: error,
      };
    }
  }
}
