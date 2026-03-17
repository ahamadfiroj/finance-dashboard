import { STATUS_TONE } from "../../Pages/Dashboard/Dashbard.constant";
import { StatusBadgeWrapper } from "./StatusBadge.style";

const StatusBadge = ({ status }) => {
  return <StatusBadgeWrapper $tone={STATUS_TONE[status]}>{status}</StatusBadgeWrapper>;
};

export default StatusBadge;
