import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞憤怒の旗印',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '特性、覚醒スキルが変化する'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 13,
      name: 'ベレト',
      ability: {
        name: '憤怒の瞳',
        text: 'バーサーク時、毎ターン開始時にアタックフォトンを1つ追加する'
      },
      skills: [
        {
          name: '【専】狂喜の怒り＋',
          type: SkillType.AwakeningSkill,
          text:
            '自身の攻撃力を1ターンの間、50%上昇。毎ターン最大HPの10%ダメージを受け、攻撃力が最大150%上昇するバーサーク状態にする【バーサーク時、性能変化】<br>【バーサーク時】味方編成を怒闘状態にし2ターンの間、自身の攻撃力70%上昇',
          levels: [
            {
              level: 1,
              magnification: 0,
              hit: 0
            }
          ]
        }
      ]
    }
  }
];

export default sacredTreasureList;
