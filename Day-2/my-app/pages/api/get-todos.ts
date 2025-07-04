// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  res.status(200).json(mockdata);
}
