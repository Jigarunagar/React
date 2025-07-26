import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const StarColor = () => {
    if (rating === 0) return "text-yellow-400";
    if (rating < 3) return "text-red-600";
    if (rating < 5) return "text-yellow-400";
    return "text-green-600";
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <section className="flex flex-col items-center">
        <h1>This is Comment-Review</h1>
        <div className={`flex items-center space-x-1 text-4xl ${StarColor()}`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
              className="focus:outline-none"
            >
              {star <= (hover || rating) ? <FaStar /> : <FaRegStar />}
            </button>
          ))}
        </div>
        <p className="mt-4 text-lg text-gray-700">Rating: {rating} / 5</p>
      </section>
    </div>
  );
};

export default Star;
