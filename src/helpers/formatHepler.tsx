export const formatTime = (time: string) => {
  const date = new Date(time);
  return date.toLocaleTimeString();
};

export const formatDate = (time: string) => {
  const date = new Date(time);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const formatTimeAgo = (time: string) => {
  const date = new Date(time);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} ngày trước`;
  }

  if (hours > 0) {
    return `${hours} giờ trước`;
  }

  if (minutes > 0) {
    return `${minutes} phút trước`;
  }

  return `${seconds} giây trước`;
};

export const formatPrice = (price: number) => {
  return price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};
