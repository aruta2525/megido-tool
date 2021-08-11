import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞水神瀑斧',
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
      megidoNo: 60,
      name: 'ウァプラ',
      skills: [
        {
          name: '【専】奪掠＋',
          type: SkillType.Skill,
          text:
            '70%の確率で敵横一列の覚醒ゲージを-1する（ハイドロボムが付与されている場合100%）。さらに敵にハイドロボムが付与されているとき、減少した覚醒ゲージを自身に加算する',
          levels: [
            {
              level: 1,
              magnification: 0,
              hit: 0
            }
          ]
        },
        {
          name: '【専】千山万水＋',
          type: SkillType.Mysteries,
          text: `敵横一列に攻撃力1.5倍のダメージ。対象の状態に応じてさらに効果が発生<br>
              【ハイドロボム重が付与されていない場合】3.25倍で7ターン後に弾けるハイドロボム重を付与する<br>
              【ハイドロボム重が付与されている場合】0.1倍で9ターン後に弾けるハイドロボム錬を錬成する`,
          levels: [
            {
              level: 1,
              magnification: 1.5,
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
