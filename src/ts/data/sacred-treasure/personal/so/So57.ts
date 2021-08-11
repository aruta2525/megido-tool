import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞猛虎の鈎爪',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '奥義が変化する'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 57,
      name: 'オセ',
      skills: [
        {
          name: '【専】猛りの暴獣爪＋',
          type: SkillType.Mysteries,
          text: '敵単体に攻撃力1.6倍の3連続ダメージ。さらに自身にアタックフォトンを1つ追加し、2ターンの間、アタックを強化',
          levels: [
            {
              level: 1,
              magnification: 1.6,
              hit: 3
            }
          ],
          increment: 0.0166
        }
      ]
    }
  }
];

export default sacredTreasureList;
