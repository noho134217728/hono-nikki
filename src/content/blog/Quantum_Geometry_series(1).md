---
title: '経路積分から見えるベリー接続と量子計量テンソル'
description: '波動関数の幾何学的性質──ベリー接続や量子計量テンソル──は、経路積分の視点からどう現れるのでしょうか？幾何位相と情報量を結ぶこの構造を、経路積分で導く視点から解説します。'
date: '2025-07-04'
tags: ['量子幾何学', 'ゲージ理論', '経路積分', '量子計量テンソル', '物性物理', '量子情報']
---

<div class="note-box">
<p><strong>命題</strong></p>
速い自由度を経路積分で除去すると、遅いパラメータ $\mathbf R(t)$ に対する有効ラグランジアンが

$$
L_{\rm eff}(\mathbf R,\dot{\mathbf R})
=-E_0(\mathbf R)
+\mathcal A_{0\mu}(\mathbf R)\,\dot R^\mu
-\tfrac12\,g_{\mu\nu}(\mathbf R)\,\dot R^\mu\dot R^\nu
+\mathcal O(\dot R^3)
$$
の形で現れることを示す。
</div>

## 1. 系の定義と経路積分

量子系を「速い自由度」（電子など、$\psi$）と「遅いパラメータ」（原子核位置や外部場、$\mathbf R(t)$）に分ける。  
全作用は
$$
S[\psi,\psi^\dagger;\mathbf R]
=\int dt\bigl[i\langle\psi|\partial_t|\psi\rangle-\langle\psi|H(\mathbf R)|\psi\rangle\bigr],
$$
分配関数（経路積分）は
$$
Z=\int\mathcal D[\psi^\dagger,\psi]\,e^{iS[\psi,\psi^\dagger;\mathbf R]}
=\int\mathcal D\mathbf R\,e^{iS_{\rm eff}[\mathbf R]},
\quad
S_{\rm eff}[\mathbf R]=\int dt\,L_{\rm eff}(\mathbf R,\dot{\mathbf R}).
$$

---

## 2. 瞬時固有状態展開

1. 瞬時ハミルトニアン：  
   $$
     H(\mathbf R(t))\,|n(\mathbf R)\rangle=E_n(\mathbf R)\,|n(\mathbf R)\rangle.
   $$
2. 全状態を固有基底で展開：  
   $$
     |\Psi(t)\rangle=\sum_n c_n(t)\,|n(\mathbf R(t))\rangle.
   $$
3. 作用に代入すると、
   $$
     S=\int dt\Bigl[
       i\sum_n c_n^*\dot c_n
       -\sum_{n,m}c_n^*c_m\bigl(A_{nm,\mu}(\mathbf R)\dot R^\mu+E_n\delta_{nm}\bigr)
     \Bigr],
   $$
   ただし
   $$
     A_{nm,\mu}(\mathbf R)
     =i\langle n(\mathbf R)|\partial_\mu m(\mathbf R)\rangle,
     \quad
     \partial_\mu\equiv\frac{\partial}{\partial R^\mu}.
   $$

---

## 3. 断熱展開と Berry 接続

基底状態 $c_0\equiv c$ 以外の係数 $c_{n\neq0}$ は非断熱遷移で小さく、  
$$
i\dot c_n - A_{n0,\mu}\dot R^\mu\,c_0 - E_n c_n=0
\quad(n\neq0)
\quad\Longrightarrow\quad
c_n\simeq -\frac{A_{n0,\mu}\,\dot R^\mu}{E_n-E_0}\,c.
$$  
これをガウス積分で消去すると、基底状態のみの有効ラグランジアンが得られる。

<div class="note-box">
<p><strong>Berry 接続項</strong></p>

$$
L_{\rm eff}^{(1)}=-\,\mathcal A_{0\mu}(\mathbf R)\,\dot R^\mu,
\qquad
\mathcal A_{0\mu}=i\langle0|\partial_\mu0\rangle.
$$
</div>

---

## 4. 量子計量テンソルの導出

1. 励起状態の寄与は
   $$
     |c_n|^2\simeq\frac{A_{n0,\mu}A_{0n,\nu}}{(E_n-E_0)^2}\,\dot R^\mu\dot R^\nu,
     \quad
     \sum_{n\neq0}|c_n|^2E_n
     =\sum_{n\neq0}\frac{A_{n0,\mu}A_{0n,\nu}}{E_n-E_0}\,\dot R^\mu\dot R^\nu.
   $$
2. 定義
   $$
     G_{\mu\nu}
     =2\,\mathrm{Re}\sum_{n\neq0}\frac{A_{0n,\mu}A_{n0,\nu}}{E_n-E_0},
   $$
   これが $\dot R^2$ 補正の元。
3. 完全性と non-adiabatic coupling で書き直すと
   $$
     \sum_{n\neq0}A_{0n,\mu}A_{n0,\nu}
     =\langle\partial_\mu0|(1-|0\rangle\langle0|)|\partial_\nu0\rangle.
   $$
4. 量子計量テンソルの定義
   $$
     g_{\mu\nu}(\mathbf R)
     =\mathrm{Re}\bigl\langle\partial_\mu0\bigl|(1-|0\rangle\langle0|)\bigr|\partial_\nu0\bigr\rangle
     =2\,\mathrm{Re}\sum_{n\neq0}
       \frac{\langle0|\partial_\mu H|n\rangle\langle n|\partial_\nu H|0\rangle}
            {(E_n-E_0)^2}.
   $$
<div class="note-box">
<p><strong>量子計量テンソル項</strong></p>

$$
L_{\rm eff}^{(2)}=-\tfrac12\,g_{\mu\nu}(\mathbf R)\,\dot R^\mu\dot R^\nu.
$$
</div>

---

## 5. 最終形

以上をまとめると、
$$
\boxed{
  L_{\rm eff}(\mathbf R,\dot{\mathbf R})
  =-E_0(\mathbf R)
   +\mathcal A_{0\mu}(\mathbf R)\,\dot R^\mu
   -\tfrac12\,g_{\mu\nu}(\mathbf R)\,\dot R^\mu\dot R^\nu
   +\mathcal O(\dot R^3).
}
$$

- $-E_0$：断熱ポテンシャル  
- $+\mathcal A_{0\mu}\dot R^\mu$：Berry 接続（位相項）  
- $-\tfrac12g_{\mu\nu}\dot R^\mu\dot R^\nu$：量子計量テンソル（慣性補正項）  

---
> 量子計量テンソルと経路積分が結びつくのが面白いですね