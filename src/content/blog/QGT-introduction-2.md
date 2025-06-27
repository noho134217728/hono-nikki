---
title: '量子計量テンソルの解説(2)：量子幾何テンソルとは？'
description: '量子幾何テンソルの定義と、実部・虚部の物理的意味を直感的かつ数式で解説する。'
date: '2025-06-27'
tags: ['量子計量シリーズ', '量子情報', '物理学', '理論']
---

## 1. 量子幾何テンソルの正式な定義
パラメータ空間 $\boldsymbol\lambda=(\lambda^1,\dots,\lambda^m)$ 上で滑らかに変化する純粋状態  
$|\psi(\boldsymbol\lambda)\rangle$ に対し、その **量子幾何テンソル**（Quantum Geometric Tensor, QGT）は

$$
\boxed{
Q_{ij}(\boldsymbol\lambda)
= \langle\partial_i\psi|\partial_j\psi\rangle
- \langle\partial_i\psi|\psi\rangle
  \langle\psi|\partial_j\psi\rangle
},\qquad
\partial_i \equiv \frac{\partial}{\partial\lambda^i}.
$$

### 1.1 エルミート分解
$Q_{ij}$ は generally 複素対称テンソルで、  
$Q_{ij}=g_{ij} + \tfrac{\mathrm i}{2}\,\Omega_{ij}$ と分解できる：

* **量子計量テンソル（実部）**  
  $$g_{ij}(\boldsymbol\lambda)=\Re\bigl[Q_{ij}(\boldsymbol\lambda)\bigr]$$

* **ベリー曲率（虚部）**  
  $$\Omega_{ij}(\boldsymbol\lambda)=2\,\Im\bigl[Q_{ij}(\boldsymbol\lambda)\bigr]$$

---

## 2. 量子計量テンソルと測定感度
微小パラメータ変化 $\mathrm d\boldsymbol\lambda$ に対する距離要素は

$$
\mathrm d s^2
= g_{ij}(\boldsymbol\lambda)\,\mathrm d\lambda^i\,\mathrm d\lambda^j,
$$

すなわち $g_{ij}$ は「どの方向に**区別しやすいか**」を定量化する。  
量子推定理論では **量子フィッシャー情報量** が

$$
\boxed{
\mathcal I_{Q,ij}=4\,g_{ij}
}
$$

となり、クラメール・ラオ限界  
$\mathrm{Var}(\hat\lambda^i)\ge \bigl(\mathcal I_Q^{-1}\bigr)_{ii}$ を与える。

---

## 3. ベリー曲率と位相応答
Berry 接続 $A_i(\boldsymbol\lambda)=\mathrm i\langle\psi|\partial_i\psi\rangle$ を用いると、

$$
\Omega_{ij}
= \partial_i A_j - \partial_j A_i
= 2\,\Im\bigl[\langle\partial_i\psi|\partial_j\psi\rangle\bigr].
$$

* **位相の積分**  
  $\displaystyle \gamma = \oint_\mathcal C A_i\,\mathrm d\lambda^i$  
  が Berry 位相。  
* **曲率の積分**  
  $\displaystyle \int_\mathcal S \frac{\Omega_{ij}}{2}\,\mathrm d\lambda^i\wedge\mathrm d\lambda^j$  
  がトポロジカル不変量（Chern 数）となり、量子ホール効果などを支配。

---

## 4. 二準位系（スピン½）での具体例
磁場 $\mathbf B=(B_x,B_y,B_z)$ による Zeeman ハミルトニアン  
$H=-\tfrac{\hbar\gamma}{2}\,\mathbf B\cdot\boldsymbol\sigma$ の基底状態を取り、
球面座標 $(\theta,\phi)$ を用いる：

$$
|\psi(\theta,\phi)\rangle
=\cos\frac{\theta}{2}\,|{\uparrow}\rangle
+\mathrm e^{\mathrm i\phi}\sin\frac{\theta}{2}\,|{\downarrow}\rangle.
$$

計算すると

$$
g_{\theta\theta}=\frac14,\quad
g_{\phi\phi}=\frac14\sin^2\theta,\quad
\Omega_{\theta\phi}=\frac12\sin\theta.
$$

* $g_{\theta\theta}$, $g_{\phi\phi}$ は Bloch 球面の**半径 $1/2$ の球面計量**を与える。  
* $\Omega_{\theta\phi}$ は **単位磁荷** のベリー曲率で、全積分 $\int\Omega=2\pi$ は Chern 数 $=1$。

---

## 5. 物理的インプリケーション
| 幾何量           | 意味                                 | 物理的解釈例                       |
|------------------|--------------------------------------|------------------------------------|
| $g_{ij}$         | 距離要素（リーマン計量）             | 推定精度，量子相転移の臨界指標     |
| $\Omega_{ij}$    | 曲率（外場に対する“ねじれ”）         | ホール伝導度，トポロジカル不変量   |

---

## 6. まとめと次回予告
* **量子幾何テンソル $Q_{ij}$** は，その実部＝量子計量テンソル，虚部＝ベリー曲率という 2 in 1 の構造を持つ。  
* 量子計量テンソルは量子フィッシャー情報と直接結び付き，クラメール・ラオ限界を決定する。  
* ベリー曲率は位相応答やトポロジカル不変量を司る。  

次回（第3回）は，この幾何量が **固体のバンド構造** や **トポロジカル物質** にどう現れるかを詳しく探ります。
