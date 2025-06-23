import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Account } from "@/types/account";

export default function AccountCard({ account }: { account: Account }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{account.name}</CardTitle>
        <span className="text-sm text-muted-foreground">
          {account.account_number}
        </span>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: account.currency || 'USD'
          }).format(account.balance)}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {account.type}
        </p>
      </CardContent>
    </Card>
  );
}