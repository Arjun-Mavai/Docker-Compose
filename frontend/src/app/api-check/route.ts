export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return Response.json({
    status: 200,
    message: "Server is up and running",
    serverTime: new Date().toISOString(),
    ipAddress: request.headers.get("X-Forwarded-For"),
  });
}
