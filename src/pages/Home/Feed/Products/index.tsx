import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  ProductsContainer,
  ProductContainer,
  Heading,
  Description,
} from './style';

const items = [
  {
    id: 0,
    title: 'Ding Dong',
    description: 'description',
	},
  {
    id: 1,
    title: 'Ding Dong 2',
    description: 'description 2',
  },
  {
    id: 2,
    title: 'Ding Dong 3',
    description: 'description 3',
  },
];

const Product = ({item, index}) => {
  return (
    <ProductContainer>
      <Heading>{item.title}</Heading>
      <Description>{item.description}</Description>
    </ProductContainer>
  );
};

// const Products = () => {
//   return (
// 		<Carousel
// 			ref={(c) => { this._carousel = c; }}
// 			data={this.state.entries}
// 			renderItem={this._renderItem}
// 			sliderWidth={sliderWidth}
// 			itemWidth={itemWidth}
// 		/>
//     <ProductsContainer>
//       <Product />
//     </ProductsContainer>
//   );
// };

const Products = () => {
  // _renderItem = ({item, index}) => {
  //   return (
  //     <View>
  //       <Text style={styles.title}>{item.title}</Text>
  //     </View>
  //   );
  // };

  return (
    <ProductsContainer>
      <Carousel
        // ref={c => {
        //   this._carousel = c;
				// }}
				inactiveSlideScale={1}
        data={items}
        renderItem={Product}
        sliderWidth={Dimensions.get('window').width}
				itemWidth={Dimensions.get('window').width * 0.9}
				activeSlideAlignment={'start'}
      />
    </ProductsContainer>
  );
};

export default Products;
