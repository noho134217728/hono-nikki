---
title: '量子計量テンソルの解説(3)：物性物理における幾何的構造'
description: 'トポロジカル物質や量子相転移における量子幾何テンソルの役割を、バンド理論の数式とともに解説する。'
date: '2025-06-27'
tags: ['量子計量シリーズ', '量子情報', '物理学', '理論']
---

## 1. ブロッホ電子と量子幾何
結晶中の電子状態はブロッホ波動関数  

$$
|\psi_{n\mathbf k}\rangle = e^{\mathrm i\mathbf k\cdot\mathbf r}\,|u_{n\mathbf k}\rangle ,
$$  

で表される（$n$ はバンド指標）。結晶運動量 $\mathbf k$ をパラメータとみなし、ブロッホ部分波動関数を  

$$
|u_{n\mathbf k}\rangle \equiv e^{-\mathrm i\mathbf k\cdot\mathbf r}\,|\psi_{n\mathbf k}\rangle
$$  

と定義すると、**量子幾何テンソル**は  

$$
Q^{(n)}_{\alpha\beta}(\mathbf k)
= \langle\partial_\alpha u_{n\mathbf k}|\partial_\beta u_{n\mathbf k}\rangle
  - \langle\partial_\alpha u_{n\mathbf k}|u_{n\mathbf k}\rangle
    \langle u_{n\mathbf k}|\partial_\beta u_{n\mathbf k}\rangle ,
\qquad
\partial_\alpha \equiv \frac{\partial}{\partial k_\alpha}.
$$

* **量子計量テンソル（実部）**  
  $$g^{(n)}_{\alpha\beta}=\Re\bigl[Q^{(n)}_{\alpha\beta}\bigr]$$

* **ベリー曲率（虚部）**  
  $$\Omega^{(n)}_{\alpha\beta}=2\,\Im\bigl[Q^{(n)}_{\alpha\beta}\bigr]$$

---

## 2. ベリー曲率と電気伝導
外電場 $\mathbf E$ 下で電子は異常速度  

$$
\dot{\mathbf r}_\text{anom}
= -\frac{e}{\hbar}\,\mathbf E \times \boldsymbol\Omega^{(n)}(\mathbf k)
$$  

を獲得する。二次元絶縁体で化学ポテンシャルがギャップ内にあるとき、全バンドの曲率を積分した **Chern 数**

$$
C_n = \frac{1}{2\pi}\int_{\text{BZ}}\! \Omega^{(n)}_{k_x k_y}\;
\mathrm d^2k
$$  

が量子ホール伝導度  

$$
\sigma_{xy} = \frac{e^2}{h}\sum_{n\in\text{occ}} C_n
$$  

を決定する。

---

## 3. 量子計量と物性応答
量子計量テンソルは、以下のような“応答のしやすさ”に現れる。

| 応答現象                         | 関連する計量成分                                |
|----------------------------------|------------------------------------------------|
| 遍歴電子の有効質量補正           | $g^{(n)}_{\alpha\beta}$ がバンド曲率と競合      |
| 絶縁体‐金属遷移の臨界スケール     | $\det g^{(n)}$ のピーク                         |
| 光学吸収（shift current 等）     | $g^{(n)}$ と $\boldsymbol\Omega^{(n)}$ の混合項 |

特に二光子吸収や非線形ホール効果では、$g$ と $\Omega$ が同時に寄与し、“量子幾何”が直接観測可能となる。

---

## 4. 二バンド Dirac モデルの例
2D Dirac ハミルトニアン  

$$
H(\mathbf k)=\mathbf d(\mathbf k)\cdot\boldsymbol\sigma,\qquad
\mathbf d(\mathbf k)=(A k_x,\,A k_y,\,M-Bk^2)
$$  

の下バンドに対し、

$$
\Omega^{(-)}_{k_x k_y}
= -\frac{A^2 M B}{2(E_{\mathbf k})^3},\qquad
g^{(-)}_{k_x k_x}=g^{(-)}_{k_y k_y}
= \frac{A^2}{4(E_{\mathbf k})^2},
$$  

$$
E_{\mathbf k}\equiv\sqrt{A^2 k^2 + (M-Bk^2)^2}.
$$

* $M/B>0$ なら $C_{-}=1$（トポロジカル絶縁体）。  
* 臨界点 $M/B=0$ で $g^{(-)}$ が発散し、相転移のシグネチャを示す。

---

## 5. 量子計量‐曲率対応関係
平坦なバンド極限では  

$$
\sum_{\alpha\beta} g^{(n)}_{\alpha\beta}
\; \ge \; |\boldsymbol\Omega^{(n)}|,
$$  

という“不等式”が提案されており、**広いベリー曲率を得るには十分な計量の広がりが必要**であることを示唆する（量子幾何バウンド）。

---

## 6. まとめ
* ブロッホ空間における **量子幾何テンソル $Q_{ij}$** は、  
  *実部＝量子計量テンソル* が金属・絶縁体応答を、  
  *虚部＝ベリー曲率* が異常輸送を決定する。  
* 二バンド Dirac 例で、相転移点で計量が発散し曲率がトポロジカル不変量に跳躍する様子が見える。  
* 量子幾何はバンド工学・光応答制御など今後の物性設計に不可欠。  

次回（第4回）は、量子情報理論の立場から量子計量テンソルと **量子フィッシャー情報** の役割を掘り下げます。
