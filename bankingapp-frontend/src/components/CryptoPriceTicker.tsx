'use client';
import { useEffect, useState } from 'react';

interface CryptoPrice {
  [symbol: string]: number; // Maps crypto symbols to their prices
}

export default function CryptoPriceTicker() {
  const [prices, setPrices] = useState<CryptoPrice>({});

  useEffect(() => {
    const ws = new WebSocket('wss://crypto-feed.example.com');

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as { symbol: string; price: number };
        if (data.symbol && typeof data.price === 'number') {
          setPrices(prev => ({ ...prev, [data.symbol]: data.price }));
        }
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <div className="flex space-x-4 overflow-x-auto py-2">
      {Object.entries(prices).map(([symbol, price]) => (
        <div key={symbol} className="bg-muted px-3 py-1 rounded-md whitespace-nowrap">
          {symbol}: <span className="font-mono">${price.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}