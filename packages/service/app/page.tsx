import Link from 'next/link';
import React from 'react';

export default function MainPage() {
  return (
    <section className="flex justify-center items-center pt-16">
      <div className="hover:opacity-70">
        <Link href="/login">로그인</Link>
      </div>
    </section>
  );
}
