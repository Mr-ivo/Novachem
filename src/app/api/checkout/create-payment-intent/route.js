import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST() {
  return NextResponse.json(
    { message: 'Payment processing is handled manually. Please contact info@novachemsite.com.' },
    { status: 410 }
  );
}
