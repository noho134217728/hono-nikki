---
title: 'イジングモデルのモンテカルロシミュレーション：Python'
description: '学部2年3年で苦戦したこの問題に、今なら答えられます！'
date: '2025-08-11'
tags: ['統計力学', '数値計算', '理論', 'シミュレーション']
---

# Pythonによる2次元イジングモデルのモンテカルロシミュレーション

## はじめに

統計力学は、膨大な数の粒子からなる系のマクロな性質を、ミクロな要素の相互作用から説明する物理学の根幹をなす分野です。しかし、相互作用を持つ多体系の分配関数を厳密に計算できるモデルは極めて少なく、その多くは解析的に解くことができません。そこで現代の物理学研究で強力な武器となるのが、計算機を用いた物理シミュレーションです。

本記事では、統計力学における最も重要なモデルの一つである**2次元イジングモデル**を対象に、そのシミュレーションで広く用いられる**マルコフ連鎖モンテカルロ法（MCMC）**、特に**メトロポリス法**の実装をPythonを用いてゼロから解説します。

イジングモデルは、強磁性体の振る舞いを記述する最小限のモデルでありながら、「相転移」や「臨界現象」といった多体問題に共通する豊かで普遍的な物理を内包しています。このモデルのシミュレーションを自らの手で実装し、動かすことを通して、計算物理学の基礎的な考え方とテクニックを学び取ることが本記事の目的です。

### シミュレーションが描き出す物理現象

本稿で実装するプログラムは、イジングモデルの臨界現象を可視化します。これは、系の温度を臨界点近傍に設定した際に、特徴的な磁区（ドメイン）構造が、あらゆるスケールで自己相似的に生成・消滅を繰り返す様子（臨界ゆらぎ）を捉えたものです。

それではまず、シミュレーション対象であるイジングモデルの物理的な背景から見ていきましょう。


## イジングモデルの物理的背景と定義

イジングモデルは、統計力学において相転移を記述する最も基本的なモデルの一つです。元々は物質の磁性を説明するために考案されましたが、その単純さと普遍性から、物理学の様々な分野だけでなく、経済学や情報科学などにも応用されています。

このモデルの核心は、**相互作用する多数の要素が、エネルギーを最小化しようとする秩序形成の働き（相互作用）と、熱による無秩序化の働き（熱揺らぎ）の間でどのように競合するか**を記述する点にあります。

### 格子とスピン

まず、空間を単純化した正方形の格子（Lattice）を考えます。シミュレーションでは、周期的境界条件を課すことで、有限サイズ効果を緩和するのが一般的です。

そして、この格子の各サイト（点）$i$ に、**スピン**と呼ばれる物理量を配置します。イジングモデルでは、このスピンは量子力学的な複雑さを無視し、$s_i$ という古典的なスカラー変数として扱います。スピンは2つの状態しか取ることができません。

$$
s_i = +1 \quad (\text{上向きスピン}) \quad \text{or} \quad s_i = -1 \quad (\text{下向きスピン})
$$

これは、磁性体における原子の磁気モーメントが、ある特定の方向（例えばz軸方向）に対して上を向いているか、下を向いているかという状態をモデル化したものです。

### ハミルトニアンとエネルギー

<div class = "note-box">
イジングモデルのハミルトニアン

系の全体のエネルギーは、**ハミルトニアン** $\mathcal{H}$ によって記述されます。2次元イジングモデルのハミルトニアンは以下のように定義されます。
$$
\mathcal{H} = -J \sum_{\langle i,j \rangle} s_i s_j - h \sum_i s_i
$$
</div>

この式は2つの部分から構成されています。

#### 1. 相互作用項（第1項）
$$
-J \sum_{\langle i,j \rangle} s_i s_j
$$

* $\sum_{\langle i,j \rangle}$ は、**最近接**のスピンペア（格子上で隣り合っているペア）すべてについての和を取ることを意味します。
* $J$ は**結合定数**と呼ばれ、スピン間の相互作用の強さと種類を決定します。
    * **$J > 0$ (強磁性相互作用)**: 隣り合うスピンが同じ向き ($s_i s_j = 1$) のときにエネルギーが低くなり、系は安定化します。スピンは揃おうとします。本記事ではこの場合を扱います。
    * **$J < 0$ (反強磁性相互作用)**: 隣り合うスピンが逆向き ($s_i s_j = -1$) のときにエネルギーが低くなります。スピンは互い違いの市松模様に並ぼうとします。

#### 2. 外部磁場項（第2項）
$$
-h \sum_i s_i
$$

