import { cx } from '@emotion/css'
import React from 'react'
import { RouteListProps } from '..'
import styled from '../../utils/cmStyled'
import RouteListItemDetails, {
  RouteListItemDetailsProps,
} from './RouteListItemDetails'
import RouteListItemLoading from './RouteListItemLoading'

type MakeUndefined<Type> = {
  [Property in keyof Type]?: undefined
}

type RouteListItemPropsBase = RouteListItemDetailsProps &
  Pick<
    RouteListProps,
    'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'isSelected'
  >

export type RouteListItemProps =
  | (RouteListItemPropsBase & {
      isLoading?: false
      index?: undefined
    })
  | (MakeUndefined<RouteListItemPropsBase> & {
      isLoading: true
      index?: number
    })

const Wrapper = styled('button', {
  className: 'cm-route-list-item-root',
})`
  appearance: none;
  background-color: transparent;
  border: none;
  font: inherit;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1.5)};

  &.cm-route-list-item-root--details {
    &:hover {
      background-color: ${({ theme }) => theme.palette.tone.grey1.color};
    }

    &.selected {
      outline: none;
      box-shadow: inset 0px 0px 0px 3px rgba(15, 105, 240, 0.5);
    }
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:not(:last-child) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.palette.tone.grey10.color};
  }

  &.cm-route-list-item-root {
    &--loading {
      .cm-route-list-item-row {
        justify-content: space-between;

        &:not(:last-of-type) {
          margin-bottom: ${({ theme }) => theme.spacing(1)};
        }
      }
    }
    ${({ theme }) => theme.CmRouteListItem?.root}
  }
`

const RouteListItem: React.FC<RouteListItemProps> = ({
  isLoading,
  onClick,
  onMouseEnter,
  onMouseLeave,
  index,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (!isLoading && props.route) {
      if (onClick) {
        onClick(e, props.route)
      }
    }
  }

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!isLoading && props.route) {
      if (onMouseEnter) {
        onMouseEnter(e, props.route)
      }
    }
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!isLoading && props.route) {
      if (onMouseLeave) {
        onMouseLeave(e, props.route)
      }
    }
  }

  const WrapperComponent = Wrapper.withComponent(
    !isLoading && onClick ? 'button' : 'div'
  )

  return (
    <WrapperComponent
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cx('cm-route-list-item-root', {
        'cm-route-list-item-root--loading': isLoading,
        'cm-route-list-item-root--details': !isLoading,
        selected: props.isSelected,
      })}
    >
      {isLoading === true || !props.route ? (
        <RouteListItemLoading index={index} />
      ) : (
        <RouteListItemDetails {...props} />
      )}
    </WrapperComponent>
  )
}

export default RouteListItem
