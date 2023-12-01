/* eslint-disable react-hooks/exhaustive-deps */
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

export type Review = {
  customer_name: string;
  review: string;
  point: number;
  rest_name: string;
  created_at: string;
};

export interface ReviewWithId extends Review {
  id: string;
}

type Output = {
  limit: number;
  length: number;
  reviews: ReviewWithId[];
  addNewReview: (review: Review) => void;
  deleteReview: (id: string) => void;
  editReview: (id: string, review: string) => Promise<void>;
  fetchMore: () => void;
};

const reviewCollection = firestore().collection<Review>('reviews');

export const useReviews = ({
  isFetch = false,
}: Partial<{isFetch: boolean}>): Output => {
  const [reviews, setReviews] = useState<ReviewWithId[]>([]);
  const [lastReview, setLastReview] =
    useState<FirebaseFirestoreTypes.QueryDocumentSnapshot<Review>>();
  const [fetch, setFetch] = useState(isFetch);
  const [limit, setLimit] = useState(6);
  const [length, setLength] = useState(0);
  useEffect(() => {
    if (fetch) {
      fetchData();
    }
  }, [fetch]);

  const fetchData = async () => {
    try {
      let query = reviewCollection.orderBy('created_at', 'desc');
      if (lastReview) {
        query = reviewCollection.startAfter(lastReview);
      }
      const [snapshot, count] = await Promise.all([
        query.limit(limit).get(),
        reviewCollection.count().get(),
      ]);
      const fullDocsLength = count.data().count;
      setReviews(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
      setLength(fullDocsLength);
      setFetch(false);
    } catch (e) {
      setFetch(false);
    }
  };

  const addNewReview = async (review: Review) => {
    try {
      await reviewCollection.add(review);
      setFetch(true);
    } catch (e) {}
  };

  const deleteReview = async (id: string) => {
    if (id !== undefined) {
      try {
        await reviewCollection.doc(id).delete();
        setFetch(true);
      } catch (e) {}
    }
  };

  const editReview = async (id: string, review: string): Promise<void> => {
    try {
      await reviewCollection.doc(id).update({
        review,
      });
      setFetch(true);
    } catch (e) {}
  };

  const fetchMore = () => {
    if (length > limit) {
      setLimit(limit * 2);
      setFetch(true);
    }
  };

  return {
    reviews,
    limit,
    length,
    addNewReview,
    deleteReview,
    editReview,
    fetchMore,
  };
};
