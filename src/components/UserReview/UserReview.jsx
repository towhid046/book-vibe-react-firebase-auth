import PropTypes from "prop-types";
import { CgProfile } from "react-icons/cg";

const UserReview = ({ rev }) => {
  return (
    <div className="border rounded-lg p-5 space-y-3 text-center">
      <div className="flex items-center gap-2 justify-center">
        <CgProfile className="text-2xl"/>
        <strong className="italic">{rev?.userName}</strong>
      </div>
        <hr className="max-w-xs mx-auto" />
      <p>
        {rev?.review}
      </p>
    </div>
  );
};

UserReview.propTypes = {
    rev: PropTypes.object.isRequired
};

export default UserReview;
