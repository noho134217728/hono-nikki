---
title: '量子計量テンソルの解説(1)：量子状態空間を“計る”とは？'
description: '量子状態の“距離”を測るという発想を通じて、量子計量テンソルの必要性を直感的に紹介する。'
date: '2025-06-27'
tags: ['量子計量シリーズ', '量子情報', '物理学', '理論']
---

## 1. 量子状態とは何か？
量子力学では、閉じた系の純粋状態は正規化されたベクトル  

$$
|\psi\rangle \in \mathcal H, \qquad \langle\psi|\psi\rangle = 1
$$  

で表されます（混合状態の場合は密度演算子 $\rho$ を用いますが、本稿では純粋状態で議論をはじめます）。

---

## 2. 距離のある量子世界
古典幾何では、2 点 $\mathbf x, \mathbf y \in \mathbb R^n$ の“近さ”をユークリッド距離  

$$
d_\text{E}(\mathbf x,\mathbf y)=\|\mathbf x-\mathbf y\|
$$  

で測ります。量子状態空間でも、**測定で区別しにくいほど距離が短い** という直感を定式化できます。

### 2.1 フィデリティと Fubini–Study 距離
2 つの純粋状態 $|\psi\rangle, |\phi\rangle$ のフィデリティ（類似度）は  

$$
F(|\psi\rangle,|\phi\rangle)=|\langle\psi|\phi\rangle|^2 .
$$  

このフィデリティから誘導される距離（Fubini–Study 距離）は  

$$
d_\text{FS}(|\psi\rangle,|\phi\rangle)
= \arccos\!\bigl(\sqrt{F(|\psi\rangle,|\phi\rangle)}\bigr) .
$$  

### 2.2 無限小変化と量子計量
パラメータ $\boldsymbol\lambda=(\lambda^1,\ldots,\lambda^m)$ でラベル付けされた状態列 $|\psi(\boldsymbol\lambda)\rangle$ を考え、  
$\boldsymbol\lambda \to \boldsymbol\lambda + \mathrm d\boldsymbol\lambda$ の無限小変化を取ると、

$$
\begin{aligned}
\mathrm d s^2
&= 4\bigl(1 - |\langle\psi(\boldsymbol\lambda)|\psi(\boldsymbol\lambda+\mathrm d\boldsymbol\lambda)\rangle|^2\bigr) \\
&= \sum_{i,j} g_{ij}(\boldsymbol\lambda)\,\mathrm d\lambda^i\,\mathrm d\lambda^j .
\end{aligned}
$$

ここで現れる係数  

$$
g_{ij}(\boldsymbol\lambda)
= \Re\!\bigl[\langle\partial_i\psi|\bigl(1-|\psi\rangle\langle\psi|\bigr)|\partial_j\psi\rangle\bigr],
\qquad
|\partial_i\psi\rangle \equiv \frac{\partial}{\partial\lambda^i}|\psi(\boldsymbol\lambda)\rangle
$$  

が **量子計量テンソルの実部**、別名 **量子計量（Quantum Metric Tensor）** です。  

> 📌 **ポイント**：距離の定義は「内積がどれだけ変化するか」を測る二階微分量から得られる。

---

## 3. 幾何的視点が重要な理由
量子状態の **変化のしやすさ**（＝計量テンソルが大きい方向）は、測定で区別しやすく、量子相の変化や物理応答に敏感です。例えば、

* **量子相転移**：臨界点付近で $\det g_{ij}$ がピークを示すことが多く、相転移のシグネチャになる。  
* **量子推定理論**：量子フィッシャー情報量 $I_Q = 4\,g_{ij}\,\mathrm d\lambda^i \mathrm d\lambda^j$ はパラメータ推定精度の限界（クラメラ‐ラオ限界）を与える。  
* **トポロジカル物質**：Berry 曲率は QGT の虚部から得られ、量子ホール効果などトポロジカル応答を決定する。

---

## 4. まとめ
* 距離＝“区別のしにくさ” を量子状態空間に導入すると、無限小距離はテンソル $g_{ij}$ によって決まる。  
* このテンソルの **実部** が量子計量、**虚部** が Berry 接続／曲率につながる。  
* QGT は量子推定、物性、量子情報処理の幅広い文脈で“物理量の感度”を定量化する共通言語となる。

---

次回（第2回）は、ここで触れた無限小距離の式を出発点に、量子計量テンソル $g_{ij}$ と Berry 曲率 $\Omega_{ij}$ の正式な定義を行い、その物理的意味をさらに掘り下げます。
