import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType, ReferralStatus} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞拳聖の鉄槌',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'スキル、奥義が変化する'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 15,
      name: 'エリゴス',
      skills: [
        {
          name: '【専】トンファーガード＋',
          type: SkillType.Skill,
          text: '2ターンの間、自身が攻撃を受けたとき、防御力1.35倍の2連続ダメージで反撃する状態になり、攻撃を2回無効化する',
          referralStatus: ReferralStatus.Defence,
          levels: [
            {
              level: 1,
              magnification: 1.35,
              hit: 2
            }
          ]
        },
        {
          name: '【専】ラストガーディアン＋',
          type: SkillType.Mysteries,
          text: '敵単体に攻撃力2.25倍のダメージ。さらに2ターンの間、味方全体の防御力を50%上昇させ、すべての単体攻撃を受け持つ',
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
