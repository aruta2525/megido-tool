import {EffectTarget} from '../enum/Megido';

// 特性インターフェース
export interface IAbility {
  name: string;
  text: string; // 説明文
  params?: IAbilityParam[];
}

// 特性効果インターフェース
export interface IAbilityParam {
  target: EffectTarget;
  value: number;
  condition?: {
    target: number;
    inequalitySign: number;
  };
}
