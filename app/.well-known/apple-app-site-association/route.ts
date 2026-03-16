import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "9HDBMQNLD8.com.animllc.Prayer-Pause",
          paths: ["/ref/*"],
        },
      ],
    },
  });
}
