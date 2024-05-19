import { mock } from "node:test";

export const dynamic = "force-dynamic";
const mockAuthors = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  name: `Author ${index + 1}`,
  bio: `This is a short bio of Author ${index + 1}.`,
  image: `https://via.placeholder.com/600/771796`,
  location: `Location ${index + 1}`,
}));
export async function GET(request: Request) {
  return Response.json(mockAuthors);
}
