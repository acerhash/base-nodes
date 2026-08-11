import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { targetRpc = 'https://mainnet.base.org', method = 'eth_getBlockByNumber', params = ['latest', false] } = body;

    const startTime = Date.now();
    const rpcResponse = await fetch(targetRpc, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: Date.now(),
        method,
        params,
      }),
    });

    const duration = Date.now() - startTime;
    const data = await rpcResponse.json();

    return NextResponse.json({
      success: true,
      latencyMs: duration,
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'RPC proxy request failed',
      },
      { status: 500 }
    );
  }
}