* $h$ は外部からかけられた磁場の強さを表します。
* この項は、スピンが外部磁場と同じ向きを向いた方がエネルギーが低くなることを意味します。
* 本記事のシミュレーションでは、外部磁場がない状態での自発的な秩序形成（自発磁化）に焦点を当てるため、$h=0$ の場合を考えます。

したがって、我々がシミュレーションで扱うハミルトニアンは、よりシンプルな以下の形になります。

$$
\mathcal{H} = -J \sum_{\langle i,j \rangle} s_i s_j
$$

このエネルギーが低いほど、系は安定な状態にあると言えます。しかし、絶対零度でない限り、系は常に最低エネルギー状態にあるわけではありません。熱エネルギーによる「揺らぎ」が存在するため、ある温度 $T$ における系の状態は、エネルギーとエントロピーのバランスによって決まります。この確率的な振る舞いをシミュレートする手法が、次節で解説する**モンテカルロ法**です。

## 数値計算法：モンテカルロ法

前節で定義したハミルトニアン $\mathcal{H}$ に基づき、系の物理量を求めることが我々の目標です。統計力学によれば、ある温度 $T$ における物理量 $A$ の期待値（熱平均） $\langle A \rangle$ は、分配関数 $Z$ を用いて次のように計算されます。

<div class = "note-box">
分配関数、期待値の計算

$$
\langle A \rangle = \frac{1}{Z} \sum_{\{s\}} A(\{s\}) e^{-\beta \mathcal{H}(\{s\})}, \quad Z = \sum_{\{s\}} e^{-\beta \mathcal{H}(\{s\})}
$$
</div>

ここで $\beta = 1/(k_B T)$ であり、$\sum_{\{s\}}$ は**全ての可能なスピン配位**にわたる和を意味します。

### 計算困難性の壁

この定義から明らかなように、物理量を厳密に計算するには、全ての可能なスピン配位を列挙する必要があります。しかし、$L \times L$ の格子系では、スピン配位の総数は $2^{L \times L}$ 通りにもなります。例えば、わずか $32 \times 32$ の格子でさえ、その総数は $2^{1024} \approx 10^{308}$ という天文学的な数字になり、直接計算は不可能です。

そこで、全ての状態を足し合わせる代わりに、系が取りやすい**重要な状態を重点的にサンプリング（標本抽出）する**というアプローチが必要になります。これを実現するのが**マルコフ連鎖モンテカルロ法 (Markov Chain Monte Carlo, MCMC)** です。

### メトロポリス法によるアプローチ

<div class = "note-box">
マルコフ連鎖モンテカルロ法(MCMC)：メトロポリス法

MCMCの一つである**メトロポリス法**（より厳密にはメトロポリス・ヘイスティングス法）は、以下の要件を満たすようなスピン配位の時系列 $\{s_1, s_2, s_3, \dots\}$ を確率的に生成するアルゴリズムです。

1.  生成される配位の出現確率が、その系の熱平衡状態における確率分布、すなわち**ボルツマン分布** $P(\{s\}) \propto e^{-\beta \mathcal{H}(\{s\})}$ に従う。
2.  十分なステップ数を経てば、初期状態の選び方によらず、上記の平衡分布に収束する。

</div>

この性質により、シミュレーションで得られた長い時系列を使って物理量の平均を取ることで、統計力学的な期待値（熱平均）を近似的に求めることができます。

$$
\langle A \rangle \approx \frac{1}{M} \sum_{k=k_0+1}^{k_0+M} A_k
$$

ここで $k_0$ は系が熱平衡に達するまでの初期緩和ステップ、Mは平均を取るためのステップ数です。

### アルゴリズムの詳細

メトロポリス法では、以下の単純なステップを繰り返し実行することで、スピン配位を更新していきます。

1.  **初期状態の準備**: スピン配位をランダム、または全て同じ向きに揃えた状態から開始する。

