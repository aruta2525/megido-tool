import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 69,
        id: 1,
        name: 'バールゼフォン',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 7245,
        offense: 629,
        defense: 630,
        speed: 643,
        ability: { name: '筆が乗ってきたぜ！', text: '自身の覚醒ゲージが最大の60%以上のとき、チャージフォトン使用時に味方単体にチェインする' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: '極彩色の魔術師＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: 'Ch0',
                        magnification: 0,
                        hit: 0,
                        text: '敵単体に積まれているフォトン1つを70%の確率で、ペインフォトンに転換する。チェイン数に応じて転換個数変化'
                    },
                    {
                        level: 1,
                        label: 'Ch2',
                        magnification: 0,
                        hit: 0,
                        text: '敵単体に積まれているフォトン2つを70%の確率で、ペインフォトンに転換する。チェイン数に応じて転換個数変化'
                    },
                    {
                        level: 1,
                        label: 'Ch4',
                        magnification: 0,
                        hit: 0,
                        text: '敵単体に積まれているフォトン3つを70%の確率で、ペインフォトンに転換する'
                    }
                ]
            },
            {
                name: '流浪の胡蝶と空涙＋',
                type: SkillType.AwakeningSkill,
                text: '敵全体にペインフォトンを1つ追加し、50%の確率で、2ターンの間、敵を混乱状態にする。味方単体にチェイン',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '夢描く苦悩の涙＋',
                type: SkillType.Mysteries,
                text: '2ターンの間、敵全体の素早さを40%低下し、対象がフォトンを使用するたび、浸食の地形効果で1.75倍のダメージを与える',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ],
                increment: 0
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 69,
        id: 2,
        name: 'バールゼフォン',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 8310,
        offense: 890,
        defense: 468,
        speed: 507,
        ability: { name: 'インスピレーション', text: '装備しているオーブが種族に【精霊】を持つ場合、自身の素早さを40%上昇する' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: '画帖は平坦に非ず＋',
                type: SkillType.Skill,
                text: '味方横一列にアーマーを500付与し、種族に【精霊】か【物体】を持つオーブを装備している対象に彩色のオーラを1個付与する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '極彩色の表現者＋',
                type: SkillType.AwakeningSkill,
                text: '2ターンの間、自身のダメージを20%軽減し、1ターンの間、自身をアラプリマ状態にする。さらに自身が種族に【精霊】を持つオーブを装備時、自身に彩色のオーラを2個付与する	',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '苛む創造の愛しみよ＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 2.25,
                        hit: 1,
                        text: '敵横一列に攻撃力2.25倍のダメージ。さらに2ターンの間、対象がフォトンを使用するたび、浸食の地形効果で1.75倍のダメージを与える'
                    },
                    {
                        level: 1,
                        label: 'オーラ',
                        magnification: 2.25,
                        hit: 1,
                        text: '自身のオーラを2個消費し、敵横一列に攻撃力2.25倍のダメージ。2ターンの間、1.75倍ダメージの浸食地形。積まれているフォトン1つを70%の確率でペインフォトンに転換する	'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin69.js.map