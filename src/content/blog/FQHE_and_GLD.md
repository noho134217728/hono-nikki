---
title: '分数量子ホール効果に潜む数論とトポロジカル秩序の圏論的記述'
description: 'AIに作成してもらいました。自分の勉強の記録用の記事として残しておきます。'
date: '2025-07-04'
tags: ['物性物理', 'トポロジカル相', '圏論', '数論', 'Chern–Simons', 'FQHE', 'AI生成']
---

## はじめに

分数量子ホール効果（FQHE）は、強磁場・低温下の二次元電子系でホール伝導度が分数$\nu=\tfrac{p}{q}$をとる現象です。実験的には$\nu=\tfrac13,\tfrac25,\dots$といった分数が観測され、通常の対称性破れでは説明できない**トポロジカル秩序**を示します。

本記事では、  
1. **数論的視点**：境界エッジのキャラクタに現れるモジュラー形式・保型形式との対応  
2. **アノマリー**：量子場理論の境界不変量としての役割  
3. **トポロジカル視点**：Chern–Simons TQFTから得られるモジュラー・テンソル圏  
4. **圏論的双対性**：ドリンドルセンターの出現理由  

の４本柱で、FQHEを支える深い数学的構造を詳細に解説します。

---

## 1. 境界エッジの数論的モジュラー形式・保型形式

FQHE試料の**端**には電流が流れる「エッジモード」が存在し、そこは1+1次元の**カイラル共形場理論（VOA）**で記述されます。エッジ上の状態空間$\mathcal H_{\rm edge}$に対して、

$$
Z(q)\;=\;\mathrm{Tr}_{\mathcal H_{\rm edge}}\;q^{L_0-\frac{c}{24}},\qquad q=e^{2\pi i\tau}
$$

という**キャラクタ**が定義できます。この$Z(q)$は一般に**モジュラー形式**や**保型形式**の係数展開と完全に同型で、

- **モジュラー形式**とは、上半平面$\tau\in\mathbb H$上で
  $$
    f\!\bigl(\tfrac{a\tau+b}{c\tau+d}\bigr)=(c\tau+d)^k\,f(\tau),
    \quad
    \begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL(2,\mathbb Z)
  $$
  と振る舞う函数。  
- 保型形式$F(g)$は、より一般に大域的な自動形式論の枠組みで定義される解析関数で、ヒルベルト空間上の$G(\mathbb A)$の不変関数として現れる。

エッジのキャラクタ$\chi_a(\tau)$は

$$
\chi_a(-1/\tau)=\sum_b S_{ab}\,\chi_b(\tau),\qquad
\chi_a(\tau+1)=\sum_b T_{ab}\,\chi_b(\tau),
$$

という**S**, **T** 行列で閉じます。これらは数論におけるリーマンΔ関数やエイゼンシュタイン級数のFourier係数変換と同じ構造をもち、エッジモードはまさに「物理系に現れた保型形式」です。

---

## 2. アノマリーと境界不変量

量子場理論では、クラシカルには保存されるはずの対称性が量子論で破れる現象を**アノマリー**と呼びます。FQHEにおける**境界アノマリー**は、

- **U(1)ゲージアノマリー**：バルクChern–Simons作用
  $$
    S_{\rm CS}=\frac{k}{4\pi}\int A\wedge dA
  $$
  はゲージ変換で不変にならず、その変分が境界に電流を生む  
- 境界側のVOAはこのアノマリー不変量を補償し、全体のゲージ不変性を回復する  

という仕組みで現れます。すなわち、**バルク–エッジ対応**はアノマリー取消の視点からも必須であり、数学的にはドリンドルセンターが「境界理論のアノマリーキャンセル」を保証します。

---

## 3. バルクのトポロジカル秩序としての Chern–Simons TQFT

FQHEの**バルク**は、低エネルギーで**3次元Chern–Simons理論**に対応します。U(1)ゲージ場$A$を用い、

$$
S_{\mathrm{CS}}
=\frac{k}{4\pi}\int_{M_3}\!A\wedge dA
$$