2.  **更新候補の選択**: 格子上のサイト $i$ を一つランダムに選ぶ。このサイトのスピン $s_i$ を反転させた配位を「更新候補」とする ($s_i \to s'_i = -s_i$)。

3.  **エネルギー変化の計算**: スピンを反転させたことによる系のエネルギー変化 $\Delta E = E_{\text{new}} - E_{\text{old}}$ を計算する。全エネルギーを再計算する必要はなく、反転したスピンとその最近接スピンとの相互作用の変化のみを考えればよいため、高速に計算できる。

    $$
    \Delta E = 2J s_i \sum_{j \in nn(i)} s_j
    $$
    ここで $\sum_{j \in nn(i)}$ はサイト $i$ の最近接サイト $j$ にわたる和を意味する。

4.  **受理・棄却の判定**: 計算した $\Delta E$ に基づき、以下のルールでスピンの反転を確率的に受理、または棄却する。
    * **$\Delta E \le 0$ の場合**: 新しい状態はエネルギー的により安定であるため、この変化を**必ず受理**する ($s_i \to s'_i$)。
    * **$\Delta E > 0$ の場合**: 新しい状態はより不安定になるが、熱揺らぎの効果を取り入れるため、確率 $P = e^{-\Delta E / (k_B T)}$ でこの変化を**受理**する。受理されなかった場合は、スピンを反転させず元の状態を維持する。
        * 実装上は、$[0, 1)$ の一様乱数 $r$ を生成し、$r < P$ であれば受理する、という判定を行う。

5.  **繰り返す**: 上記のステップ2〜4を多数回（例えば、系のサイト数 $L \times L$ 回を1モンテカルロステップ(MCS)として、数千〜数万MCS）繰り返す。

この単純なアルゴリズム、特にステップ4の確率的な判定が、系を正しいボルツマン分布へと導く鍵となります。次節では、このアルゴリズムをPythonで具体的に実装していきます。

## 実装 (Pythonコード)

これまでの理論に基づき、2次元イジングモデルのシミュレーションをPythonで実装します。
可視化には`matplotlib`、数値計算には`numpy`を使用します。レイアウトは、左側にスピン配列の様子を大きく表示し、右側に物理量の時間発展を示すグラフを3つ縦に並べる構成です。

コード全体は以下のようになります。コピー＆ペーストして`.py`ファイルとして保存すれば、すぐに実行できます。

アニメーションの描画方法を3種類用意しました。実行環境に応じてコメントアウトを外して下さい。

> $N = 100$とかでやろうとすると20分ぐらいかかるので、まずは$ N=20 $から始めることを推奨します。

```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import matplotlib.gridspec as gridspec
from IPython.display import HTML # Jupyter/Colab用

# --- シミュレーションパラメータ ---
N = 20          # 格子の一辺のサイズ
J = 1.0         # 相互作用の強さ
T = 2.269       # 温度 (臨界温度 Tc ≈ 2.269)
k_B = 1.0       # ボルツマン定数

# アニメーション設定
frames = 500    # アニメーションの総フレーム数
mc_steps_per_frame = 10 # 1フレームあたりのモンテカルロステップ数 (1 MCS = N*N回の試行)

# --- 初期化 ---
# スピン配列をランダムに初期化 (-1 or +1)
spins = np.random.choice([-1, 1], size=(N, N))

# 初期のエネルギーと磁化を計算
energy = -J * np.sum(spins * (np.roll(spins, 1, axis=0) + np.roll(spins, 1, axis=1)))
magnetization = np.sum(spins)

# --- プロットの準備（GridSpecを使用）---
fig = plt.figure(figsize=(10, 6))
gs = gridspec.GridSpec(3, 2, width_ratios=[1.2, 1])

ax1 = fig.add_subplot(gs[:, 0]) # スピン配列 (左の列をすべて使用)
ax2 = fig.add_subplot(gs[0, 1]) # 磁化 (右の列の1行目)
ax3 = fig.add_subplot(gs[1, 1]) # エネルギー (右の列の2行目)
ax4 = fig.add_subplot(gs[2, 1]) # 比熱 (右の列の3行目)

# スピン配列の初期描画
im = ax1.imshow(spins, cmap='binary', vmin=-1, vmax=1, animated=True)
ax1.set_title("Spin Configuration")
ax1.set_axis_off()

# データ保存用リスト
time_points, energy_history, magnetization_history, specific_heat_history = [], [], [], []
energy_sq_history = [] # 比熱計算用

# --- アニメーション更新関数 ---
def update(frame):
    global spins, energy, magnetization
    
    # 1フレームあたりに指定されたMCSを実行
    for _ in range(mc_steps_per_frame * N * N):
        # 1. ランダムにスピンを一つ選ぶ
        i, j = np.random.randint(0, N, size=2)
        s_ij = spins[i, j]
        
        # 2. エネルギー変化 ΔE を計算
        neighbors_sum = (spins[(i + 1) % N, j] + spins[(i - 1) % N, j] +
                         spins[i, (j + 1) % N] + spins[i, (j - 1) % N])
        delta_E = 2 * J * s_ij * neighbors_sum
        
        # 3. メトロポリス法の判定基準に従ってスピンを更新
        if delta_E < 0 or np.random.rand() < np.exp(-delta_E / (k_B * T)):
            spins[i, j] *= -1
            energy += delta_E
            magnetization += 2 * spins[i, j]
            
    # 物理量を記録
    current_step = (frame + 1) * mc_steps_per_frame
    time_points.append(current_step)
    
    energy_history.append(energy / (N*N))
    magnetization_history.append(magnetization / (N*N))
    energy_sq_history.append(energy**2)
    
    # 比熱を計算 C_v = (<E^2> - <E>^2) / (k_B * T^2)
    if frame > 1:
        mean_E = np.mean(energy_history) * (N*N)
        mean_E2 = np.mean(energy_sq_history)
        cv = (mean_E2 - mean_E**2) / (k_B * T**2 * (N*N))
        specific_heat_history.append(cv)
    else:
        specific_heat_history.append(0)

    # --- プロットを更新 ---
    im.set_array(spins)
    
    # 磁化
    ax2.clear(); ax2.plot(time_points, magnetization_history, color='blue'); ax2.set_title("Magnetization / Spin"); ax2.set_ylim(-1.1, 1.1)
    
    # エネルギー
    ax3.clear(); ax3.plot(time_points, energy_history, color='red'); ax3.set_title("Energy / Spin")
    
    # 比熱
    ax4.clear(); ax4.plot(time_points, specific_heat_history, color='purple'); ax4.set_title("Specific Heat / Spin"); ax4.set_xlabel("MC Steps")
    
    # 全体のタイトル
    fig.suptitle(f'2D Ising Model at T={T} (Step: {current_step})', fontsize=16)
    plt.tight_layout(rect=[0, 0, 1, 0.96])
    
    return [im]

# --- アニメーションの実行 ---
# FuncAnimationでアニメーションオブジェクトを作成
ani = animation.FuncAnimation(fig, update, frames=frames, interval=50, blit=True, repeat=False)

# ===========================================================
# ▼▼▼ 実行環境に合わせて、以下のいずれかのコメントを解除してください ▼▼▼
# ===========================================================

# --- 方法1: ウィンドウでリアルタイムに表示 ---
print("アニメーションウィンドウを表示します。")
plt.show()

# # --- 方法2: アニメーションをGIFファイルとして保存 ---
# print("アニメーションをGIFファイルとして保存します... (時間がかかります)")
# ani.save('ising_animation.gif', writer='imagemagick', fps=15)
# print("保存が完了しました: ising_animation.gif")

# # --- 方法3: Jupyter Notebook / Google Colab でインライン表示 ---
print("Jupyter Notebook / Colab 用のビデオを生成します...")
plt.close(fig)
display(HTML(ani.to_html5_video()))
print("生成が完了しました。")

```

### メトロポリス法による状態の更新

数値計算の核となる部分はここです。

```python
# 1フレームあたりに指定されたMCSを実行
    for _ in range(mc_steps_per_frame * N * N):
        # (Step 1) ランダムにスピンを一つ選ぶ
        i, j = np.random.randint(0, N, size=2)
        s_ij = spins[i, j]
        
        # (Step 2) エネルギー変化 ΔE を計算
        neighbors_sum = (spins[(i + 1) % N, j] + spins[(i - 1) % N, j] +
                         spins[i, (j + 1) % N] + spins[i, (j - 1) % N])
        delta_E = 2 * J * s_ij * neighbors_sum
        
        # (Step 3) メトロポリス法の判定基準に従ってスピンを更新
        if delta_E < 0 or np.random.rand() < np.exp(-delta_E / (k_B * T)):
            spins[i, j] *= -1
            energy += delta_E
            magnetization += 2 * spins[i, j]
```

このループが、前節で説明したメトロポリス法のアルゴリズムそのものです。

 * forループで、1フレームあたりmc_steps_per_frame MCS分の更新試行を繰り返します。

 * np.random.randintでランダムなサイト(i,j)を選択します (アルゴリズムのステップ2)。

 * neighbors_sumとdelta_Eの計算は、スピンを反転させた際のエネルギー変化を効率的に求めています (アルゴリズムのステップ3)。

 * if delta_E < 0 or ...: この条件式がメトロポリス法の核心です (アルゴリズムのステップ4)。

 * delta_E < 0: エネルギーが下がる場合は、必ずTrueになります。

 * np.random.rand() < np.exp(-delta_E / (k_B * T)): エネルギーが上がる場合は、ボルツマン因子に応じた確率でTrueになります。

条件が満たされた場合、スピンの値を反転させ(*= -1)、energyとmagnetizationを差分だけ更新します。これにより、毎回全エネルギーを計算し直すよりも大幅に高速化しています。


## 結果

男の $N=100$ で実装します。超時間かかります。ですが、完成した時の達成感は半端じゃないですね！！

<video 
  autoplay 
  loop 
  muted 
  playsinline
  src="/simulation/2D_ising_model_T=2.269.mp4"
  style="width: 100%; max-width: 600px; margin: 1rem auto; display: block; border-radius: 8px;">
</video>

> 次の課題は高速化！