import { ExpenseRecord } from '../supabase/schema/ExpenseRecord';
import { v4 as uuidV4 } from 'uuid';
const identifyAmount = (field1: string, field2: string) => {
  let amount = 0,
    commodity = '';
  if (isNaN(Number(field1)) && !isNaN(Number(field2))) {
    commodity = field1;
    amount = Number(field2);
  } else if (isNaN(Number(field2)) && !isNaN(Number(field1))) {
    commodity = field2;
    amount = Number(field1);
  }
  return {
    commodity,
    amount,
  };
};

export const createExpenseRecord = (input: string): Array<ExpenseRecord> => {
  let records: Array<ExpenseRecord> = [];
  let splitInput = input.split(' ');
  for (let i = 0; i <= splitInput.length - 2; i += 2) {
    const { amount, commodity } = identifyAmount(
      splitInput[i],
      splitInput[i + 1]
    );
    let r: ExpenseRecord = {
      exp_id: uuidV4(),
      amount,
      commodity,
    };
    records.push(r);
  }
  return records;
};
