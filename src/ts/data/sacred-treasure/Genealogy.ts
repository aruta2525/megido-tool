import {IGenealogy} from '../../interface/ISacredTreasure';
import {GenealogyType as Type} from '../../enum/SacredTreasure';

export const genealogyList: IGenealogy[] = [
  {
    type: Type.None,
    ability: {
      value: 0,
      text: ''
    }
  },
  {
    type: Type.Mougeki,
    ability: {
      value: 0,
      text: '戦闘開始から1ターンの間、自身のスキルフォトンが強化される'
    }
  },
  {
    type: Type.Isshin,
    ability: {
      value: 0,
      text: '自身の点穴上限が+20される'
    }
  },
  {
    type: Type.Gouken,
    ability: {
      value: 0,
      text: '戦闘開始時、自身に回数バリア（1回）さらに毎ターン終了時、HPが5%回復'
    }
  },
  {
    type: Type.Gourai,
    ability: {
      value: 0,
      text: '雷ダメージが20%上昇する'
    }
  },
  {
    type: Type.Kaiten,
    ability: {
      value: 0,
      text: 'HP最大の味方を回復する行動時、2ターンの間対象の攻撃力と防御力を10%上昇させる'
    }
  },
  {
    type: Type.Rekka,
    ability: {
      value: 0,
      text: '火ダメージが20%上昇する'
    }
  },
  {
    type: Type.Rensa,
    ability: {
      value: 0,
      text: 'チェイン中、自身のスキルフォトンが強化される'
    }
  },
  {
    type: Type.Suishin,
    ability: {
      value: 0,
      text: 'ハイドロボムが付与されている敵から受けるダメージを15%軽減する'
    }
  }
];
