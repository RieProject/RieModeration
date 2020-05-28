import { PermissionString } from 'discord.js'

export interface CommandOptions {
  name: string | string[]
  description: string
  args?: Arguments[]
  botPermission?: PermissionString | PermissionString[]
  userPermission?: PermissionString | PermissionString[]

  // Auto generated
  usage?: string
  denial?: string
}

export interface Arguments {
  isFlag: boolean
  optional: boolean
  content: string
}
