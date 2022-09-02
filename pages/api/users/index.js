import clientPromise from "../../../lib/mongodb";

export default async function getUsers(req, res) {
  try {
    const client = await clientPromise
    const db = client.db("merepresenta")

    const findResult = await db.collection("users").find({}).toArray();

    return res.status(200).json(findResult)
  } catch (e) {
    console.log(e)
    return res.status(400)
  }
}