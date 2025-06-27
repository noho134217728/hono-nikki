---
title: '量子計量テンソルの解説 (1)：量子状態空間を“計る”とは？'
description: '量子状態の“距離”という幾何学的視点から、量子計量テンソルの必要性を直感とともに厳密に導入する。量子フィッシャー情報や Berry 曲率との統一的理解も射程に収める。'
date: '2025-06-27'
tags: ['量子計量シリーズ', '量子情報', '物理学', '理論']
---

> **この記事のゴール**  
> 1. 量子状態空間に「距離」を導入する必然性を直感と数式の両面から理解する  
> 2. Fubini–Study 計量 ⇒ 量子計量テンソル ⇒ 量子幾何テンソルという流れを整理する  
> 3. 幾何学的量が量子推定理論・トポロジカル物性・相転移にどう現れるかを俯瞰する  

---

## 1. 量子状態とは何か？

量子力学では閉じた系の **純粋状態** は正規化されたヒルベルト空間ベクトル  

$$
|\psi\rangle \in \mathcal H ,\qquad \langle\psi|\psi\rangle = 1
$$  

で表される。物理的に等価な状態は *グローバル位相* を除いて同一視されるため、真に意味のある空間は射影ヒルベルト空間  

$$
\mathcal P(\mathcal H)=\{\,|\psi\rangle\langle\psi| \mid |\psi\rangle\in\mathcal H,\; \langle\psi|\psi\rangle=1 \}\; .
$$

---

## 2. 距離のある量子世界

### 2.1 フィデリティと Fubini–Study 距離

2 つの純粋状態の **フィデリティ（類似度）** は  

$$
F(|\psi\rangle,|\phi\rangle)=|\langle\psi|\phi\rangle|^{2}\; .
$$  

ここから誘導される距離（曲率半径 1 に正規化された射影空間上の測地距離）は  

$$
d_{\mathrm{FS}}(|\psi\rangle,|\phi\rangle)=\arccos\!\bigl(\sqrt{F}\bigr)\; .
$$  

> 測定で **区別しにくいほど距離は短い**──古典的ユークリッド距離と同じ発想である。

### 2.2 Fubini–Study 計量の微分形式

パラメータ $\boldsymbol\lambda=(\lambda^{1},\dots,\lambda^{m})$ に依存する状態列 $|\psi(\boldsymbol\lambda)\rangle$ を考え、$\boldsymbol\lambda\to\boldsymbol\lambda+\mathrm d\boldsymbol\lambda$ の無限小変化を取ると  

$$
\begin{aligned}
\mathrm d s^{2}
&:= d_{\mathrm{FS}}^{2}\!\bigl(|\psi(\boldsymbol\lambda)\rangle,
|\psi(\boldsymbol\lambda+\mathrm d\boldsymbol\lambda)\rangle\bigr)  \\
&=4\bigl(1-|\langle\psi(\boldsymbol\lambda)|\psi(\boldsymbol\lambda+\mathrm d\boldsymbol\lambda)\rangle|^{2}\bigr) \\
&=\sum_{i,j}g_{ij}(\boldsymbol\lambda)\,\mathrm d\lambda^{i}\mathrm d\lambda^{j}+O(\mathrm d\lambda^{3})\; ,
\end{aligned}
$$  

$$
g_{ij}(\boldsymbol\lambda)=
\Re\!\Bigl[\langle\partial_{i}\psi|
\bigl(1-|\psi\rangle\langle\psi|\bigr)|
\partial_{j}\psi\rangle\Bigr],\qquad
|\partial_{i}\psi\rangle=\frac{\partial}{\partial\lambda^{i}}|\psi(\boldsymbol\lambda)\rangle\; .
$$  

これが **量子計量テンソル（量子計量）** の実部であり、射影空間に誘導される自然なリーマン計量を与える。

---

## 3. 量子幾何テンソル：計量と Berry 曲率の統合

### 3.1 量子幾何テンソル（QGT）の定義

量子計量テンソルに対応する複素対称テンソル  

$$
Q_{ij}(\boldsymbol\lambda)=
\langle\partial_{i}\psi|
\bigl(1-|\psi\rangle\langle\psi|\bigr)|
\partial_{j}\psi\rangle
= g_{ij}+i\,\Omega_{ij}
$$  

を **量子幾何テンソル** と呼ぶ。  

