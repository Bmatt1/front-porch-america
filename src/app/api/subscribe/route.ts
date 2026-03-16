import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const formData = new FormData();
    formData.append('email_address', email);

    const res = await fetch(
      'https://app.kit.com/forms/9211067/subscriptions',
      {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error('Kit error:', res.status, text);
      return NextResponse.json(
        { error: 'Subscription failed. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Subscribe API error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
