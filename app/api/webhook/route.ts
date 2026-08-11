import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Received Farcaster MiniApp webhook payload:', body);
    return NextResponse.json({ success: true, message: 'Webhook received successfully' });
  } catch {
    return NextResponse.json({ success: true, message: 'Ping acknowledged' });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'active', message: 'Base MiniApp Webhook Endpoint' });
}
