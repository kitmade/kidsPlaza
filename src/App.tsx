/* eslint-disable react-hooks/exhaustive-deps */
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import {Review, ReviewWithId, useReviews} from './hooks/useReviews';
import {makeid} from './utils/common';
import {Provider} from 'react-redux';
import {store} from './store';
import {SignInScreen} from './screens';

interface AppProps {}

const ReviewItem = ({
  id,
  customer_name,
  point,
  created_at,
  review,
  onDelete,
  onEdit,
}: ReviewWithId & {
  onDelete: (id: string) => void;
  onEdit: (id: string, review: string) => Promise<void>;
}) => {
  const [isEdit, setEdit] = useState(false);
  const textRef = useRef('');

  return (
    <TouchableOpacity
      onLongPress={() => onDelete(id)}
      onPress={() => setEdit(true)}>
      <Text>{customer_name}</Text>
      {isEdit ? (
        <>
          <TextInput
            defaultValue={review}
            style={{borderWidth: 1, paddingVertical: 8}}
            onChangeText={text => (textRef.current = text)}
          />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Button title="Cancel" onPress={() => setEdit(false)} />
            <Button
              title="Submit"
              onPress={() =>
                onEdit(id, textRef.current).then(() => {
                  setEdit(false);
                })
              }
            />
          </View>
        </>
      ) : (
        <Text>{review}</Text>
      )}
      <Text>{point}</Text>
      <Text>{new Date(created_at).toLocaleString()}</Text>
    </TouchableOpacity>
  );
};

const ReviewList = forwardRef(({}, ref) => {
  const {
    reviews,
    limit,
    length,
    fetchMore,
    deleteReview,
    editReview,
    addNewReview,
  } = useReviews({isFetch: true});

  useImperativeHandle(
    ref,
    () => ({
      addNewReview,
    }),
    [],
  );

  return (
    <FlatList
      ListHeaderComponent={<Text>{limit + 'li : le' + length}</Text>}
      data={reviews}
      extraData={reviews}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ReviewItem {...item} onDelete={deleteReview} onEdit={editReview} />
      )}
      onEndReached={fetchMore}
      // onEndReachedThreshold={0.5}
    />
  );
});

const App = ({}: AppProps) => {
  const reviewListRef = useRef<{addNewReview: (review: Review) => void}>(null);
  const textRef = useRef('');
  const newReview = () => {
    reviewListRef.current?.addNewReview({
      customer_name: makeid(7),
      point: Math.random() * 10,
      rest_name: makeid(5),
      review: textRef.current,
      created_at: new Date().toISOString(),
    });
  };
  return (
    <Provider store={store}>
      <SignInScreen />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
