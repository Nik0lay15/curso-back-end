import {serve} from "https://deno.land/std@0.127.0/http/server.ts";
import { config } from "https://deno.land/std@0.127.0/dotenv/mod.ts";

const port:number = 8080 || Deno.env.get("PORT");

serve(()=> new Response("Hello Deno"),{port});

console.log("Server up, localhost:",port);

