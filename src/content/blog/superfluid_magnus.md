---
title: '超流動の渦にはマグヌス力が生じる話'
description: '超流動では渦が生じます。この渦はマグヌス力による運動を示すことが知られていますが、それを実際に場の量子論の立場から導出してみようというのが本書の狙いです。'
date: 2025-08-02
tags: ['物理学', '理論', '場の量子論', '超流動']
---

## 超流動とは？

**超流動**とは、ヘリウム4などを極低温まで冷却したときに現れる、**粘性がゼロ**になる不思議な状態です。粘性がないため、一度流れを作ると外部から力を加えない限り永遠に流れ続けたり、容器の壁を勝手に這い上がったりといった奇妙な振る舞いを示します。

この現象の根源は**量子力学**にあります。極低温では、多数のボソン粒子（ヘリウム4原子など）が**ボース＝アインシュタイン凝縮（BEC）**を起こし、個々の粒子の区別がつかない一つの巨大な「量子的な波」として振る舞います。この系全体の状態は、一つの**巨視的な波動関数 $\Psi$** で記述することができます。

---

## 超流動の渦とは

では、この「量子的な波」である超流動体を回転させようとするとどうなるでしょうか。通常の流体のように、容器と一緒に全体が一体となって回転することはできません。

代わりに、超流動体は**量子化された渦**（量子渦）を無数に作ることで、回転運動を実現します。この渦は、超流動体の中にできる一種の「穴」のようなもので、以下の特徴を持ちます。

1.  **ゼロ密度コア**: 渦の中心（コア）では、超流動体の密度がゼロになっています。
2.  **位相の巻きつき**: 渦の周りを一周すると、巨視的な波動関数 $\Psi$ の位相が必ず $2\pi$ の整数倍だけ変化します。

この渦は、超流動体の中に浮かぶ独立した「粒子」のように振る舞い、その運動は外部の流れなどから力を受けます。そして、その力に応答して生じるのが、今回のテーマである**マグヌス力**です。

---

## 解析力学チャートで見る渦の運動方程式

場の量子論の強力な点は、複雑な量子多体系の問題を、適切な変数（集団座標）と有効理論を用いることで、古典的な解析力学の枠組みで捉え直せることにあります。以下に、量子多体系の記述から出発し、最終的に渦の運動方程式を導出するまでの道のりを「解析力学チャート」として示します。

<div class="note-box">
## この記事の流れ

### 【ステージ1：場の理論の導出】

**量子多体ハミルトニアン**
（ミクロな量子粒子の集まり）

**↓** `[方法] 平均場近似`

**GPラグランジアン**
（マクロな「場」の理論）

**↓** `[原理] 最小作用の原理`

**GP方程式**
（「場」の運動方程式）

---

### 【ステージ2：渦の運動の導出】

**GP方程式**
（「場」の理論が出発点）

**↓** `[方法] 集団座標近似`

**渦の有効ラグランジアン**
（「渦」という粒子の理論）

**↓** `[原理] 最小作用の原理`

**渦の運動方程式**
（「粒子」の運動方程式）
</div>

### 階層1：凝縮体の場の理論（GP方程式）の導出

この階層では、ミクロな量子多体系から出発し、凝縮体という「場」が従う運動方程式を導出します。

### 1. ハミルトニアン (出発点) 

ここでの目標は、量子力学の基本法則から出発し、超流動体という巨視的な系を記述するための「エネルギーの式」を導出することです。

#### **ステップ1：量子多体系の厳密な記述 (量子ハミルトニアン)**

まず、出発点となるのは、相互作用するボソン（ヘリウム原子など）の集まりを記述する、最も基本的で厳密な**量子ハミルトニアン $\hat{H}$** です。これは第二量子化という形式で書かれています。

<div class = "note-box">
出発点のハミルトニアン

$$\hat{H} = \int d^3x \, \hat{\Psi}^\dagger(\boldsymbol{x}) \left( -\frac{\hbar^2}{2m}\nabla^2 + V_{ext} \right) \hat{\Psi}(\boldsymbol{x}) + \frac{g}{2} \int d^3x \, \hat{\Psi}^\dagger(\boldsymbol{x})\hat{\Psi}^\dagger(\boldsymbol{x})\hat{\Psi}(\boldsymbol{x})\hat{\Psi}(\boldsymbol{x})$$
</div>

この式の各項は、明確な物理的意味を持っています。

