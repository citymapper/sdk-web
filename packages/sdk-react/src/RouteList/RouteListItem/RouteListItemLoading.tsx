import React from 'react'
import LoadingSkeleton from '../../LoadingSkeleton'
import { Row } from './RouteListItemDetails'

interface RouteListItemLoadingProps {
  index?: number
}

const RouteListItemLoading: React.FC<RouteListItemLoadingProps> = ({
  index = 0,
}) => {
  const animationDelay = index * 100
  return (
    <>
      <Row>
        <LoadingSkeleton
          width={100}
          height={24}
          animationDelay={animationDelay}
        />
        <LoadingSkeleton
          width={50}
          height={20}
          animationDelay={animationDelay}
        />
      </Row>
      <Row>
        <LoadingSkeleton
          width="75%"
          height={12}
          animationDelay={animationDelay}
        />
        <LoadingSkeleton
          width="15%"
          height={12}
          animationDelay={animationDelay}
        />
      </Row>
    </>
  )
}

export default RouteListItemLoading
