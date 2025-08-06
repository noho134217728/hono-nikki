---
title: '代数操作（式の変形）'
description: 'Sympy を用いた式の展開、因数分解、部分分数分解、簡約、有理化などの基本的な式変形を演習問題で学ぶ記事。'
date: '2025-08-03'
tags: ['Python','sympy']
---

# 第1章：代数操作（式の変形）

この記事では、Pythonの数式処理ライブラリ **Sympy** を使って、式の展開、因数分解、部分分数分解、簡約、有理化といった基本的な代数操作を行う方法を、具体的な演習問題を通して学びます。

## イントロ: 基本知識

Sympyは、記号計算を可能にする強力なライブラリです。まず、基本的なコマンドの概要を見ていきましょう。

### 式の展開 (expand)

### 因数分解 (factor)

### 部分分数分解 (apart)

### 式の簡約 (simplify)

### 有理化 (radsimp)

---

## 問題1: 式の展開

### 問題
<div class = "note-box">
次の式を展開しなさい。

$$ (x + 2y)^3 $$
</div>

### 解答例

```python
import sympy

# 変数を定義
x, y = sympy.symbols('x y')

# 式を定義
expr = (x + 2*y)**3

# 式を展開
expanded_expr = sympy.expand(expr)

# 出力
print(expanded_expr) # そのまま出力
display(expanded_expr) # 綺麗に出力
```

---

## 問題2: 因数分解

### 問題
<div class = "note-box">

</div>

### 解答例

---

## 問題3: 部分分数分解 

### 問題
<div class = "note-box">

</div>

### 解答例

---

## 問題4: 式の簡約

### 問題
<div class = "note-box">

</div>

### 解答例

---

## 問題5: 有理化

### 問題
<div class = "note-box">

</div>

### 解答例