* **場の演算子**:
    * $\hat{\Psi}(\boldsymbol{x})$: 位置 $\boldsymbol{x}$ にある粒子を1つ**消滅させる**量子的な**演算子**です。
    * $\hat{\Psi}^\dagger(\boldsymbol{x})$: 位置 $\boldsymbol{x}$ に粒子を1つ**生成する**量子的な**演算子**です。
    これらは単なる数ではなく、量子状態に作用する命令のようなものです。

* **第一項（1粒子エネルギー）**:
    この項は、系全体の運動エネルギーとポテンシャルエネルギーの合計を表します。
    * $-\frac{\hbar^2}{2m}\nabla^2$ は運動エネルギー、 $V_{ext}$ は粒子を閉じ込める外部ポテンシャルのエネルギーです。
    * $\hat{\Psi}^\dagger(\dots)\hat{\Psi}$ という構造は、一度粒子を消してエネルギーを測定し、すぐに元に戻す、という操作に対応しており、これを全空間で積分することで、全粒子のエネルギーを合計しています。

* **第二項（相互作用エネルギー）**:
    この項が、粒子同士の相互作用を表します。
    * $g$ は相互作用の強さを決める結合定数です。
    * $\hat{\Psi}^\dagger \hat{\Psi}^\dagger \hat{\Psi} \hat{\Psi}$ という構造は、「位置 $\boldsymbol{x}$ で同時に粒子を2つ消し、また同時に2つ生成する」という操作に対応します。これは、2つの粒子が同じ場所にいるときにだけ相互作用が働く**接触相互作用**をモデル化しており、希薄な原子気体に対して非常に良い近似となります。

このハミルトニアンは、量子力学的に厳密ですが、演算子が含まれており、このままでは方程式を解くのが極めて困難です。

---

#### **ステップ2：平均場近似の導入**

ここで、**ボース＝アインシュタイン凝縮(BEC)** という物理現象が鍵となります。BEC状態では、非常に多くの粒子が全く同じ一つの量子状態に「凝縮」し、系全体がコヒーレント（位相の揃った）な一つの巨大な波のように振る舞います。

この状況下では、量子的な「ゆらぎ」の効果は比較的小さく、系の振る舞いは場の演算子 $\hat{\Psi}$ の**平均値（期待値）**でほぼ決まると考えられます。そこで、この大胆な近似を行います。

* **近似**: 量子的な**演算子** $\hat{\Psi}(\boldsymbol{x})$ を、その平均値である古典的な**複素関数**（c数）$\Psi(\boldsymbol{x})$ で置き換える。
    $$\hat{\Psi}(\boldsymbol{x}) \longrightarrow \langle \hat{\Psi}(\boldsymbol{x}) \rangle \equiv \Psi(\boldsymbol{x})$$

* **$\Psi(\boldsymbol{x})$ の意味**:
    この古典場 $\Psi(\boldsymbol{x})$ は、もはや単一粒子の波動関数ではありません。凝縮した粒子集団全体を記述する**秩序変数**、あるいは**巨視的な波動関数**です。$|\Psi(\boldsymbol{x})|^2$ は、凝縮体の**粒子密度**を表します。

---

#### **ステップ3：GPハミルトニアンの導出**

この平均場近似を、ステップ1の量子ハミルトニアン $\hat{H}$ に適用します。演算子をすべて古典関数に置き換えることで、系のエネルギーを表す**GPハミルトニアン $H[\Psi]$**（エネルギー汎関数）が得られます。

* **1粒子エネルギー項**:
    $\hat{\Psi}^\dagger (\dots) \hat{\Psi} \quad \longrightarrow \quad \Psi^* (\dots) \Psi$
* **相互作用エネルギー項**:
    $(\hat{\Psi}^\dagger)^2 \hat{\Psi}^2 \quad \longrightarrow \quad (\Psi^*)^2 \Psi^2 = |\Psi|^4$

これにより、最終的なエネルギーの式が導かれます。

$$H[\Psi] = \int d^3x \, \underbrace{\left( \frac{\hbar^2}{2m} |\nabla \Psi|^2 + V_{ext} |\Psi|^2 + \frac{g}{2} |\Psi|^4 \right)}_{\text{ハミルトニアン密度 } \mathcal{H}}$$

このようにして、解くのが難しい量子演算子の問題が、解析力学的な手法が適用可能な古典場のエネルギーの問題へと見事に変換されました。これが、GP理論、ひいては渦の運動方程式を導くための、揺るぎない出発点となります。

---

