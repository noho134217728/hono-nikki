---
title: '量子計量テンソルとSLD計量、量子パラメータ推定について勉強中'
description: '今日勉強したことを一旦文章でまとめてみます。'
date: 2025-06-29
tags: ['量子幾何学', '量子情報', '物理学', '理論']
---

# 総まとめ：情報幾何学から量子幾何学へ（数理的定式化）

これまでの議論を、その数学的な定式化を中心にまとめます。古典情報幾何学の基礎から始め、量子情報幾何学（SLD計量）、そしてハミルトニアンのパラメータ空間における幾何学（QGT）へと展開し、最後にそれらの関係性を統合します。

---

### 1. 古典情報幾何学の基礎構造

古典情報幾何学は、確率分布のなす空間の幾何学を扱います。

#### 1.1. 舞台：統計多様体
パラメータ $\vec{\theta} = (\theta^1, \dots, \theta^n)$ で特徴づけられる確率分布の集合 $\{p(x;\vec{\theta})\}$ を考える。この集合は**統計多様体** $S$ をなす。

#### 1.2. 計量：フィッシャー情報計量
多様体 $S$ 上の「距離」を測るリーマン計量 $g$ として、**フィッシャー情報行列 (Fisher Information Matrix)** を導入する。その成分は、対数尤度の微分を用いて次のように定義される。

$$
g_{ij}(\vec{\theta}) = \mathbb{E}\left[ \frac{\partial \log p(x;\vec{\theta})}{\partial \theta^i} \frac{\partial \log p(x;\vec{\theta})}{\partial \theta^j} \right] = \int p(x;\vec{\theta}) \frac{\partial \log p}{\partial \theta^i} \frac{\partial \log p}{\partial \theta^j} dx
$$

これは、パラメータの微小な変化に対する分布の識別しやすさを表す。

#### 1.3. 双対接続：e接続とm接続
統計多様体には、リーマン計量に加えて、二つの特別なアフィン接続が導入される。

* **m接続 ($\nabla^{(m)}$)**: 混合 (mixture) に関して平坦な接続。m-測地線は、2つの確率分布を線形補間（混合）する経路 $p_t = (1-t)p_0 + t p_1$ に対応する。
* **e接続 ($\nabla^{(e)}$)**: 指数型 (exponential) に関して平坦な接続。指数型分布族 $p(x;\vec{\eta}) = \exp\left( \sum_i \eta_i F_i(x) - \psi(\vec{\eta}) \right)$ の自然座標系 $\vec{\eta}$ において、e-測地線は直線となる。

これら二つの接続は、フィッシャー情報計量 $g$ を介して**双対性**の関係にある。すなわち、任意のベクトル場 $X, Y, Z$ に対して、

$$
X g(Y, Z) = g(\nabla_X^{(e)} Y, Z) + g(Y, \nabla_X^{(m)} Z)
$$

が成り立つ。この $(g, \nabla^{(e)}, \nabla^{(m)})$ の組が、古典情報幾何学の基本構造である。

---

### 2. 量子情報幾何学：SLD計量と双対構造

この幾何学的構造を量子系へ一般化する。

#### 2.1. 舞台：量子状態の多様体
対象は、密度行列 $\rho(\vec{\theta})$ のなす多様体である。この状態は純粋状態でも混合状態でもよい。

#### 2.2. 計量：SLD計量
パラメータ $\theta^i$ に対する**対称対数微分 (SLD)** 演算子 $L_i$ を、以下のリアプノフ方程式によって定義する。

$$
\frac{\partial \rho(\vec{\theta})}{\partial \theta^i} = \frac{1}{2} (\rho L_i + L_i \rho)
$$

$L_i$ は、古典的なスコア関数 $\frac{\partial \log p}{\partial \theta^i}$ の量子版である。これを用いて、**SLD計量**（量子フィッシャー情報の一種）を次のように定義する。

$$
g_{ij}^{(\text{SLD})}(\vec{\theta}) = \frac{1}{2} \mathrm{Tr}(\rho \{L_i, L_j\}) = \frac{1}{2} \mathrm{Tr}(\rho (L_i L_j + L_j L_i))
$$

これは量子Cramér-Raoの定理における推定限界を定め、量子状態間の統計的距離を測るリーマン計量である。

#### 2.3. 量子版双対接続
量子状態の多様体上にも、双対接続が定義される。

* **量子m接続 ($\nabla^{(m)}$)**: 密度行列の混合 $\rho_t = (1-t)\rho_0 + t \rho_1$ の経路を測地線とする接続。
* **量子e接続 ($\nabla^{(e)}$)**: SLD計量を介して、m接続の双対として定義される接続。

これにより、古典と同様の $(g^{(\text{SLD})}, \nabla^{(m)}, \nabla^{(e)})$ という双対的な幾何構造が、混合状態を含む量子系に対しても確立される。

