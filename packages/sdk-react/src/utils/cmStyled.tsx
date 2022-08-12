import isPropValid from '@emotion/is-prop-valid'
import { Theme } from '@emotion/react'
import styled, {
  CreateStyledComponent,
  FilteringStyledOptions,
} from '@emotion/styled'
import React from 'react'

/**
 * Your typical `styled` function but with the added ability of passing in a className. Import as `styled` not `cmStyled` to ensure prettier works!
 */
const cmStyled = <
  T extends keyof JSX.IntrinsicElements,
  ForwardedProps extends keyof JSX.IntrinsicElements[T] &
    string = keyof JSX.IntrinsicElements[T] & string
>(
  tag: T,
  options?: FilteringStyledOptions<JSX.IntrinsicElements[T], ForwardedProps> & {
    /**
     * The className to inject into the resulting component
     */
    className?: string
  }
): CreateStyledComponent<
  { theme?: Theme; as?: React.ElementType },
  Pick<JSX.IntrinsicElements[T], ForwardedProps>
> => {
  const className = options?.className
  if (className) {
    return styled((props: any) => {
      // prevent props that are invalid HTML props from making it to the DOM
      const safeProps = Object.keys(props)
        .filter((prop: string) => {
          return isPropValid(prop)
        })
        .reduce((result, key) => {
          return { ...result, [key]: props[key] }
        }, {} as object)
      return React.createElement(tag, {
        ...safeProps,
        className: `${className} ${props.className}`,
      })
    }, options)
  }
  return styled(tag, options)
}
export default cmStyled