### 2. ラグランジアン (ルジャンドル変換に相当) 

このステップの目標は、前のステップで得た系のエネルギーを表す「GPハミルトニアン」から、系のダイナミクス（時間発展）を記述するための「GPラグランジアン」を構築することです。ここでの操作は、古典力学における**ルジャンドル変換**の考え方に基づいています。

#### **ステップ1：ハミルトニアンとラグランジアンの関係**

まず、古典的な点粒子力学を思い出してみましょう。ラグランジアン $L(q, \dot{q})$ は座標 $q$ と速度 $\dot{q}$ の関数であり、ハミルトニアン $H(q, p)$ は座標 $q$ と運動量 $p$ の関数です。両者は以下の**ルジャンドル変換**によって結ばれています。

<div class = "note-box">
ラグランジアンの定義

$$L(q, \dot{q}) = p\dot{q} - H(q, p)$$
</div>

場の理論でも同様の関係が成り立ち、ラグランジアン密度 $\mathcal{L}$ とハミルトニアン密度 $\mathcal{H}$ は、一般に $\mathcal{L} = (\text{運動量の項}) - \mathcal{H}$ という構造を持っています。

#### **ステップ2：シュレディンガー理論における課題**

しかし、グロス＝ピタエフスキー（GP）方程式やシュレーディンガー方程式は、時間について**1階の微分方程式**です。これは、時間について2階の微分方程式であるニュートンの運動方程式とは性質が異なります。

このため、速度 $\dot{\Psi}$ から運動量 $\pi$ を定義する標準的な手続き（$\pi = \partial\mathcal{L}/\partial\dot{\Psi}$）が自明ではなく、ラグランジアンを単純に「運動エネルギー - ポテンシャルエネルギー」として構築することができません。

#### **ステップ3：ラグランジアンの構築**

そこで、**「正しい運動方程式（時間依存GP方程式）を導出するラグランジアンを構築する」**という逆算的なアプローチを取ります。我々が最終的に得たい運動方程式はこれです。

$$i\hbar \frac{\partial \Psi}{\partial t} = \frac{\delta H}{\delta \Psi^*} = \left( -\frac{\hbar^2}{2m} \nabla^2 + V_{ext} + g|\Psi|^2 \right) \Psi$$

この方程式は、ハミルトニアン密度 $\mathcal{H}$ を用いると、$i\hbar\partial_t\Psi = \frac{\partial \mathcal{H}}{\partial \Psi^*}$ と書けます（空間微分項は部分積分により処理）。

この関係式をオイラー＝ラグランジュ方程式から導出するためには、ラグランジアン密度 $\mathcal{L}$ の時間依存部分として、以下の項を導入する必要があります。

$$\mathcal{L}_t = \frac{i\hbar}{2}(\Psi^* \partial_t \Psi - \Psi \partial_t \Psi^*)$$

* **なぜこの形なのか？**: この項をラグランジアン $\mathcal{L} = \mathcal{L}_t - \mathcal{H}$ に含めてオイラー＝ラグランジュ方程式を計算すると、$\partial\mathcal{L}/\partial\Psi^*$ から $i\hbar\partial_t\Psi$ の項が正しく現れます。
* **実数であること**: この形は、ラグランジアン全体が実数になるように対称化されています。物理的な量は実数であることが要請されるため、この形が標準的に用いられます。

#### **ステップ4：GPラグランジアンの完成**

以上の考察から、GPハミルトニアン密度 $\mathcal{H}$ と、時間発展を正しく記述するための時間依存項 $\mathcal{L}_t$ を組み合わせることで、最終的な**GPラグランジアン**密度が完成します。

<div class="note-box">
GPラグランジアン密度

$$\mathcal{L}_{GP} = \underbrace{\frac{i\hbar}{2}(\Psi^* \partial_t \Psi - \Psi \partial_t \Psi^*)}_{\text{時間依存項}} - \underbrace{\left( \frac{\hbar^2}{2m} |\nabla \Psi|^2 + V_{ext} |\Psi|^2 + \frac{g}{2} |\Psi|^4 \right)}_{\text{ハミルトニアン密度 } \mathcal{H}}$$

</div>

このように、ラグランジアンの構築は、既知のハミルトニアンと、それが従うべき運動方程式から逆算的に行われます。これは、系のダイナミクスを記述する上で最も都合の良い形を「要請する」という、場の理論における強力な手法の一つです。

### 3. オイラー＝ラグランジュ方程式から運動方程式へ

