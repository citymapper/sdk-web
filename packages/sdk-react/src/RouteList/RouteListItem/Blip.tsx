import React from 'react'
import IconBlip from '../../Icons/IconBlip'
import styled from '../../utils/cmStyled'

const BlipStyle = styled('div', { className: 'cm-departure-live-blip' })`
  display: flex;
  align-items: flex-start;
  align-self: flex-start;
  margin-right: ${({ theme }) => theme.spacing(0.5)};
  svg {
    width: 8px;
    height: 8px;
  }
  &.cm-departure-live-blip {
    ${({ theme }) => theme.CmDeparturesLive?.blip}
  }
`

const Blip = () => (
  <BlipStyle>
    <IconBlip />
  </BlipStyle>
)

export default Blip
