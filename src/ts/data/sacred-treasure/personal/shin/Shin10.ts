import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType, Attribute} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>セタリアの杖',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '特性、スキル、奥義が変化する。アタックが雷ダメージになる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 10,
      name: 'グリマルキン',
      ability: {
        name: 'バチバチしますニャ',
        text: '自身が雷ダメージを与えたとき、対象のエレキレベルが25以下ならエレキレベルの上昇量を＋2する（連続ダメージは1回としてカウントする）'
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
        },
        {
          name: '【専】ねこねこパニック！＋',
          type: SkillType.Skill,
          attribute: Attribute.Thunder,
          text: '敵単体に攻撃力1.25倍の雷ダメージ。さらにエレキ状態を付与し、2ターンの間、荷電状態にする',
          levels: [
            {
              level: 1,
              magnification: 1.25,
              hit: 1
            }
          ]
        },
        {
          name: '【専】プァプァランブル！＋',
          text: `敵単体に攻撃力5.25倍の雷ダメージ。さらにエレキ状態を解除し、攻撃直前のエレキレベルに応じて味方全体に効果を付与<br>
              【エレキレベル0～24】HP15%回復＋ダメージ15%軽減（2ターン）<br>
              【エレキレベル25以上】HP30%回復＋ダメージ30%軽減（2ターン）`,
          type: SkillType.Mysteries,
          attribute: Attribute.Thunder,
          levels: [
            {
              level: 1,
              magnification: 5.25,
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