このステップの目標は、GPラグランジアンに対して、物理学の最も基本的な原理の一つである**最小作用の原理**を適用し、系の時間発展を支配する具体的な運動方程式（時間依存GP方程式）を導出することです。

#### **ステップ1：原理と方程式の形式**

<div class="note-box">

* **原理**: 物理的な運動は、作用 $S = \int \mathcal{L} \, d^3x dt$ を最小（厳密には停留）にする経路をたどります。この条件は $\delta S = 0$ と表され、場の理論における**オイラー＝ラグランジュ方程式**を導きます。

* **方程式の形式**:
    我々は場 $\Psi$ の運動方程式を求めたいので、その共役な場 $\Psi^*$ に関する変分を考えます。場の変数が時間 $t$ と空間 $\boldsymbol{x}$ の両方に依存するため、オイラー＝ラグランジュ方程式は以下の形になります。

    $$\frac{\partial \mathcal{L}}{\partial \Psi^*} - \partial_t \left( \frac{\partial \mathcal{L}}{\partial (\partial_t \Psi^*)} \right) - \nabla \cdot \left( \frac{\partial \mathcal{L}}{\partial (\nabla \Psi^*)} \right) = 0$$

</div>

#### **ステップ2：各項の計算**

GPラグランジアン $\mathcal{L}_{GP} = \frac{i\hbar}{2}(\Psi^* \partial_t \Psi - \Psi \partial_t \Psi^*) - \mathcal{H}$ を、上記方程式の各項に代入して計算します。

1.  **第一項: $\frac{\partial \mathcal{L}}{\partial \Psi^*}$**
    $\Psi^*$ 自身で偏微分します。$\partial_t \Psi^*$ や $\nabla \Psi^*$ はここでは独立な変数として扱います。
    $$\frac{\partial \mathcal{L}_{GP}}{\partial \Psi^*} = \frac{i\hbar}{2}\partial_t \Psi - \frac{\partial \mathcal{H}}{\partial \Psi^*} = \frac{i\hbar}{2}\partial_t \Psi - V_{ext}\Psi - g|\Psi|^2\Psi$$

2.  **第二項: $\partial_t \left( \frac{\partial \mathcal{L}}{\partial (\partial_t \Psi^*)} \right)$**
    まず、$\mathcal{L}_{GP}$ を $\partial_t \Psi^*$ で偏微分します。この変数を含むのは $-\frac{i\hbar}{2}\Psi\partial_t\Psi^*$ の項だけです。
    $$\frac{\partial \mathcal{L}_{GP}}{\partial (\partial_t \Psi^*)} = -\frac{i\hbar}{2}\Psi$$
    次に、この結果を時間 $t$ で偏微分します。
    $$\partial_t \left( -\frac{i\hbar}{2}\Psi \right) = -\frac{i\hbar}{2}\partial_t\Psi$$

3.  **第三項: $\nabla \cdot \left( \frac{\partial \mathcal{L}}{\partial (\nabla \Psi^*)} \right)$**
    まず、$\mathcal{L}_{GP}$ を $\nabla \Psi^*$ で偏微分します。この変数を含むのは $-\frac{\hbar^2}{2m}|\nabla\Psi|^2 = -\frac{\hbar^2}{2m}(\nabla\Psi^* \cdot \nabla\Psi)$ の項だけです。
    $$\frac{\partial \mathcal{L}_{GP}}{\partial (\nabla \Psi^*)} = -\frac{\hbar^2}{2m}\nabla\Psi$$
    次に、この結果の発散（divergence）を取ります。
    $$\nabla \cdot \left( -\frac{\hbar^2}{2m}\nabla\Psi \right) = -\frac{\hbar^2}{2m}\nabla^2\Psi$$

#### **ステップ3：方程式の組み立てと整理**

計算した3つの項を、オイラー＝ラグランジュ方程式に代入します。

$$ \left( \frac{i\hbar}{2}\partial_t \Psi - V_{ext}\Psi - g|\Psi|^2\Psi \right) - \left( -\frac{i\hbar}{2}\partial_t\Psi \right) - \left( -\frac{\hbar^2}{2m}\nabla^2\Psi \right) = 0 $$

括弧を外して整理します。
$$ \frac{i\hbar}{2}\partial_t \Psi + \frac{i\hbar}{2}\partial_t \Psi - V_{ext}\Psi - g|\Psi|^2\Psi + \frac{\hbar^2}{2m}\nabla^2\Psi = 0 $$
$$ i\hbar\partial_t \Psi + \frac{\hbar^2}{2m}\nabla^2\Psi - V_{ext}\Psi - g|\Psi|^2\Psi = 0 $$

