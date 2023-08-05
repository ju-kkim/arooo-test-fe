export function throttle(callback: () => void, delay: number) {
  let timer: NodeJS.Timeout | null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, delay);
    }
  };
}
