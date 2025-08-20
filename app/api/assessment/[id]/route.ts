// app/api/assessment/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

// NOTE:
// 기존 코드에서 assessments를 사용하고 있었다면
// 아래 import 경로를 실제 위치에 맞게 바꾸세요.
// 예) import { assessments } from "@/lib/assessments";
// 현재 임시 구현(데모용)으로 대체합니다.
const assessments = new Map<
  string,
  Record<string, unknown>
>();

// (선택) 데모 데이터
if (!assessments.has("demo")) {
  assessments.set("demo", {
    company: "Demo Co.",
    score: 87,
    checks: 25,
  });
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const assessmentId = params?.id;

    if (!assessmentId) {
      return NextResponse.json(
        { error: "Assessment ID required" },
        { status: 400 }
      );
    }

    const assessment = assessments.get(assessmentId);

    if (!assessment) {
      return NextResponse.json(
        { error: "Assessment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      assessment: {
        id: assessmentId,
        ...assessment,
      },
    });
  } catch (error) {
    console.error("[v0] Error retrieving assessment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
