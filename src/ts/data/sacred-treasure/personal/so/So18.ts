import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>人工蛭砲',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '特性・覚醒スキル・奥義が変化'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 18,
      name: 'バティン',
      megidoAbility: {
        name: 'お注射の時間です',
        text: '戦闘開始時、3ターンの間、ターン終了時に味方全体のHPが15%回復する効果を付与する'
      }
    }
  }
];

export default sacredTreasureList;
