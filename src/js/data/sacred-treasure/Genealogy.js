import { GenealogyType as Type } from '../../enum/SacredTreasure';
export const genealogyList = [
    {
        type: Type.None,
        ability: {
            name: '',
            text: ''
        }
    },
    {
        type: Type.Mougeki,
        ability: {
            name: '',
            text: '戦闘開始から1ターンの間、自身のスキルフォトンが強化される'
        }
    },
    {
        type: Type.Isshin,
        ability: {
            name: '',
            text: '自身の点穴上限が+20される'
        }
    },
    {
        type: Type.Metsugan,
        ability: {
            name: '',
            text: 'バレット消費数が多いほど、ダメージが上昇する（最大20%）※発動者の累計消費数×2%。ダメージ上昇効果はバレットを消費しない攻撃にも乗る'
        }
    },
    {
        type: Type.Gouken,
        ability: {
            name: '',
            text: '戦闘開始時、自身に回数バリア（1回）さらに毎ターン終了時、HPが5%回復'
        }
    },
    {
        type: Type.Gourai,
        ability: {
            name: '',
            text: '雷ダメージが20%上昇する'
        }
    },
    {
        type: Type.Kaiten,
        ability: {
            name: '',
            text: 'HP最大の味方を回復する行動時、2ターンの間対象の攻撃力と防御力を10%上昇させる'
        }
    },
    {
        type: Type.Kyoyu,
        ability: {
            name: '',
            text: '自身のHPが50%以下のとき、攻撃力が20%上昇する'
        }
    },
    {
        type: Type.Rekka,
        ability: {
            name: '',
            text: '火ダメージが20%上昇する'
        }
    },
    {
        type: Type.Rensa,
        ability: {
            name: '',
            text: 'チェイン中、自身のスキルフォトンが強化される'
        }
    },
    {
        type: Type.Suishin,
        ability: {
            name: '',
            text: 'ハイドロボムが付与されている敵から受けるダメージを15%軽減する'
        }
    }
];
//# sourceMappingURL=Genealogy.js.map