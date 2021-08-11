import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞遊戯の賽',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'スキルが変化する。戦闘開始時、一度だけHPが50%になる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 36,
      name: 'メフィスト',
      skills: [
        {
          name: '【専】ロール・ロール＋',
          type: SkillType.Skill,
          text: `	出目で効果決定。さらに自身のHPが50%以下のとき、出目が4,5,6のいずれかになる<br>
              【出目効果】1:効果なし/2,3:単体覚醒+1,防御10%上昇/4,5:列覚醒+1,防御15%上昇/6:全体覚醒+1,防御20%上昇(防御上昇2ターン)`,
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
