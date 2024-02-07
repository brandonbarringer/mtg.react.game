import { Mana } from './types/Mana';
import { Color } from '@/common/types/Color';

export type { Mana }
export const WhiteMana: Mana = {
  type: Color.White,
  amount: 0
}

export const BlueMana: Mana = {
  type: Color.Blue,
  amount: 0
}

export const BlackMana: Mana = {
  type: Color.Black,
  amount: 0
}

export const RedMana: Mana = {
  type: Color.Red,
  amount: 0
}

export const GreenMana: Mana = {
  type: Color.Green,
  amount: 0
}

export const ColorlessMana: Mana = {
  type: Color.Colorless,
  amount: 0
}

export const GenericMana: Mana = {
  type: Color.Generic,
  amount: 0
}

export const DefaultMana: Mana[] = [
  WhiteMana,
  BlueMana,
  BlackMana,
  RedMana,
  GreenMana,
  ColorlessMana,
  GenericMana
]
