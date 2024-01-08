
export function formatTimeDifference(seconds){
    if (seconds < 60) {
      return `${Math.floor(seconds)} Seconds Ago`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} Minute${minutes > 1 ? 's' : ''} Ago`;
    } else{
      const hours = Math.floor(seconds / 3600);
      if(hours > 48) {
        const days = Math.floor(seconds / 86400);
        return `${days} day${days > 1 ? 's' : ''} Ago`;
      }else {
        return `${hours} hour${hours > 1 ? 's' : ''} Ago`;
      }
    }
  };