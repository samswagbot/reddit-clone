import { useState, useEffect } from "react";
export const useTimeAgo = (createdAt) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const diff = Date.now() - new Date(createdAt * 1000);
    const mins = Math.round(diff / 1000 / 60);
    const hours = Math.round(diff / 1000 / 60 / 60);
    const days = Math.round(diff / 1000 / 60 / 60 / 24);

    if (hours > 23) {
      setTimeAgo(`${days} day`);
    } else if (mins < 60) {
      setTimeAgo(`${mins} mins`);
    } else {
      setTimeAgo(`${hours} hours`);
    }
  }, [createdAt]);

  return timeAgo;
};
