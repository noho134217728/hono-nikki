---
title: '量子計量テンソルとSLD計量、量子パラメータ推定について勉強中'
description: '今日勉強したことを一旦文章でまとめてみます。'
date: 2025-06-29
tags: ['量子幾何学', '量子情報', '物理学', '理論']
---

# 総まとめ：情報幾何学から量子幾何学へ（数理的定式化）

こんにちは。この記事では、**古典情報幾何学**から出発し、**量子情報幾何学（SLD 計量）**、そして物性物理でよく登場する**量子幾何テンソル（QGT）**へと順を追って学んだ内容を、**学生目線**で「～です／～ます」口調にまとめます。最後に、それぞれの構造がどのようにつながるかを整理しますね。

---

## 1. 古典情報幾何学の基礎構造

### 1.1 統計多様体という舞台  
パラメータ $\vec{\theta}=(\theta^1,\dots,\theta^n)$ で特徴づけられる確率分布族 $\{p(x;\vec{\theta})\}$ を考え、この集合を**統計多様体** $S$ と呼びます。

### 1.2 距離を測るフィッシャー情報計量  
統計多様体 $S$ 上のリーマン計量として、**フィッシャー情報行列**を用います。その成分は

$$
g_{ij}(\vec{\theta})
  = \mathbb{E}\!\left[
      \frac{\partial \log p}{\partial \theta^i}
      \frac{\partial \log p}{\partial \theta^j}
    \right]
  = \int p(x;\vec{\theta})
      \frac{\partial \log p}{\partial \theta^i}
      \frac{\partial \log p}{\partial \theta^j} \, dx
$$

です。これは、パラメータを少し変えたときに分布がどれだけ識別しやすくなるかを「距離」として表しています。

### 1.3 双対接続：e 接続と m 接続  
リーマン計量だけでなく、統計多様体には**二つのアフィン接続**が入ります。

| 接続 | 平坦になる座標 | 測地線の意味 |
|------|----------------|--------------|
| **m 接続** ($\nabla^{(m)}$) | 混合座標 | 分布同士を線形補間する経路 |
| **e 接続** ($\nabla^{(e)}$) | 指数座標 | 指数型分布族で直線となる経路 |

両接続はフィッシャー情報計量 $g$ を介して**双対**になり、次式が成り立ちます。

$$
X g(Y,Z)
  = g\!\bigl(\nabla^{(e)}_X Y,\, Z \bigr)
  + g\!\bigl( Y,\, \nabla^{(m)}_X Z \bigr).
$$

※ちなみに、**α-接続**という連続パラメータ $\alpha$ の族を導入すると、  
$\alpha = +1$ で e 接続、$\alpha = -1$ で m 接続、$\alpha = 0$ で Levi-Civita 接続（Fisher–Rao 幾何）になります。こうすると体系的に理解しやすいです。

---

## 2. 量子情報幾何学：SLD 計量と双対構造

### 2.1 密度行列多様体  
量子系では確率分布の代わりに**密度行列** $\rho(\vec{\theta})$ を扱い、その集合を多様体とみなします。

### 2.2 SLD（対称対数微分）と量子フィッシャー情報  
パラメータごとに **SLD 演算子** $L_i$ を

$$
\frac{\partial \rho}{\partial \theta^i}
  = \frac12\bigl(\rho L_i + L_i\rho\bigr)
$$

で定め、**SLD 計量**（量子フィッシャー情報の一種）を

$$
g_{ij}^{(\mathrm{SLD})}
  = \frac12 \operatorname{Tr}\bigl(\rho \{L_i,L_j\}\bigr)
$$

と置きます。これは**量子 Cramér–Rao 不等式の下限を決める**量です。この不等式はパラメータに対するばらつきが下からバウンドされることを表現する不等式

$$
V[\hat{\theta}] \geq I(\theta)^{-1} = \frac{1}{N}G(\theta)^{-1}
$$

なので、**あらゆる手法を用いても、パラメータ推定のばらつきを最小化する理論限界が存在する**ことを主張する大事な不等式です。

