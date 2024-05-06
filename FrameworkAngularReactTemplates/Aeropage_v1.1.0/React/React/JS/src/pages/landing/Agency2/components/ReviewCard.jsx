import { LuStar } from "react-icons/lu";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div className="max-w-xl p-6 rounded-md border border-default-200 bg-default-50">
        <div className="flex items-center gap-5">
          <img
            src={review.image}
            className="h-16 w-16 rounded-full border-4 border-default-200"
          />
          <h3 className="text-lg font-medium text-default-950">
            {review.name}
          </h3>
        </div>
        <p className="text-xl my-5 text-default-600">{review.description}</p>
        <div className="flex items-center gap-1">
          <LuStar className="h-5 w-5 stroke-yellow-400" />
          <LuStar className="h-5 w-5 stroke-yellow-400" />
          <LuStar className="h-5 w-5 stroke-yellow-400" />
          <LuStar className="h-5 w-5 stroke-yellow-400" />
          <LuStar className="h-5 w-5 stroke-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