* 実部 $g_{ij}=\Re Q_{ij}$：量子計量（距離の二乗）  
* 虚部 $\Omega_{ij}=2\,\Im Q_{ij}$：**Berry 曲率**  

Berry 曲率をパラメータ空間で積分すれば Berry 位相が得られ、トポロジカル不変量（チャーン数など）を与える。

### 3.2 ブロッホ状態への適用

周期系でのブロッホ状態 $|u_{n}(\mathbf k)\rangle$（バンド $n$）に対しては  

$$
g_{\mu\nu}^{(n)}(\mathbf k)=
\Re\!\Bigl[
\langle\partial_{k_{\mu}}u_{n}|
\bigl(1-|u_{n}\rangle\langle u_{n}|\bigr)|
\partial_{k_{\nu}}u_{n}\rangle
\Bigr],
$$  

$$
\Omega_{\mu\nu}^{(n)}(\mathbf k)=
2\,\Im\!\Bigl[
\langle\partial_{k_{\mu}}u_{n}|
\partial_{k_{\nu}}u_{n}\rangle
\Bigr].
$$  

これらは **バンド幾何量** と呼ばれ、トポロジカル絶縁体・量子ホール効果など多くの物性現象に現れる。

---

## 4. 幾何的量が語る物理

### 4.1 量子相転移と臨界点

* 臨界点付近では波動関数がパラメータ変化に **極端に敏感** となる。  
* 多くの場合 $\det g_{ij}$ や ${\rm Tr}\,g_{ij}$ がピーク／発散し、相転移の **指標** として機能。  

### 4.2 量子パラメータ推定と量子フィッシャー情報

量子フィッシャー情報行列は $I_{ij}=4\,g_{ij}$。クラメール–ラオ下限  

$$
\operatorname{Var}(\hat\lambda^{i})\;\ge\;
[I^{-1}]^{ii}/\nu
$$  

が成り立つ。量子計量が大きいほど **小さなパラメータ変動で量子状態が遠く離れる** ⇒ **測定で区別しやすい** ⇒ **高精度推定が可能**。

> **量子計量が大きい方向ほど、2 点間を大きく迂回して状態が急速に変わるため、測定で区別しやすくなる。**

### 4.3 トポロジカル物質と応答関数

* Berry 曲率 $\Omega_{ij}$ の積分はホール伝導度やチャーン数に直結。  
* 量子計量と Berry 曲率の組 $\mathrm{Tr}\,Q_{ij}$ は Hall viscosity にも寄与。  

---

## 5. 量子計量の拡張：混合状態と Bures 距離

現実の量子デバイスでは混合状態が避けられない。混合状態 $\rho(\boldsymbol\lambda)$ では  

$$
\mathrm d s^{2}_{\text{Bures}}
=\frac12\sum_{i,j}G_{ij}\,\mathrm d\lambda^{i}\mathrm d\lambda^{j},\qquad
G_{ij}=\frac12\operatorname{Tr}\!\bigl[\rho\,L_{i}L_{j}\bigr],
$$  

ここで $L_{i}$ は対数微分（SLD）。$G_{ij}$ は **量子フィッシャー情報行列** そのものであり、純粋状態に限らない最も一般的な量子計量となる。

---

## 6. まとめと展望

| 量 | 意味 | 関連分野 |
|---|---|---|
| $g_{ij}$ | 量子計量（距離の実部） | 推定理論・臨界現象 |
| $\Omega_{ij}$ | Berry 曲率（距離の虚部） | トポロジカル応答 |
| $Q_{ij}$ | 量子幾何テンソル | 幾何とトポロジーの統一言語 |

* 量子状態空間に **距離** を導入することで、「区別のしやすさ」「物理応答の感度」「トポロジカル位相」という一見別々の概念が一つのテンソルに統合される。  
* 本テンソルの大きさや曲率は、量子センシングから量子マテリアルまで広く **実験測定可能** な量となりつつある。  

---

### 次回（第 2 回）の予告

1. 量子計量テンソル $g_{ij}$ と Berry 曲率 $\Omega_{ij}$ をスピン鎖モデルで具体計算  
2. **超ハイゼンベルク限界**と非線形相互作用を例に、計量が推定精度をどう押し上げるか  
3. 実験的測定プロトコル（サイクルノイズ分光・干渉計測）と最近の成果


[参考文献：arXiv 2506.17386](https://arxiv.org/abs/2506.17386)