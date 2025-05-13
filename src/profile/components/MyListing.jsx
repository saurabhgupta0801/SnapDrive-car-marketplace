import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CarItem from '@/components/CarItem';
import { useUser } from '@clerk/clerk-react';
import { db } from '../../../configs';
import { CarImages, CarListing } from '../../../configs/schema';
import { eq, desc } from 'drizzle-orm';
import Service from '@/Shared/Service';

function MyListing() {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (user) {
      getUserCarListing();
    }
  }, [user]);

  const getUserCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id));

    const formatted = Service.FormatResult(result);
    setCarList(formatted);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this car?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`/api/cars/${id}`); // Make sure this matches your backend
      toast.success('Car deleted successfully');
      setCarList((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Delete error:', error.response?.data || error.message);
      toast.error('Failed to delete the car');
    }
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Link to="/add-listing">
          <Button>+ Add New Listing</Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
        {carList.map((item, index) => (
          <div key={index}>
            <CarItem car={item} />
            <div className="p-2 bg-gray-50 rounded-lg flex justify-between gap-3">
              <Link to={`/add-listing?mode=edit&id=${item?.id}`} className="w-full">
                <Button variant="outline" className="w-full">Edit</Button>
              </Link>
              <Button variant="destructive" onClick={() => handleDelete(item.id)}>
                <FaTrashAlt />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default MyListing;
