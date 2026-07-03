export type StatusKey =
  | "active"
  | "inactive"
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled";

export type StatusInfo = {
  color: string;
  text: string;
};

export const getStatusActive = () => {
  const map: Record<StatusKey, StatusInfo> = {
    active: {
      color: "green",
      text: "Hoạt động",
    },
    inactive: {
      color: "red",
      text: "Ngưng hoạt động",
    },
    pending: {
      color: "orange",
      text: "Chờ xác nhận",
    },
    confirmed: {
      color: "green",
      text: "Đã xác nhận",
    },
    completed: {
      color: "blue",
      text: "Hoàn thành",
    },
    cancelled: {
      color: "red",
      text: "Đã hủy",
    },
  };

  const StatusActive = (status: StatusKey) => {
    return map[status];
  };
  return StatusActive;
};
