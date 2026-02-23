import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

// Default date if nothing is set in Redis
const DEFAULT_DATE = "2026-03-01T10:30:00Z";

export async function GET() {
    try {
        const date = await redis.get('webinar_date') as string | null;
        return NextResponse.json({ date: date || DEFAULT_DATE });
    } catch (error) {
        console.error("Failed to fetch webinar date from Redis:", error);
        return NextResponse.json({ date: DEFAULT_DATE });
    }
}
