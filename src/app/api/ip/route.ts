import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const headers = request.headers;

  const forwardedFor = headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

  const country = headers.get('x-vercel-ip-country') || 'BD';
  const city = headers.get('x-vercel-ip-city') || 'Dhaka';
  const region = headers.get('x-vercel-ip-country-region') || 'Dhaka Division';
  const userAgent = headers.get('user-agent') || 'Unknown Browser';

  // Check if IP or Country implies Bangladesh BDIX network
  const isBdCountry = country.toUpperCase() === 'BD';
  const isLocal = ip === '127.0.0.1' || ip.startsWith('192.168.') || ip.startsWith('10.');

  return NextResponse.json({
    ip,
    country,
    city,
    region,
    isBdixEligible: isBdCountry || isLocal,
    userAgent,
    timestamp: new Date().toISOString(),
  });
}
