import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const ProductsContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  z-index: 10;
`;

export const ProductContainer = styled.View`
  height: 100px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 0 0 20px;
`;

export const Heading = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin: 0;
  padding: 0;
`;

export const Description = styled.Text`
  font-size: 13px;
  color: #fff;
  margin: 7px 0 0 0;
  padding: 0;
`;