### 2.3 量子版の e/m 双対  
量子情報幾何でも **α-接続**が定義され、$\alpha = +1$ が量子 e 接続、$\alpha = -1$ が量子 m 接続に対応します。SLD 計量はその $\alpha=0$ に対応し、古典の場合とパラレルな構造が得られます。

---

## 3. ハミルトニアンの幾何学：量子幾何テンソル (QGT)

### 3.1 パラメータ空間  
ハミルトニアン $H(\vec{\lambda})$ がパラメータ $\vec{\lambda}$ に依存するとき、基底状態 $|\psi(\vec{\lambda})\rangle$ の変化を調べます。

### 3.2 QGT の定義  

$$
Q_{\mu\nu}
  = \bigl\langle \partial_\mu\psi \,\bigl|\,
      (1-P_0)\,\bigr|\,\partial_\nu\psi \bigr\rangle,
\qquad
P_0 = |\psi\rangle\langle\psi|.
$$

### 3.3 実部と虚部  

$$
Q_{\mu\nu} = g_{\mu\nu} + \tfrac{i}{2} F_{\mu\nu}.
$$

* **実部 $g_{\mu\nu}$**（量子計量テンソル QMT）… 状態間の距離。  
* **虚部 $F_{\mu\nu}$**（ベリー曲率）… トポロジカル性を示す量。

---

## 4. 構造の統合と関係性

### 4.1 純粋状態での一致  
純粋状態 $\rho = |\psi\rangle\langle\psi|$ に限れば

$$
g_{\mu\nu}^{(\mathrm{SLD})} = g_{\mu\nu}^{(\mathrm{QMT})}
$$

となり、どちらも射影ヒルベルト空間の**Fubini–Study 計量**を表します。

### 4.2 混合状態では？  
混合状態では一般に一致しません。  
QGT を直接混合状態へ拡張すると **Bures 計量**に対応し、これは SLD 計量と同値になりますが、ランクが変わる点で連続性の取り扱いに注意が要るらしいです(勉強中…)。

### 4.3 まとめ：QGT vs SLD  
| 観点 | QGT 枠組み | SLD（情報幾何）枠組み |
|------|------------|------------------------|
| 主目的 | 応答係数・トポロジー | 推定限界・統計構造 |
| 取扱対象 | 基底状態が中心（純粋） | 純粋・混合どちらも可 |
| 構造 | $(g,F)$ による（ケーラー条件は場合による） | $(g,\nabla^{(e)},\nabla^{(m)})$ |
| 純粋状態 | $g$ が FS 計量、$F$ がベリー曲率 | $g$ が FS 計量 |
| 混合状態 | Bures 距離に自然拡張 | SLD/RLD/BKM など多数 |

「トポロジカル応答を知りたいのか」それとも「推定理論的な限界を知りたいのか」で、使い分けると良いと思います。

---

## 参考文献  

1. F. Nielsen, *Information Geometry: Geometry of Dual Structures*（スライド, 2023）[[PDF]](https://franknielsen.github.io/SlidesVideo/DualGeometryIG-Short.pdf) :contentReference[oaicite:0]{index=0}  
2. Frank Nielsen, *An Elementary Introduction to Information Geometry*（arXiv:1808.08271, 2020）[[PDF]](https://arxiv.org/pdf/1808.08271) :contentReference[oaicite:1]{index=1}  
3. Paolo Gibilisco, Tommaso Isola, *On the monotonicity of scalar curvature in classical and quantum information*（math-ph/0407007, 2022）[[PDF]](https://arxiv.org/pdf/math-ph/0407007) :contentReference[oaicite:2]{index=2}  
4. Tomohiro Shitara,& Masahito Ueda, *Determining the continuous family of quantum Fisher information from linear-response theory*（Phys. Rev. A 94, 062316 (2016) [[APS]](https://link.aps.org/doi/10.1103/PhysRevA.94.062316) :contentReference[oaicite:3]{index=3}  