---

### 3. ハミルトニアンの幾何学：量子幾何テンソル

物性物理学などの文脈では、異なる視点から幾何学が導入される。

#### 3.1. 舞台：ハミルトニアンのパラメータ空間
ハミルトニアン $H(\vec{\lambda})$ が依存するパラメータ $\vec{\lambda} = (\lambda_1, \dots, \lambda_n)$ の空間を考える。ここでは、その固有状態（特に基底状態） $|\psi(\vec{\lambda})\rangle$ に着目する。

#### 3.2. 統一的対象：量子幾何テンソル (QGT)
**量子幾何テンソル (QGT)** $Q_{\mu\nu}$ は、状態ベクトルのパラメータ微分を用いて定義される複素エルミートテンソルである。

$$
Q_{\mu\nu}(\vec{\lambda}) = \langle \partial_\mu \psi | (1 - P_0) | \partial_\nu \psi \rangle
$$

ここで、$\partial_\mu = \frac{\partial}{\partial \lambda^\mu}$、射影演算子 $P_0 = |\psi\rangle\langle\psi|$ である。この射影演算子は、物理的に意味のない位相の自由度を取り除く役割を果たす。

#### 3.3. QGTの分解：実部と虚部
QGTは、その実部と虚部に分解することで物理的意味が明確になる。

$$
Q_{\mu\nu} = g_{\mu\nu} + \frac{i}{2} F_{\mu\nu}
$$

* **実部：量子計量テンソル (QMT)**
    $$
    g_{\mu\nu} = \mathrm{Re}(Q_{\mu\nu}) = \frac{1}{2} (\langle \partial_\mu \psi | \partial_\nu \psi \rangle + \langle \partial_\nu \psi | \partial_\mu \psi \rangle - \langle \partial_\mu \psi | \psi \rangle \langle \psi | \partial_\nu \psi \rangle - \langle \partial_\nu \psi | \psi \rangle \langle \psi | \partial_\mu \psi \rangle)
    $$
    これはパラメータ空間上のリーマン計量であり、状態間の距離を測る。

* **虚部：ベリー曲率**
    $$
    F_{\mu\nu} = 2\,\mathrm{Im}(Q_{\mu\nu}) = i (\langle \partial_\mu \psi | \partial_\nu \psi \rangle - \langle \partial_\nu \psi | \partial_\mu \psi \rangle - \langle \partial_\mu \psi | \psi \rangle \langle \psi | \partial_\nu \psi \rangle + \langle \partial_\nu \psi | \psi \rangle \langle \psi | \partial_\mu \psi \rangle)
    $$
    これは反対称2形式であり、ベリー接続 $A_\mu = i\langle \psi | \partial_\mu \psi \rangle$ を用いて $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ と書ける。系のトポロジカルな性質を記述する。

この $(g_{\mu\nu}, F_{\mu\nu})$ の組は、パラメータ空間に**ケーラー多様体**の構造を与えることが多い。

---

### 4. 構造の統合と関係性

これら二つの異なる文脈で導入された幾何学は、純粋状態において美しく結びつく。

#### 4.1. 純粋状態におけるSLD計量とQMTの一致
パラメータに依存する**純粋状態** $\rho(\vec{\lambda}) = |\psi(\vec{\lambda})\rangle\langle\psi(\vec{\lambda})|$ を考える。このとき、**SLD計量は、量子幾何テンソルの実部（QMT）と完全に一致する**。

$$
g_{\mu\nu}^{(\text{SLD})} = g_{\mu\nu}^{(\text{QMT})}
$$

これは、両者が純粋状態のなす複素射影空間上の自然な計量である **Fubini-Study計量** を、異なる側面から表現したものであることを意味する。

#### 4.2. 枠組みの相補性
両者の枠組みは相補的な役割を持つ。

* **QGTの枠組み ($g, F$)**:
    * **利点**: 系の「距離」と「トポロジー」を統一的に扱う。物性物理における物理量の応答（超流動密度、ホール伝導率など）を記述するのに強力。
    * **構造**: ケーラー幾何学

* **SLD計量の枠組み ($g, \nabla^{(e)}, \nabla^{(m)}$)**:
    * **利点**: 混合状態を自然に扱え、量子推定理論に直結する。双対構造により、推定量の構成や漸近理論の解析に強力なツール（射影定理など）を提供する。
    * **構造**: 双対リーマン幾何学（情報幾何学）

最終的に、どちらの幾何学的構造に着目するかは、「系の物理的応答のトポロジーを知りたいのか（→QGT）」、それとも「状態に含まれる情報の推定限界とその構造を知りたいのか（→SLD計量と情報幾何学）」という、解決したい問題に応じて選択される。しかしその根底には、純粋状態におけるFubini-Study計量という共通の基盤が存在しているのである。