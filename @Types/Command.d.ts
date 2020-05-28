import { PermissionString } from 'discord.js'

export interface CommandOptions {
  name: string | string[]
  description: string
  args?: Arguments[]
  botPermission?: PermissionString
  userPermission?: PermissionString
  enableDM?: boolean

  /**
   * Auto generated when imported
   */
  usage?: string
}

export interface Arguments {
  isFlag: boolean
  name: string
  defaultValue?: string
}
