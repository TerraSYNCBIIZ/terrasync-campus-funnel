
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.NEXT_PUBLIC_ODOO_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { error: 'Odoo webhook URL not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Odoo Error Response:', errorText);
      throw new Error(`Odoo webhook failed: ${response.status} - ${errorText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Proxy error details:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit to Odoo' },
      { status: 500 }
    );
  }
}

