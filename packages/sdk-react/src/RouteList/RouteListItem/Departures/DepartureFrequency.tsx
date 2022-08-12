import styled from '@emotion/styled'
import React from 'react'

interface DepartureFrequencyProps {
  frequencyRange: [number, number]
  originStation: string
}

const Wrapper = styled('div')`
  &.cm-departure-frequency-root {
    ${({ theme }) => theme.CmDeparturesFrequency?.root}
  }
`

const Departures = styled.span`
  &.cm-departure-frequency-departures {
    ${({ theme }) => theme.CmDeparturesFrequency?.departures}
  }
`

const Station = styled.span`
  color: ${({ theme }) => theme.palette.tone.grey50.color};
  &.cm-departure-frequency-origin {
    ${({ theme }) => theme.CmDeparturesFrequency?.origin}
  }
`

const DepartureFrequency: React.FC<DepartureFrequencyProps> = ({
  frequencyRange,
  originStation,
}) => {
  const [freqStart, freqEnd] = frequencyRange
  const frequency =
    freqStart === freqEnd
      ? Math.ceil(freqStart / 60)
      : Math.ceil(freqStart / 60) + '-' + Math.ceil(freqEnd / 60)
  return (
    <Wrapper className="cm-departure-frequency-root">
      <Departures className="cm-departure-frequency-departures">
        Every {frequency} min
      </Departures>{' '}
      <Station className="cm-departure-frequency-origin">
        from {originStation}
      </Station>
    </Wrapper>
  )
}

export default DepartureFrequency
