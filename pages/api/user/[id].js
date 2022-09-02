import { ObjectId } from "mongodb"
import clientPromise from "../../../lib/mongodb"

export default async function getUser(req, res) {
  try {
    const { id } = req.query
    const parsedId = ObjectId(id)

    const client = await clientPromise
    const db = client.db("merepresenta")
    const findResult = await db.collection("users").findOne({ _id: parsedId })

    return res.status(200).json(findResult)
  } catch (e) {
    console.log(e)
    return res.status(400)
  }
}