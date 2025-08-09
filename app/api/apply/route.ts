import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // In a real app, forward to email/CRM or persist to a database.
    // For now we just echo back.
    console.log("New application:", body)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return new NextResponse("Invalid request", { status: 400 })
  }
}
