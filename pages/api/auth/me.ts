import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const bearerToken = req.headers["authorization"] as String;
    const token = bearerToken.split(" ")[1];

    const payLoad = jwt.decode(token) as  {email: String};

    if(!payLoad.email) {
        return res.status(401).json({
          errorMessage: "Unauthorized request",
        });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: payLoad.email,
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            city: true,
            phone: true,
            email: true
        }
    })
    return res.json({user})
}
