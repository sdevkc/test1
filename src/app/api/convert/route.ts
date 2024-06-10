import * as curlconverter from "curlconverter";
import type { NextRequest } from "next/server";

// https://github.com/curlconverter/curlconverter

export function POST(req: NextRequest) {
	console.log(curlconverter.toNode("curl example.com"));

	return Response.json({ text: "." });
}
