import { ChatSession } from "../../../configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req){
    // console.log("req is coming ",req)
    try {
        const {prompt} = await req.json()
        console.log("prompt is coming " ,prompt)

        const result  = await ChatSession.sendMessage(prompt);
        console.log("result is coming ",JSON.parse(result.response.text()))

        return NextResponse.json({'result':JSON.parse(result.response.text())})
    } catch (e) {
        return NextResponse.json({'Error bkc':e})
    }

}