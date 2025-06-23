import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export default function CryptoPage() {
  // Fetch crypto data from Django API
  const cryptos = [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 63457.21 },
    { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3478.93 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Crypto Market</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cryptos.map((crypto) => (
            <TableRow key={crypto.id}>
              <TableCell>{crypto.name} ({crypto.symbol})</TableCell>
              <TableCell>${crypto.price.toLocaleString()}</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2">Buy</Button>
                <Button variant="destructive">Sell</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}