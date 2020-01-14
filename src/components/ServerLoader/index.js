import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'



export const CatalogHorizontal = props => (
  <ContentLoader height={280} width={500} speed={2} {...props}>
      <Circle cx="70" cy="50" r="30" />
      <Rect x="0" y="90" rx="0" ry="0" width="140" height="25" />
      <Circle cx="230" cy="50" r="30" />
      <Rect x="160" y="90" rx="0" ry="0" width="140" height="25" />
      <Circle cx="390" cy="50" r="30" />
      <Rect x="320" y="90" rx="0" ry="0" width="140" height="25" />
  </ContentLoader>
)

export const BlogItem = props => (
  <ContentLoader height={280} width={500} speed={3} {...props}>
    <Rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
    <Rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
    <Rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
    <Rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
  </ContentLoader>
)

export const CalloutStripLoader = props => {
  return (
    <ContentLoader height={31} width={400} speed={1} {...props}>
      <Rect height="5.5" rx="1" ry="1" width="340" x="31" y="5" />
      <Rect height="5.5" rx="1" ry="1" width="340" x="31" y="15" />
      <Circle cx="388" cy="12" r="12" />
      <Rect height="24" rx="0" ry="0" width="24" x="0" y="0" />
    </ContentLoader>
  )
}

export const ThreeDots = props => (
  <ContentLoader height={100} width={300} speed={1} {...props}>
    <Circle cx="150" cy="86" r="8" />
    <Circle cx="194" cy="86" r="8" />
    <Circle cx="238" cy="86" r="8" />
  </ContentLoader>
)