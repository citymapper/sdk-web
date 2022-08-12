import styled from '../utils/cmStyled'

interface LoadingSkeletonProps {
  width: number | string
  height: number | string
  /**
   * Number of ms to delay the animation
   */
  animationDelay?: number
}

const LoadingSkeleton = styled('div', {
  className: 'cm-loading-skeleton',
})<LoadingSkeletonProps>`
  display: inline-block;
  height: ${({ height }) =>
    typeof height === 'number' ? height + 'px' : height};
  width: ${({ width }) => (typeof width === 'number' ? width + 'px' : width)};
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.tone.grey10.color};

  animation: shimmer 3s infinite;
  animation-delay: ${({ animationDelay }) => animationDelay}ms;

  @keyframes shimmer {
    0% {
      opacity: 1;
    }
    8% {
      opacity: 0.5;
    }
    16% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  &.cm-loading-skeleton {
    ${({ theme }) => theme.CmLoadingSkeleton}
  }
`

LoadingSkeleton.defaultProps = {
  animationDelay: 0,
}

export default LoadingSkeleton
