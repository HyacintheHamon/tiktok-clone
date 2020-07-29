import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import Products from './Products';

import {Container, Actions, BoxAction, TextAction} from './styles';

interface Item {
  id: number;
  username: string;
  tags: string;
  music: string;
  likes: number;
  comments: number;
  uri: string;
}

interface Props {
  item: Item;
}

const Feed: React.FC<Props> = ({item}) => {
  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,.5)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '20%',
        }}
      />
      <Container>
        <Video
          source={item.source || {uri: item.uri}}
          rate={1.0}
          volume={1.0}
          muted
          resizeMode="cover"
          repeat
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Container>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.5)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '50%',
        }}
      />
      <Products />
      <Actions>
        <BoxAction>
          <AntDesign
            style={{alignSelf: 'center'}}
            name="eye"
            size={35}
            color="#fff"
          />
          <TextAction>{item.views}</TextAction>
        </BoxAction>
        <BoxAction>
          <AntDesign
            style={{alignSelf: 'center'}}
            name="heart"
            size={35}
            color="#fff"
          />
          <TextAction>{item.likes}</TextAction>
        </BoxAction>
        <BoxAction>
          <FontAwesome
            style={{alignSelf: 'center'}}
            name="commenting"
            size={35}
            color="#fff"
          />
          <TextAction>{item.comments}</TextAction>
        </BoxAction>
        <BoxAction>
          <FontAwesome
            style={{alignSelf: 'center'}}
            name="share"
            size={35}
            color="#ffffff"
          />
          <TextAction>Share</TextAction>
        </BoxAction>
      </Actions>
    </>
  );
};

export default Feed;
