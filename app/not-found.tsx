import Link from 'next/link';
import Button from './components/button';

export default function NotFound() {
  return (
    <main className="w-1/2 h-screen flex flex-col justify-center items-center mx-auto pt-4">
      <h2 className="text-4xl text-blue-600 font-black mb-6">Not Found</h2>
      <p className="mb-6">Could not find requested resource</p>
      <Button type="button" id="back-home" style="flex justify-center items-center bg-white hover:bg-blue-100 text-blue-600 font-semibold mx-auto mb-4 py-2 px-4 border border-blue-600 rounded-lg shadow">
        <Link href="/">Back Home</Link>
      </Button>
    </main>
  );
}