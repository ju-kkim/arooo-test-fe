import List from 'layout/List/List';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Content } from 'types/content';
import { fetchData } from 'utils/fetchData';
import { throttle } from 'utils/throttle';

const INIT_SKIP = 0;
const LIMIT = 10;
const DELAY = 500;
const INTERVAL = 300;

const Home = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEndData, setIsEndData] = useState(false);
  const skip = useRef(INIT_SKIP);

  const querySkip = `skip=${skip.current}`;
  const queryLimit = `limit=${LIMIT}`;
  const url = `/library/content?${querySkip}&${queryLimit}`;

  const fetchMoreData = useCallback(async () => {
    if (isEndData || isLoading) return;
    setIsLoading(true);

    try {
      const newContents = await fetchData<Content[]>(url);
      if (newContents.length < LIMIT) {
        setIsEndData(true);
      }
      setContents((prevContent) => [...prevContent, ...newContents]);
      skip.current += LIMIT;
    } catch (error) {
      throw new Error('ERROR CONTENTS');
    } finally {
      setIsLoading(false);
    }
  }, [isEndData, isLoading, url]);

  const scrollFetchMoreData = throttle(() => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - INTERVAL) {
      fetchMoreData();
    }
  }, DELAY);

  useEffect(() => {
    if (window.innerHeight >= document.documentElement.scrollHeight) {
      fetchMoreData();
    }
  }, [contents, fetchMoreData]);

  useEffect(() => {
    window.addEventListener('scroll', scrollFetchMoreData);
    return () => {
      window.removeEventListener('scroll', scrollFetchMoreData);
    };
  }, [scrollFetchMoreData]);

  return <main>{contents && <List contents={contents} />}</main>;
};

export default Home;
