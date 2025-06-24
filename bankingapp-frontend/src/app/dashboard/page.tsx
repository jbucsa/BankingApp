'use client';
import { useEffect, useState } from 'react';

import { api } from '@/lib/api';
import { Account } from '@/types/account';



import AccountCard from '@/components/AccountCard';
import { AppSidebar } from '../../components/ui/app-sidebar'

import { SiteHeader } from '../../components/ui/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'



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

    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </div>
  );
}