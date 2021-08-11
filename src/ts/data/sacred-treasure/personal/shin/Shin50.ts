import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType, Attribute} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>金色の魔杖',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '特性が変化。HPが20%上昇（Lv70で6943）し、アタックが雷ダメージになる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 50,
      name: 'シャミハザ',
      ability: {
        name: '	テラインストール',
        text: 'HPが75%以下のとき、攻撃力が25%上昇する'
      },
      skills: [
        {
          name: '【専】アタック',
          type: SkillType.Attack,
          attribute: Attribute.Thunder,
          levels: [
            {
              level: 1,
              magnification: 1,
              hit: 1
            }
          ]
        }
      ]
    }
  }
];

export default sacredTreasureList;