という作用を考えると、レベル$k$がホール伝導度の逆数$\nu=1/k$を決めます。ゲージアノマリーの観点からは、境界に生じる不変量を補うためにエッジモードが必要になります。

このTQFTを**圏論的**に見ると、**モジュラー・テンソル圏**$\mathcal C$を与えます。主な構成要素は：

- **対象**：anyon の種類（Wilson線の表現ラベル）  
- **融合則**：$a\otimes b=\displaystyle\bigoplus_cN_{ab}^c\,c$  
- **F-シンボル**：$(a\otimes b)\otimes c\cong a\otimes(b\otimes c)$ の自然同型（五辺形図式の可換性）  
- **R-シンボル**：$a\otimes b\to b\otimes a$ の交換統計（六辺形図式）  
- **トワイスト**：各anyon $a$ の自己回転位相$\theta_a$  
- **モジュラー行列**：$S,T$ が可逆（非退化性）

これらをすべて備えた圏が**ユニタリ非退化ブラーディッド融合圏**すなわち**MTC**です。FQHEのあらゆるanyon統計と基底状態縮退は、この圏論的データで完全に記述されます。

---

## 4. 圏論的双対性：ドリンドルセンターの出現理由

なぜ圏論がここまで現れるのか？ それは、以下の２点が大きく関係します。

1. **アノマリー取消の普遍構造**  
   - バルク–エッジ系全体のゲージ不変性を保つには、境界理論が必ずしも異なる圏を補償的に持つ必要がある  
   - この補償圏を「中心的に」選ぶ操作がドリンドルセンター

2. **拡張TQFTの階層構造**  
   - 3次元拡張TQFTでは、  
     - 点：モノイダル圏 $\mathcal C$  
     - 線：$\mathcal C$-モジュール圏（境界条件）  
     - 面：境界状態空間  
   - この階層が自然に圏論を導入し、モジュラー・テンソル圏とその中心圏が必然的に現れる

結果として、**バルクのMTC**と**エッジのVOA表現圏**は、「すべての braiding と可換に振る舞う」ドリンドルセンター$\mathrm{Z}(\mathcal C)$を介して同値に結びつきます：

$$
\mathcal M\;\simeq\;\mathrm{Z}(\mathcal C).
$$

これが、圏論的にバルク–エッジ対応を保証し、アノマリー取消を数学的に定式化する根本的な仕組みです。

---

## 5. 数論と圏論の深い交差点

FQHEは以下の三位一体の構造を示し、数論と圏論の最前線が交差する場となっています。

| 項目             | 数論的構造                           | 圏論的構造                             |
|-----------------|--------------------------------------|--------------------------------------|
| **モジュラー**   | 保型形式・モジュラー形式のS,T行列     | MTCのS,T行列                         |
| **q-展開**      | キャラクタ$\chi_a(\tau)=\sum q^n$     | VOAの状態空間の級数展開              |
| **アノマリー**   | U(1)ゲージアノマリー                 | ドリンドルセンターによる取消         |
| **融合／braiding** | 四角形・五角形図式と数論的関係式       | F-シンボル／R-シンボルと五辺形・六辺形図式 |
| **双対性**       | Langlands双対性（数論的L関数対応）   | バルク–エッジのドリンドルセンター同値 |

これらの対応は単なるアナロジーではなく、Kapustin–Wittenらの研究により**物理的S-双対性**と同じ根拠で導かれる厳密な双対性として定式化されています。

---

## おわりに

分数量子ホール効果は、「数論的モジュラー性」×「Chern–Simons TQFTのトポロジカル構造」×「圏論的双対性」という三位一体の枠組みで理解できる、真に現代数学と物理の最前線が交差するテーマです。

- 境界エッジは**保型形式**そのもの、  
- バルクは**MTC**としての融合・braiding、  
- アノマリー取消が**ドリンドルセンター**を呼び込む圏論的必然  

というストーリーは、いまなお多くの新展開を生んでいます。
