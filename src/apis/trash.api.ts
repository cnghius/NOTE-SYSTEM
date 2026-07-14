import api from "../configs/config";

// 1. Lấy danh sách rác
export const getTrashList = (resource: string) => {
  return api.get(`/${resource}`).then((res) => res.data);
};

// 2. Khôi phục một mục từ Thùng rác (Sử dụng ID của bản ghi Trash)
export const restoreTrashItem = (resource: string, id: string) => {
  return api.patch(`/${resource}/restore/${id}`).then((res) => res.data);
};

// 3. Xóa vĩnh viễn một mục khỏi Thùng rác
export const deleteTrashForever = (resource: string, id: string) => {
  return api.delete(`/${resource}/${id}`).then((res) => res.data);
};