最後に、$\partial_t \Psi$ の項を左辺に残し、それ以外を右辺に移項して式を整えます。

<div class="note-box">
時間依存グロス＝ピタエフスキー（GP）方程式

$$ i\hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\Psi + V_{ext}\Psi + g|\Psi|^2\Psi $$
</div>

この最終的な形が、**時間依存グロス＝ピタエフスキー（GP）方程式**です。これは非線形項 $g|\Psi|^2\Psi$ を持つため、通常のシュレーディンガー方程式とは異なる豊かな物理（渦など）を含んでいます。

---
---

### 階層2：渦の有効理論（運動方程式）の導出

この階層の目的は、階層1で確立した**グロス＝ピタエフスキー（GP）理論**を新たな出発点とし、その理論の中に現れる「渦」という対象を一つの粒子とみなし、その粒子が従う運動方程式を導出することです。

#### **1. 有効理論の前提：渦の解の形**

まず、渦の運動を考える上での重要な近似（Ansatz）を導入します。それは、**「渦は自身の形を保ったまま、全体として平行移動する」**というものです。

数式で表すと、ある時刻 $t$ における巨視的波動関数 $\Psi(\boldsymbol{x}, t)$ は、原点に静止した渦の解 $\Psi_v$ を、その中心位置 $\boldsymbol{R}(t)$ だけ平行移動させたものとして近似できます。

$$\Psi(\boldsymbol{x}, t) \approx \Psi_v(\boldsymbol{x} - \boldsymbol{R}(t))$$

この渦の中心位置 $\boldsymbol{R}(t) = (X(t), Y(t))$ が、我々が追跡したい「粒子の座標」、すなわち**集団座標**となります。

---

### 2. 有効ラグランジアンの導出

次に、この渦の座標 $\boldsymbol{R}(t)$ が従うべきラグランジアンを導出します。これは、階層1のGPラグランジアン $L_{GP} = \int \mathcal{L}_{GP} d^2x$ に上記の渦の解の形を代入し、場の自由度（空間座標 $\boldsymbol{x}$）について積分を実行することで得られます。

**ポテンシャル項の導出**:
GPラグランジアンのハミルトニアン密度（エネルギー）の部分 $-\int \mathcal{H} d^2x$ に渦の解を代入すると、これは渦がその位置 $\boldsymbol{R}$ にいるときの**ポテンシャルエネルギー** $-E(\boldsymbol{R})$ となります。例えば、背景に流れがあれば、渦の位置によってエネルギーが変化するため、この項はゼロではありません。

**ベリー位相項の導出**:
最も重要かつ難解なのが、ラグランジアンの時間依存項 

$$L_t = \int d^2x \, \frac{i\hbar}{2}(\Psi^* \partial_t \Psi - \text{c.c.})$$

です。まず、$\partial_t \Psi = -\dot{\boldsymbol{R}} \cdot \nabla \Psi_v$ という関係式（連鎖律から導かれます）を代入します。
$$L_t = \int d^2x \, \frac{i\hbar}{2} \left[ \Psi_v^* (-\dot{\boldsymbol{R}} \cdot \nabla\Psi_v) - \text{c.c.} \right]$$
この式を整理し、空間積分を実行すると、驚くべきことに、渦の構造を反映した非常にシンプルな形になります。この項は、場のトポロジーに由来するため**ベリー位相項**と呼ばれ、2次元の渦の場合、以下の形で与えられることが知られています。
$$L_M = \frac{1}{2} \kappa \rho_s (X\dot{Y} - Y\dot{X})$$
ここで $\kappa$ は渦の**循環**（位相の巻きつきの強さ）、$\rho_s$ は**超流動密度**です。

以上の結果を合わせることで、渦の運動を記述する**有効ラグランジアン $L_{eff}$** が完成します。

$$L_{eff}(\boldsymbol{R}, \dot{\boldsymbol{R}}) = \underbrace{\frac{1}{2} \kappa \rho_s (X\dot{Y} - Y\dot{X})}_{\text{ベリー位相項}} - \underbrace{E(\boldsymbol{R})}_{\text{ポテンシャル項}}$$

---

#### **3. 運動方程式の導出**

この有効ラグランジアン $L_{eff}$ に対して、粒子力学の**オイラー＝ラグランジュ方程式**を適用し、具体的な運動方程式を導出します。

