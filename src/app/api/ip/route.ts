import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const headers = request.headers;

  const forwardedFor = headers.get('x-forwarded-for');
  let rawIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

  let country = headers.get('x-vercel-ip-country') || '';
  let city = headers.get('x-vercel-ip-city') || '';
  let region = headers.get('x-vercel-ip-country-region') || '';
  let isp = 'Unknown ISP';
  const userAgent = headers.get('user-agent') || 'Unknown Browser';

  const isLoopback =
    !rawIp ||
    rawIp === '127.0.0.1' ||
    rawIp === '::1' ||
    rawIp === '::ffff:127.0.0.1' ||
    rawIp.startsWith('192.168.') ||
    rawIp.startsWith('10.');

  // If local loopback or missing Vercel geo header, perform fallback IP/ISP lookup
  if (isLoopback || !country) {
    try {
      const lookupTarget = isLoopback ? '' : rawIp;
      const res = await fetch(`http://ip-api.com/json/${lookupTarget}`, {
        next: { revalidate: 3600 },
      });
      if (res.ok) {
        const geo = await res.json();
        if (geo.status === 'success') {
          if (isLoopback) rawIp = geo.query;
          country = geo.countryCode || 'BD';
          city = geo.city || 'Dhaka';
          region = geo.regionName || 'Dhaka Division';
          isp = geo.isp || geo.as || 'BD Broadband ISP';
        }
      }
    } catch {
      // Fallback defaults
      if (isLoopback) rawIp = '103.152.107.251';
      country = 'BD';
      city = 'Dhaka';
      isp = 'Bangladesh ISP Peering';
    }
  }

  const isBdCountry = (country || 'BD').toUpperCase() === 'BD';

  return NextResponse.json({
    ip: rawIp,
    isp: isp || 'Bangladesh Broadband',
    country: country || 'BD',
    city: city || 'Dhaka',
    region: region || 'Dhaka Division',
    isBdixEligible: isBdCountry,
    userAgent,
    timestamp: new Date().toISOString(),
  });
}
