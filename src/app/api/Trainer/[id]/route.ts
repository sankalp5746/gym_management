import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { useDynamicRouteParams } from 'next/dist/server/app-render/dynamic-rendering';

interface RouteParams {
  params: {
    id: string;
  };
}
// Delete Route
export async function  DELETE(
    req: NextRequest,
    context: RouteParams
):Promise<NextResponse> {

  const param = await context.params;
  const userId = parseInt(param.id);

    if (isNaN(userId)) {
        return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 })
    }

    try {
        await prisma.user.delete({
            where: { id: userId },
        })

        return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 })
    } catch (error) {
        console.error('Error deleting user:', error)
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
    }
}

// Update Route
export async function PUT(
    req: NextRequest,
    context:RouteParams
):Promise<NextResponse> {
  const param = await context.params;
  const userId = parseInt(param.id);

    if (isNaN(userId)) {
        return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 })
    }

    try {
        const data = await req.json()

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data, // This assumes your data matches the Prisma user schema
        })

        return NextResponse.json({ message: 'User updated successfully', user: updatedUser }, { status: 200 })
    } catch (error) {
        console.error('Error updating user:', error)
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
    }
}