import { TranceType } from '../../enum/Megido';
export const Colosseum = [
    {
        type: TranceType.Colosseum,
        levels: [
            {
                level: 0,
                name: '優勢',
                text: '味方：単体ダメージ+50% 防御力-30%<br>敵：単体ダメージ+20% 防御力-60%（その他防御バフとは乗算）'
            },
            {
                level: 1,
                name: '劣勢',
                text: '味方：単体ダメージ+20% 防御力-60%<br>敵：単体ダメージ+50% 防御力-30%（その他防御バフとは乗算）'
            }
        ]
    }
];
//# sourceMappingURL=Colosseum.js.map