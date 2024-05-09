import { useEffect, useRef, useCallback } from "react";
import { Stack, CircularProgress as Loader } from "@mui/material";

type InfiniteScrollProps = {
  callback: () => void;
};

export default function InfiniteScroll({ callback }: InfiniteScrollProps) {
  const loaderRef = useRef<HTMLElement>();

  const memoizedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.intersectionRatio > 0) {
            memoizedCallback();
          }
        });
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 0,
      }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      observer.disconnect();
    };
  }, [memoizedCallback]);

  return (
    <>
      <Stack alignItems="center" width="100%">
        <Loader ref={loaderRef} />
      </Stack>
    </>
  );
}