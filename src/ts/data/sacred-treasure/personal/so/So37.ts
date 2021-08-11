import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType, Attribute} from '../../../../enum/Megido';
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
      ability: {
        name: '断罪',
        text: '生存している味方が多いほど、受けるダメージを軽減する（最大25%）'
      },
      skills: [
        {
          name: '【専】不死鳥の羽ばたき+',
          type: SkillType.Mysteries,
          attribute: Attribute.Fire,
          text: '敵全体に攻撃力2.25倍の火ダメージ。さらに炎上地形を狂炎地形にし、戦闘不能の味方を、最大HPの35％で蘇生させる',
          levels: [
            {
              level: 1,
              magnification: 2.25,
              hit: 1
            }
          ],
          increment: 0.05
        }
      ]
    }
  }
];

export default sacredTreasureList;
