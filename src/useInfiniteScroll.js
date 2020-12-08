import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  function handleScroll() {
    const observer = new IntersectionObserver(updateList, {
    root: document.body,
    rootMargin: `150px`,
    threshold: 1,
    });
    

    const target = document.getElementById(`newsList`);
    if(!target) return
    observer.observe(target);
    
    function updateList(entries, observer) {
    setIsFetching(true);
    }
    }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;