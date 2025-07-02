import { http, HttpResponse } from "msw";

const data = [
  { id: 1, name: "do this" },
  { id: 2, name: "do that" },
  { id: 3, name: "do those" },
];

export const handlers = [

  http.get("/api/get-todos", () => {
    return HttpResponse.json(data);
  }),

  http.post("/api/add-todo", async({request}) => {
    const reqBody = await request.json();
    data.push(reqBody);
    return HttpResponse.json(reqBody);
  }),

  http.delete("/api/delete-todo/:id", async({ params }) => {
    const id = Number(params.id);
    const index = data.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return HttpResponse.json({ message: "Todo not found" }, { status: 404 });
    }
    const deleted = data.splice(index, 1)[0];
    return HttpResponse.json({ message: "Deleted successfully", todo: deleted }, { status: 200 });
  }),
  
];
