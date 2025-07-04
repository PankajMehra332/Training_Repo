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
  const numericId = Number(req.query.id);
  const jsonBody = req.body;
  if (isNaN(numericId)) {
    return res.status(400).json(mockdata);
  }
  const updatedList = mockdata.map((item) =>
    item?.id === numericId ? { ...item, name: jsonBody?.name } : item
  );
  res.status(200).json(updatedList);
}
