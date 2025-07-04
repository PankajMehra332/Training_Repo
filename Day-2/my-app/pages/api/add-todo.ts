import { mockdata } from "@/mocks/mockdata";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const newTodo = req.body;
  mockdata.push(newTodo);
  res.status(201).json(newTodo);
}
