import styled from '@emotion/styled'

const SVGIcon = styled.svg`
  ${({ theme }) => theme.SVGIcon}
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

export default SVGIcon
