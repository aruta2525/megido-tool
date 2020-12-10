import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>血濡れの龍爪',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {
      value: 0,
      text:
        '戦闘開始時、自身を剛剣状態にする。自身にフォトンが与えられなかった場合、ターン終了時、自身を剛剣状態にする。剛剣状態：フォトンによる攻撃に、ダメージ200%上昇・防御貫通・ダメージ軽減無効が発生する特殊状態'
    },
    personal: {
      clockType: ClockType.So,
      megidoNo: 26,
      name: 'ブネ'
    }
  }
];

export default sacredTreasureList;
