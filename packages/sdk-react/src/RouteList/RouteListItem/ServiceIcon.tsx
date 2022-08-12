import type { VehicleType } from '@citymapper/api/@types'
import React from 'react'
import ModeIconBike from '../../Icons/Mode/ModeIconBike'
import ModeIconBRT from '../../Icons/Mode/ModeIconBRT'
import ModeIconCar from '../../Icons/Mode/ModeIconCar'
import ModeIconEScooter from '../../Icons/Mode/ModeIconEScooter'
import ModeIconFerry from '../../Icons/Mode/ModeIconFerry'
import ModeIconFunicular from '../../Icons/Mode/ModeIconFunicular'
import ModeIconGondola from '../../Icons/Mode/ModeIconGondola'
import ModeIconHelicopter from '../../Icons/Mode/ModeIconHelicopter'
import ModeIconMetro from '../../Icons/Mode/ModeIconMetro'
import ModeIconMotorScooter from '../../Icons/Mode/ModeIconMotorScooter'
import ModeIconRail from '../../Icons/Mode/ModeIconRail'
import ModeIconTram from '../../Icons/Mode/ModeIconTram'
import ModeIconTrolleybus from '../../Icons/Mode/ModeIconTrolleybus'
import ServiceIconBus from '../../Icons/Service/ServiceIconBus'
import SVGIcon from '../../Icons/SVGIcon'

export type ServiceBoxIconProps = {
  vehicleType: VehicleType
} & React.ComponentProps<typeof SVGIcon>

const ServiceIcon: React.FC<ServiceBoxIconProps> = ({
  vehicleType,
  ...props
}) => {
  switch (vehicleType) {
    case 'ebike':
    case 'bike':
      return <ModeIconBike data-vehicle={vehicleType} {...props} />
    case 'bus':
      return <ServiceIconBus data-vehicle={vehicleType} {...props} />
    case 'bus_rapid_transit':
      return <ModeIconBRT data-vehicle={vehicleType} {...props} />
    case 'escooter':
      return <ModeIconEScooter data-vehicle={vehicleType} {...props} />
    case 'ferry':
      return <ModeIconFerry data-vehicle={vehicleType} {...props} />
    case 'funicular':
      return <ModeIconFunicular data-vehicle={vehicleType} {...props} />
    case 'gondola':
      return <ModeIconGondola data-vehicle={vehicleType} {...props} />
    case 'helicopter':
      return <ModeIconHelicopter data-vehicle={vehicleType} {...props} />
    case 'light_rail':
      return <ModeIconRail data-vehicle={vehicleType} {...props} />
    case 'metro':
      return <ModeIconMetro data-vehicle={vehicleType} {...props} />
    case 'monorail':
      return <ModeIconRail data-vehicle={vehicleType} {...props} />
    case 'motorscooter':
      return <ModeIconMotorScooter data-vehicle={vehicleType} {...props} />
    case 'rail':
      return <ModeIconRail data-vehicle={vehicleType} {...props} />
    case 'subway':
      return <ModeIconMetro data-vehicle={vehicleType} {...props} />
    case 'streetcar':
      return <ModeIconCar data-vehicle={vehicleType} {...props} />
    case 'tram':
      return <ModeIconTram data-vehicle={vehicleType} {...props} />
    case 'trolley':
    case 'trolleybus':
      return <ModeIconTrolleybus data-vehicle={vehicleType} {...props} />
    default:
      return null
  }
}

export default ServiceIcon
