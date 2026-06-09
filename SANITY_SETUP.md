# Sanity CMS Setup Guide

## Step 1: Create a Sanity Account & Project

1. Go to [sanity.io](https://sanity.io)
2. Click **"Get started"** and sign up (or sign in if you have an account)
3. Create a new project:
   - Project name: `McLean's Ceramics`
   - Create dataset: name it `production`
4. Copy your **Project ID** (found in project settings)

## Step 2: Update Environment Variables

Open `.env.local` in the root of your project and replace the placeholders:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Step 3: Generate Sanity Auth Token (for local development)

In your Sanity project dashboard:
1. Go to **Settings** → **API** → **Tokens**
2. Create a new token with "Editor" permissions
3. Save it (you'll use it in the next step)

## Step 4: Initialize Sanity in Your Project

Run:
```bash
npm run dev:sanity
```

This will start the Sanity Studio at `http://localhost:3333`

Follow the prompts to authenticate and initialize your project.

## Step 5: Access Sanity Studio

Once initialized, your Sanity Studio runs at:
- **Local**: `http://localhost:3333`
- **Production**: `https://[project-id].sanity.studio`

## Step 6: Add Pottery Pieces in Sanity Studio

1. Open `http://localhost:3333`
2. Click **"Pottery Piece"** in the sidebar
3. Click **"Create"** to add a new piece
4. Fill in:
   - **ID**: e.g., `tri-color-bowl-01` (must match your slug)
   - **Name**: e.g., `Tri-Color Bowl`
   - **Height/Width/Depth**: e.g., `4 inches`
   - **Description**: Brief description
   - **Images**: Upload images (Sanity handles CDN delivery)
   - **Price**: e.g., `$150`
5. Click **"Publish"** when done

## Step 7: Update Your Website

The Next.js site will automatically fetch pottery pieces from Sanity.

Update `src/app/page.tsx` to use Sanity:

```typescript
import { getPotteryPieces } from '@/lib/sanity/client';

export default async function HomePage() {
  const pieces = await getPotteryPieces();
  // ... rest of component uses `pieces` instead of hardcoded data
}
```

## Deployment to Vercel

1. Push changes to GitHub:
   ```bash
   git add -A
   git commit -m "Add: Sanity CMS integration"
   git push
   ```

2. In Vercel project settings → **Environment Variables**, add:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. Vercel will redeploy automatically

## Running Both Dev Servers

If you want to run Next.js and Sanity simultaneously:
- **Terminal 1**: `npm run dev` (Next.js on port 3000)
- **Terminal 2**: `npm run dev:sanity` (Sanity Studio on port 3333)

Then:
- View site: `http://localhost:3000`
- Edit content: `http://localhost:3333`
