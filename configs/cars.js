import express from 'express';
import { db } from '../configs'; // adjust path as needed
import { CarListing, CarImages } from '../configs/schema';
import { eq } from 'drizzle-orm';

const router = express.Router();

// DELETE /api/cars/:id
router.delete('/api/cars/:id', async (req, res) => {
  const carId = parseInt(req.params.id);

  if (isNaN(carId)) {
    return res.status(400).json({ error: 'Invalid car ID' });
  }

  try {
    // First delete associated images
    await db.delete(CarImages).where(eq(CarImages.carListingId, carId));

    // Then delete the car listing
    await db.delete(CarListing).where(eq(CarListing.id, carId));

    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    console.error('Delete failed:', error);
    res.status(500).json({ error: 'Failed to delete car listing' });
  }
});

export default router;
