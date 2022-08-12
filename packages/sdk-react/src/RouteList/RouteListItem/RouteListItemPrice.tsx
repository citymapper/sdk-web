import type { Price } from '@citymapper/api/@types'
import React from 'react'
import styled from '../../utils/cmStyled'

export interface RouteListItemPriceProps {
  price: Price
}

const Wrapper = styled('div', { className: 'cm-route-price-root' })`
  font-weight: 600;
  font-size: 0.8125em;
  line-height: 0.983125em;
  margin-top: 2px;
  margin-left: ${({ theme }) => theme.spacing(1)};
  margin-right: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.brand.primary.color};

  &.cm-route-price {
    ${({ theme }) => theme.CmRoutePrice?.root}
  }
`

const RouteListItemPrice: React.FC<RouteListItemPriceProps> = ({ price }) => {
  return <Wrapper>{price.formatted}</Wrapper>
}

export default RouteListItemPrice