$$\frac{d}{dt}\left( \frac{\partial L_{eff}}{\partial \dot{R}_i} \right) - \frac{\partial L_{eff}}{\partial R_i} = 0 \quad (\text{ここで } R_i = X, Y)$$

* **X成分の計算**:
    1.  $\frac{\partial L_{eff}}{\partial \dot{X}} = -\frac{1}{2}\kappa\rho_s Y$
    2.  $\frac{d}{dt}\left( \frac{\partial L_{eff}}{\partial \dot{X}} \right) = -\frac{1}{2}\kappa\rho_s \dot{Y}$
    3.  $\frac{\partial L_{eff}}{\partial X} = \frac{1}{2}\kappa\rho_s \dot{Y} - \frac{\partial E}{\partial X}$
    4.  これらを方程式に代入すると、
        $$(-\frac{1}{2}\kappa\rho_s \dot{Y}) - (\frac{1}{2}\kappa\rho_s \dot{Y} - \frac{\partial E}{\partial X}) = 0 \implies -\kappa\rho_s \dot{Y} + \frac{\partial E}{\partial X} = 0$$

* **Y成分の計算**:
    1.  $\frac{\partial L_{eff}}{\partial \dot{Y}} = \frac{1}{2}\kappa\rho_s X$
    2.  $\frac{d}{dt}\left( \frac{\partial L_{eff}}{\partial \dot{Y}} \right) = \frac{1}{2}\kappa\rho_s \dot{X}$
    3.  $\frac{\partial L_{eff}}{\partial Y} = -\frac{1}{2}\kappa\rho_s \dot{X} - \frac{\partial E}{\partial Y}$
    4.  これらを方程式に代入すると、
        $$(\frac{1}{2}\kappa\rho_s \dot{X}) - (-\frac{1}{2}\kappa\rho_s \dot{X} - \frac{\partial E}{\partial Y}) = 0 \implies \kappa\rho_s \dot{X} + \frac{\partial E}{\partial Y} = 0$$

* **最終的な運動方程式**:
    ここで、渦の速度を $\boldsymbol{v}_v = (\dot{X}, \dot{Y})$、外部力を $\boldsymbol{F}_{ext} = (-\frac{\partial E}{\partial X}, -\frac{\partial E}{\partial Y})$ と定義します。
    また、ベリー位相項から生じる**マグヌス力**を $\boldsymbol{F}_M = \kappa\rho_s(\boldsymbol{z} \times \boldsymbol{v}_v) = (-\kappa\rho_s\dot{Y}, \kappa\rho_s\dot{X})$ と定義します（$\boldsymbol{z}$ は面に垂直な単位ベクトル）。

    先ほど導出した2つの成分の式は、この定義を用いると、

    $$(F_M)_x + (F_{ext})_x = 0$$

    $$(F_M)_y + (F_{ext})_y = 0$$

    と書き直せます。これは、ベクトル形式でまとめると、以下の最終的な結論に至ります。
    <div class="note-box">
    
    外部力： $\boldsymbol{F}_{ext} = (-\frac{\partial E}{\partial X}, -\frac{\partial E}{\partial Y})$

    マグヌス力： $\boldsymbol{F}_M = \kappa\rho_s(\boldsymbol{z} \times \boldsymbol{v}_v) = (-\kappa\rho_s\dot{Y}, \kappa\rho_s\dot{X})$ 

    $$\boldsymbol{F}_M + \boldsymbol{F}_{ext} = 0$$
    </div>

この美しい方程式は、**渦に働くマグヌス力と外部から受ける力が常に釣り合っている**ことを示しています。慣性質量がないため、渦は力を受けて加速するのではなく、力と釣り合う方向に一定の速度で動くのです。

## まとめ

本記事では、一見捉えどころのない量子多体系の現象である「超流動の渦」が、場の理論の枠組みを用いることで、古典力学の粒子のように扱えること、そしてその運動が**マグヌス力**によって支配されていることを導出しました。

このプロセスは、場の量子論の持つ強力な思想、すなわち**「複雑な量子系も、適切な自由度（集団座標）を見つけ出し、有効理論を構築することで、見通しの良い古典的な理論として理解できる」**という考え方を体現しています。ミクロな量子論から出発して、最終的にマクロな渦の振る舞いを記述する簡潔な運動方程式に行き着く流れは、物理学の持つ階層性と美しさを示していると言えるでしょう。