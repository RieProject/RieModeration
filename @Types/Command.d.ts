import { PermissionString } from 'discord.js'

export interface CommandOptions {
  name: string | string[]
  description: string
  args?: Arguments[]
  botPermission?: PermissionString[]
  userPermission?: PermissionString[]
  enableDM?: boolean
  ownerOnly?: boolean
  cooldown?: number

  /**
   * Auto generated when imported
   */
  usage?: string
}

export interface Arguments {
  optional?: string[] | string
  required?: string[] | string
}
