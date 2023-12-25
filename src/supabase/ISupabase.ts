import { ExpenseRecord } from './schema/ExpenseRecord';

export interface ISupabase {
  client: any;
  getClient: () => any;
  insertRows: (table: string, records: Array<ExpenseRecord>) => Promise<any>;
  queryData: (table: string) => Promise<any>;
}
