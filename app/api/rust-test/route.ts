import { NextResponse } from 'next/server';
import nativeRust from '@/rust-lib';

export async function GET() {
    try {
        const message = nativeRust.hello("World from Rust!");

        return NextResponse.json({
            success: true,
            message: message
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}