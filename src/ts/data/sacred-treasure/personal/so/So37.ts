import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>黒曜の処刑剣',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '特性・奥義が変化し、覚醒ゲージ-1。'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 37,
      name: 'フェニックス',
      megidoAbility: {
        name: '断罪',
        text: '生存している味方が多いほど、受けるダメージを軽減する（最大25%）'
      }
    }
  }
];

export default sacredTreasureList;
