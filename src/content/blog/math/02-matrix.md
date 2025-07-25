---
title: "2. 行列とその基本的な演算"
description: "ベクトルを拡張した概念である行列を定義し、データセットの表現や線形変換としての役割を解説します。また、データサイエンスで必須となる行列の積などの基本的な演算についても詳述します。"
date: 2025-07-25
tags: ["データサイエンスの数学", "線形代数"]
---

前回の記事では、データの基本的な表現単位であるベクトルについて学びました。今回はその概念を拡張し、複数のベクトルをまとめて扱うための強力なツール、**行列 (Matrix)** について解説します。

---

### 行列の定義

行列とは、数や記号を長方形の形に並べたものです。$m$個の行と$n$個の列を持つ行列 $A$ は **$m \times n$ 行列** と呼ばれ、以下のように表現されます。

$$
A = 
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

ここで、$a_{ij}$ は行列$A$の$i$行目、$j$列目の要素を指します。
ベクトルは、列数が1 ($n=1$) の行列（列ベクトル）や、行数が1 ($m=1$) の行列（行ベクトル）と見なすことができます。

---

### データサイエンスにおける行列の役割

行列は、単に数を並べたものではなく、データサイエンスにおいて中心的な役割を果たします。

#### 1. データセットの表現
一般的なデータセットは、$m$個のサンプル（データ点）と$n$個の特徴量から構成されます。これは、$m \times n$ 行列として自然に表現できます。各行が1つのサンプル（特徴ベクトル）に対応し、各列が1つの特徴量に対応します。このような行列は**計画行列 (design matrix)** やデータ行列と呼ばれます。

#### 2. 線形変換
行列の最も強力な役割の一つが、**線形変換 (linear transformation)** です。行列 $A$ をベクトル $ \vec{x} $ に掛ける（作用させる）と、新しいベクトル $ \vec{b} $ が得られます。

$$
A\vec{x} = \vec{b}
$$

これは、ベクトル $ \vec{x} $ を別のベクトル $ \vec{b} $ に「変換」または「写像」する操作と解釈できます。この変換は、データの回転、拡大・縮小、射影などを含み、主成分分析（PCA）やニューラルネットワークの各層での計算の基礎となります。

---

### 行列の基本的な演算

#### 1. 和とスカラー倍
同じサイズの行列同士は、対応する要素を足し合わせることで和を計算できます。スカラー倍も、全要素にそのスカラーを掛けるだけで、ベクトルと同様です。

#### 2. 行列の積
行列の積は、データサイエンスで最も頻出する演算の一つであり、単純な要素ごとの積ではないため注意が必要です。$m \times n$ 行列 $A$ と $n \times p$ 行列 $B$ の積 $C = AB$ は、$m \times p$ 行列になります。

$C$ の $i$行$j$列目の要素 $c_{ij}$ は、$A$ の $i$番目の行ベクトルと $B$ の $j$番目の列ベクトルの**内積**によって計算されます。

$$
c_{ij} = \sum_{k=1}^n a_{ik} b_{kj}
$$

**注意点:** 行列の積は一般に**可換ではありません**。つまり、$AB \neq BA$ です。

---

### 特別な行列

#### 1. 転置行列 (Transpose Matrix)
行列 $A$ の行と列を入れ替えて得られる行列を転置行列といい、$A^T$ で表します。$(A^T)_{ij} = A_{ji}$ が成り立ちます。統計学や機械学習の数式で頻繁に登場します。

#### 2. 単位行列 (Identity Matrix)
対角成分がすべて1で、それ以外の成分がすべて0である正方行列（行と列の数が等しい行列）を単位行列といい、$I$ で表します。どのような行列 $A$ に対しても、$AI = IA = A$ が成り立つ、積における「1」のような存在です。

$$
I_3 = 
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}
$$

---

### まとめ

行列は、複数のデータをまとめて効率的に扱うための数学的な構造です。データセットそのものを表現するだけでなく、線形変換という形でデータを操作・変換する強力な機能を提供します。特に行列の積は、多くのアルゴリズムの根幹をなす演算であり、その計算方法と性質を理解することは不可欠です。