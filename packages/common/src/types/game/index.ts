import type { MEDIA_TYPES } from "@razzia/common/constants"

export interface Player {
  id: string
  clientId: string
  connected: boolean
  username: string
  avatar?: string
  points: number
  streak: number
}

export interface Answer {
  playerId: string
  answerId: number
  answerIds?: number[]
  points: number
}

export type QuestionMediaType =
  | (typeof MEDIA_TYPES)[keyof typeof MEDIA_TYPES]
  | undefined

export interface QuestionMedia {
  type?: QuestionMediaType
  url: string
}

export interface Question {
  question: string
  question_i18n?: Record<string, string>
  media?: QuestionMedia
  answers: string[]
  answers_i18n?: Record<string, string[]>
  solutions: number[]
  multiSelect?: boolean
  cooldown: number
  time: number
}

export interface Quizz {
  subject: string
  subject_i18n?: Record<string, string>
  questions: Question[]
}

export type QuizzWithId = Quizz & { id: string }

export interface QuizzMeta {
  id: string
  subject: string
}

export interface GameUpdateQuestion {
  current: number
  total: number
}

export interface PlayerAnswerRecord {
  playerName: string
  answerId: number | null
  answerIds?: number[]
}

export type QuestionResult = Question & {
  playerAnswers: PlayerAnswerRecord[]
}

export interface GameResultPlayer {
  username: string
  avatar?: string
  points: number
  rank: number
}

export interface GameResult {
  id: string
  subject: string
  subject_i18n?: Record<string, string>
  date: string
  players: GameResultPlayer[]
  questions: QuestionResult[]
}

export interface GameResultMeta {
  id: string
  subject: string
  date: string
  playerCount: number
}
