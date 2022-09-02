// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from 'mongodb'

export async function updateUser(req, res) {
  try {
    const { id } = req.query
    const parsedId = ObjectId(id)

    const client = await clientPromise
    const db = client.db("merepresenta")
    const findResult = await db.collection.updateOne({ _id: parsedId }, { $set: req.body });
    return findResult
  } catch (e) {
    console.log(e)
    return []
  }
}

