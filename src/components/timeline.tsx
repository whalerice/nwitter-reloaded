import {
  collection,
  //   getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";

export interface ITweet {
  id: string;
  createdAt: number;
  photo?: string;
  tweet: string;
  userId: string;
  username: string;
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  overflow-y: scroll;
`;

export default function Timeline() {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchTweets = async () => {
      const tweetsQuery = query(
        collection(db, "tweets"),
        orderBy("createdAt", "desc"),
        limit(25)
      );
      /* const snapshot = await getDocs(tweetsQuery);
        const list = snapshot.docs.map((doc) => {
          const { createdAt, photo, tweet, userId, username } = doc.data();
          return {
            createdAt,
            photo,
            tweet,
            userId,
            username,
            id: doc.id,
          };
        }); */
      unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
        const list = snapshot.docs.map((doc) => {
          const { createdAt, photo, tweet, userId, username } = doc.data();
          return {
            createdAt,
            photo,
            tweet,
            userId,
            username,
            id: doc.id,
          };
        });
        setTweets(list);
      });
    };
    fetchTweets();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);
  return (
    <Wrapper>
      {tweets.map((item) => (
        <Tweet key={item.id} {...item} />
      ))}
    </Wrapper>
  );
}
