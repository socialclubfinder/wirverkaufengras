import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = (request as any).nextUrl;
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new NextResponse('Missing URL parameter', { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(`https://${imageUrl}`, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType || 'image/x-icon',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const status = error instanceof Error && error.name === 'AbortError' ? 504 : 404;

    return new NextResponse(`Failed to fetch image: ${errorMessage}`, {
      status,
      headers: {
        'Cache-Control': 'no-store'
      }
    });
  }
}
