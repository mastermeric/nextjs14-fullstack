
import {JSDOM} from "jsdom"
import { NextResponse } from "next/server";

export async function GET(request) {  

  const res = await fetch("https://www.npmjs.com/package/puppetter");
  const html = await res.text();
  const index = html.indexOf("_9ba9a726");

  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const downloads = doc.querySelector("._9ba9a726")?.textContent;

  console.log("DOWNLOADS ::: " + downloads);

  return Response.json( downloads );

}

export async function POST(req,res) {  

  const body = await req.json();

  console.log(" POST :::: " , body );


  const result = await fetch(body);
  const html = await result.text();

  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const downloads = doc.querySelector("._9ba9a726")?.textContent;

  console.log("DOWNLOADS ::: " + downloads);


  return NextResponse.json(downloads)

}
