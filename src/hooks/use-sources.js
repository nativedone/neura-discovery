import { useState, useEffect, useCallback } from "react";

const OPTIONS = {
  portrait: "(orientation:portrait)",
  landscape: "(orientation:landscape)",
  large_mobile_and_under: "(max-width: 576px)",
};

export function useSources({
  mediaQueryType,
  matchingSuccessData,
  matchingFailData,
  defaultData,
}) {
  const [source, setSource] = useState(() => defaultData);

  const updateSource = useCallback(() => {
    if (window.matchMedia(OPTIONS[mediaQueryType]).matches) {
      setSource(matchingSuccessData);
    } else {
      setSource(matchingFailData);
    }
    }, [mediaQueryType, matchingSuccessData, matchingFailData]);

  useEffect(() => {
    updateSource();

    window.addEventListener("resize", updateSource);
    window.addEventListener("orientationchange", updateSource);

    // Remove event lister when component unmounts
    return () => {
      window.removeEventListener("resize", updateSource);
      window.removeEventListener("orientationchange", updateSource);
    };
  }, [updateSource]);

  return source;
}
