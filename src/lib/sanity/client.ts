import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function getPotteryPieces() {
  const query = `
    *[_type == "potteryPiece"] {
      _id,
      id,
      name,
      height,
      width,
      depth,
      description,
      price,
      images[] {
        asset -> {
          _id,
          url
        }
      }
    }
  `
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Failed to fetch pottery pieces:', error)
    return []
  }
}

export async function getPotteryPieceById(id: string) {
  const query = `
    *[_type == "potteryPiece" && id == $id][0] {
      _id,
      id,
      name,
      height,
      width,
      depth,
      description,
      price,
      images[] {
        asset -> {
          _id,
          url
        }
      }
    }
  `
  try {
    const data = await client.fetch(query, {id})
    return data
  } catch (error) {
    console.error('Failed to fetch pottery piece:', error)
    return null
  }
}
