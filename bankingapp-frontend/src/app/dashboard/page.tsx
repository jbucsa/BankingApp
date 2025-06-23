'use client';
import { useEffect, useState } from 'react';
import AccountCard from '@/components/AccountCard';
import { api } from '@/lib/api';
import { Account } from '@/types/account';

export default function Dashboard() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await api.get<Account[]>('/accounts/');
        setAccounts(response.data);
      } catch (error) {
        console.error('Failed to fetch accounts', error);
      }
    };
    fetchAccounts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Accounts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}