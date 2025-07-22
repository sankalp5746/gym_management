import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// POST method
export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, phoneNumber } = body

        if (!name || !phoneNumber) {
            return NextResponse.json({ error: 'Name and phone number are required' }, { status: 400 })
        }

        const user = await prisma.user.create({
            data: { name, phoneNumber },
        })

        return NextResponse.json(user, { status: 201 })
    } catch (error) {
        console.error('Error creating user:', error)
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
    }
}

// GET method
export async function GET() {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users, { status: 200 })
    } catch (error) {
        console.error('Error fetching users:', error)
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
    }
}

