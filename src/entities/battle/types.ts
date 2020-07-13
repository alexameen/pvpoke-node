import { BattlePlayer } from '../player/types';
import { Pokemon } from '../pokemon/types';
import { TurnMessage,TimelineAction } from '../timeline/types';

export enum ScenarioType {
  BOTH_BAIT    = 'both_bait',
  NEITHER_BAIT = 'neither_bait',
  NO_BAIT      = 'no_bait',
  FARM         = 'farm'
}

export type Scenario = {
  opponent: BattlePlayer
  name: ScenarioType
  matchups: number[]
  average: number
  minShields: number
}

export type RosterPerformance = {
  pokemon: Pokemon
  scenarios: Scenario[]
  average: number
}

export enum DecisionOptionType {
  BASIC                    = 'basic',
  BEST                     = 'best',
  COUNTER                  = 'counter',
  UNBALANCED               = 'unbalanced',
  SAME_TEAM                = 'same_team',
  SAME_TEAM_DIFFERENT_LEAD = 'same_team_different_lead',
  COUNTER_LAST_LEAD        = 'counter_last_lead'
}

export type DecisionOption = {
  decisionType: DecisionOptionType
  weight: number
}

export enum BattleMode { SIMULATE = 'simulate', EMULATE = 'emulate' }
export enum BattleEndCondition { FIRST_FAINT = 'first', BOTH_FAINT = 'both' }

export type BattleRating = {}
export type BattlePhase  = {}
export enum BattlePhaseProperty {}

type PhaseTimeoutFunction = () => void

export type Battle = {
  pokemon: [Pokemon, Pokemon]
  players: [BattlePlayer, BattlePlayer]
  turnMessages: [TurnMessage]
  // turnAnimations: [Animation] /* FIXME */
  turnActions: [TimelineAction]
  queuedActions: [TimelineAction]
  automated: boolean /* In PvPoke this is "sandbox" mode */

  timeline: [TimelineAction]
  time: number
  turns: number
  lastTurn: number
  deltaTime: number

  duration: number
  battleRatings: [BattleRating]
  turnsToWin: number
  winner: BattlePlayer

  battleEndCondition: BattleEndCondition
  phase: BattlePhase
  phaseProps: [BattlePhaseProperty]
  phaseTimeout: PhaseTimeoutFunction
  mainLoopInterval: number
  isPaused: boolean
  sixtySecondMarked: boolean

  roundChargedMoveUsed: boolean
  roundChargedMovesInitiated: boolean
  roundShieldUsed: boolean

  chargedMinigameTime: number
  usePriority: boolean

  chargeAmount: number
  playerUseShield: boolean

                /* [HP    , Energy], [HP    , Energy] */
  startingValues: [[number, number], [number, number]]

  buffChanceModifier: number /* 0.0 ... 1.0 */

  // updateCallback: InterfaceCallbackFunction /* FIXME */
}
