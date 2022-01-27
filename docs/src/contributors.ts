import contributors from '../contributors.json'

export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam {
  avatar: string
  name: string
  github: string
  twitter?: string
  sponsors: boolean
  description: string
}

const contributorsAvatars: Record<string, string> = {}

const contributorList = (contributors as Array<[string, string]>).reduce((acc, [name, avatar]) => {
  contributorsAvatars[name] = avatar
  acc.push({ name, avatar })
  return acc
}, [] as Contributor[])

const coreTeamMembers: CoreTeam[] = [
  {
    avatar: contributorsAvatars.antfu,
    name: 'Anthony Fu',
    github: 'antfu',
    twitter: 'antfu7',
    sponsors: true,
    description: 'A fanatical open sourceror<br>Core team member of Vite & Vue<br>Working at NuxtLabs',
  },
  {
    avatar: contributorsAvatars['patak-dev'],
    name: 'Patak',
    github: 'patak-dev',
    twitter: 'patak-dev',
    sponsors: true,
    description: 'A collaborative being<br>Core team member of Vite<br>Team member of Vue',
  },
  {
    avatar: contributorsAvatars.Aslemammad,
    name: 'Aslemammad',
    github: 'Aslemammad',
    twitter: 'asleMammadam',
    sponsors: false,
    description: 'An open source developer<br>Team member of Poimandres and Vike',
  },
  {
    avatar: contributorsAvatars['sheremet-va'],
    name: 'Vladimir',
    github: 'sheremet-va',
    twitter: 'sheremet_va',
    sponsors: false,
    description: 'An open source fullstack developer',
  },
  {
    avatar: contributorsAvatars.Demivan,
    name: 'Ivan Demchuk',
    github: 'Demivan',
    twitter: 'IvanDemchuk',
    sponsors: false,
    description: 'An open source fullstack developer',
  },
  {
    avatar: contributorsAvatars.userquin,
    name: 'Joaquín Sánchez',
    github: 'userquin',
    twitter: 'userquin',
    sponsors: false,
    description: 'A fullstack and android developer<br>Vite\'s fanatical follower',
  },
]

export { coreTeamMembers, contributorList as contributors }
