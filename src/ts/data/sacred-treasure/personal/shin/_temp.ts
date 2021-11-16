import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType, Attribute} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '',
    styleType: StyleType.All,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: ''},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 1,
      name: '',
      skills: []
    }
  }
];

export default sacredTreasureList;
