import { NextApiRequest, NextApiResponse } from "next";
import { utapi } from "uploadthing/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestMethod = req.method;
  const body = JSON.parse(req.body);
  try {
    await utapi.deleteFiles(body.key);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error: Delete failed.");
  }

  res.status(200).json({ deletedFileKey: body.key });
}
