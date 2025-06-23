// app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard'); // Or your preferred route
  return null;
}