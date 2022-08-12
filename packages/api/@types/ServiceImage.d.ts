interface ServiceImageBase {
  url: string
  ui_role: 'service'
  width?: number
  height?: number
  pixel_ratio?: number
  format?: string
  replaces_name?: boolean
}

export type ServiceImage = ServiceImageBase
