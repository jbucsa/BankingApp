export interface Account {
  id: string;
  name: string;
  account_number: string;
  balance: number;
  currency: string;
  type: 'checking' | 'savings' | 'investment';
}