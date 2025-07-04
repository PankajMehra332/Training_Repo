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
  if (isNaN(numericId)) {
    return res.status(400).json(mockdata);
  }
  const deletedData = mockdata.filter((item) => item.id === numericId);
  res.status(200).json(deletedData);
}
