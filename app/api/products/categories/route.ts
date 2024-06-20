import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect()
    const categories = await ProductModel.find().distinct('category')
    console.log(categories);
    return Response.json(categories)
  } catch (error) {
    console.log(error)
  }
}
