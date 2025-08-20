import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: { params: { id: string } }
) {
  const { id } = ctx.params;
  
    if (!assessment) {
      return NextResponse.json({ error: "Assessment not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      assessment: {
        id: assessmentId,
        ...assessment,
      },
    })
  } catch (error) {
    console.error("[v0] Error retrieving assessment:", error)
    return NextResponse.json({ id });
  }
}
