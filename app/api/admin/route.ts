import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { date, password } = body;

        if (!date) {
            return NextResponse.json({ error: "Date is required" }, { status: 400 });
        }

        if (!password) {
            return NextResponse.json({ error: "Password is required" }, { status: 401 });
        }

        // Check against the environment variable
        if (password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ error: "Invalid password" }, { status: 403 });
        }

        // Store in Redis
        await redis.set('webinar_date', date);

        return NextResponse.json({ success: true, date });
    } catch (error) {
        console.error("Failed to update webinar date:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
