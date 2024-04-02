import { useEffect, useRef, useState } from "react";
import UserReview from "./../UserReview/UserReview";
import { toast } from "react-toastify";

const ReviewForm = () => {
  const reviewInputRef = useRef(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewInputRef.current.focus();
  }, []);

  const handelForm = (e) => {
    e.preventDefault();
    toast.success("Thank you for review our book");
    let newReview = {};
    newReview[e.target.review.name] = e.target.review.value;
    newReview[e.target.userName.name] = e.target.userName.value;
    setReviews([...reviews, newReview]);
    e.target.review.value = "";
    e.target.userName.value = "";
    e.target.userEmail.value = "";
  };

  return (
    <>
      <form onSubmit={handelForm} className="space-y-4 text-center">
        <label htmlFor="">
          <strong className="text-lg inline-block mb-2">Write a review:</strong>{" "}
          <br />
          <textarea
            rows={5}
            required
            name="review"
            ref={reviewInputRef}
            placeholder="Write your review about this book..."
            className="textarea textarea-bordered textarea-lg lg:w-8/12 w-full"
          ></textarea>
        </label>
        <br /> <br />
        <label htmlFor="">
          <strong className="text-lg inline-block mb-2">Rate this book:</strong>{" "}
          <br />
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </label>
        <br /> <br />
        <label htmlFor="">
          <strong className="text-lg inline-block mb-2">Your Name:</strong>{" "}
          <br />
          <input
            required
            name="userName"
            type="text"
            placeholder="Type Your Name"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <br /> <br />
        <label htmlFor="">
          <strong className="text-lg inline-block mb-2">Your Email:</strong>{" "}
          <br />
          <input
            name="userEmail"
            type="email"
            placeholder="Type Your Email"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <br /> <br />
        <input
          type="submit"
          htmlFor="my_modal_6"
          value="Submit Your Review"
          className="btn btn-success"
        />
      </form>

      <div className="py-16 space-y-5">
        {reviews.map((rev) => (
          <UserReview key={rev.review} rev={rev} />
        ))}
      </div>
    </>
  );
};

ReviewForm.propTypes = {};

export default ReviewForm;
