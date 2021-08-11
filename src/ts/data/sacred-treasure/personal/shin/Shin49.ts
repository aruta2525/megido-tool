import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType, Attribute} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞リズムタクト',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '覚醒スキル、奥義が変化する。防御力が30%上昇する'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 49,
      name: 'サタナイル',
      skills: [
        {
          name: '【専】ピウ・ブリッランテ＋',
          type: SkillType.AwakeningSkill,
          attribute: Attribute.Sound,
          text:
            '3ターンの間、ターン終了時、敵全体へ攻撃力2.5倍の響撃ダメージを与え、さらに蓄積されている1ターン音符を最大4個まで1ターン延長するリザーブ状態になる',
          levels: [
            {
              level: 1,
              magnification: 2.5,
              hit: 1
            }
          ]
        },
        {
          name: '【専】ラ・ヌッラロンド＋',
          type: SkillType.Mysteries,
          attribute: Attribute.Sound,
          text: '敵横一列に攻撃力3.5倍の響撃ダメージ。さらに80%の確率で、2ターンの間、攻撃力を20%低下させる',
          levels: [
            {
              level: 1,
              magnification: 3.5,
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
