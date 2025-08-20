import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  return NextResponse.json({ id });
}

    if (!assessmentId) {
      return NextResponse.json({ error: "Assessment ID required" }, { status: 400 })
    }

    const assessment = assessments.get(assessmentId)

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
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
