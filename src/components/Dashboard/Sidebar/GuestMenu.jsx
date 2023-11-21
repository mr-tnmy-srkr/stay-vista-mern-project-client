import { BsFingerprint } from "react-icons/bs";
import MenuItem from "./MenuItem";

const GuestMenu = () => {
  return (
    <dv>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="my-bookings"
      />
    </dv>
  );
};

export default GuestMenu;
