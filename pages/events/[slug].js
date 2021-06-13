import { useRouter } from 'next/router';

export default function EventPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Single Event</h1>
      <p>{router.query.slug}</p>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  );
}
