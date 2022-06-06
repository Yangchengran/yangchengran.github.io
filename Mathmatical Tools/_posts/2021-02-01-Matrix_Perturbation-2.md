---
title: 矩阵微扰 - 扰动的量化
layout: note

tag: 矩阵分析
math: true
---

* content
{:toc}


## 范数

当我们讨论**微**扰的时候, 一个非常重要的问题在于, 这个扰动到底有多小.
对于矩阵的微扰, 我们需要给出扰动幅度的量化方法.
这便是矩阵的*范数*.
由于我们这里讨论的都是有限维空间, 对于任意的范数 $\nu$, 我们有

$$
\begin{equation}
\begin{aligned}
    \abs{\nu(\vb{y}) - \nu(\vb{x})} & \leq \nu(\vb{y}-\vb{x})
    = \sum_{i=1}^n (y_i-x_i) \nu(\vb{e}_i) \\
    & \leq \sqrt{\sum_i \nu^2(\vb{e}_i)} \norm{y-x}_2 \ .
\end{aligned}
\end{equation}
$$

这里 $\vb{e}_i$ 是基向量.
如上所示, 所有的范数都是连续的.
另外, 设 $\vb{y}=0$, 我们可以看到 $\abs{\nu(\vb{x})} \leq \pi_2\norm{\vb{x}}_2$.
根据范数的定义, 所有的非零向量都可以写成 $\vb{x} = \norm{\vb{x}}\vb{z}$ 的形式.
其中 $\vb{z}$ 是单位球 $S := \qty{\vb{z} : \norm{\vb{z}}_2 = 1}$ 上的元素.
令 $\pi_1 = \min\qty{\nu(\vb{z}) : \vb{z}\in S}$, 则对于所有的非零向量我们有

``` info
$$
\pi_1 \norm{\vb{x}}_2 \leq \nu(\vb{x}) \leq \pi_2 \norm{\vb{x}}_2 \ .
$$
```

显然, 零向量同样满足上式, 因而我们知道, 所有的范数 $\nu$ 都与 2-范数**等价**.
换言之, 在有限维空间中, 所有范数等价.

### 一致范数

虽然所有范数等价, 但是在研究一个具体问题的时候, 不同的范数即使可以给出相同的定性结果, 它们的定量结果显然会有所差异.
我们总是希望在一个具体的问题中, 即使在不同空间上, 我们选择的范数具有一定的**一致性**.

对于不同算子空间 $\mathcal{L}(\spX,\mathcal{Z}), \mathcal{L}(\mathcal{Z},\spY)$ 以及 $\mathcal{L}(\spX,\spY)$ 上的范数
$\mu,\nu,\rho$, 我们定义它们的一致性为满足

``` info
$$\rho(AB) \leq \mu(A)\nu(B) \ .$$
```

这个一致性的定义最关键的一点在于, 如果一个 $\mathcal{L}(\spX,\spX)$ 上的范数是一致的, 则算子 $A$ 的谱半径

$$\rho(A) \leq \norm{A} \ .$$

当然, 这里的一致性还是过于宽泛.
在实际操作中, 我们需要构造性的得到一族一致范数.
为了实现这一点, 首先, 在给定一个空间的范数后, 我们会考虑最自然的一个相关空间: 对偶空间.
这里我们选择**对偶范数**

$$
\begin{equation}
\nu^\ast (\bra{y}) = \max_{\nu(\ket{x})=1} \abs{\braket{y}{x}} \ .
\end{equation}
$$
为了方便, 我们这里换用了狄拉克符号来表示相互对偶的两个空间.
注意, 对于有限维空间, 对偶范数的对偶范数还是原范数.

类似地, 我们可以定义算子**诱导范数**

$$\norm{A}_{\mu, \nu} := \max_{\nu(\ket{x})=1} \mu(A\ket{x})\ .$$

可以证明, 在每一个空间的范数都确定的情况下, 诱导范数是一致的:

$$\norm{AB}_{\mu,\rho} \leq \norm{A}_{\mu,\nu} \norm{A}_{\nu,\rho} \ .$$

### 酉不变范数

上述一致范数的定义可以说是相对随意的, 当我们在考虑算子的性质时, 它们的酉不变性质也很重要.
因此, 通常我们最自然的选择一般是矩阵的谱范数 $\norm{A}_2$.
不过, 虽然谱范数有着特殊的性质, 但是谱范数并不是唯一的选择.

特别地, 我们可以考虑所有满足

1. $\norm{U^\dagger AV} = \norm{A}$.
2. $\norm{\ketbra{y}{x}} = \norm{\ketbra{y}{x}}_2$.

的酉不变范数, 其中第二条性质被叫做归一化条件.
有意思的是, 由于酉不变的性质, 实际上所有的酉不变范数都只与矩阵的奇异值相关.
这可以从矩阵的奇异值分解简单地看出.
实际上这两个条件本身就已经保证了范数的一致性.

### 两个矩阵的距离

在量子微扰理论中, 有一个很重要的临界点: 能级简并.
更一般的说, 矩阵的两组不变子空间之间, 本征谱是否出现简并对微扰问题而言非常重要.
简并的出现意味着两个本身独立的不变子空间之间出现相互作用.
给定矩阵 $A$ 在一个不变子空间 $\spX_1$ 上的表示 $L_1$, 与其对应的 $L_2$.
$\min\abs{\lambda(L_1) - \lambda(L_2)}$ 便是这个不变子空间离简并有多远的度量.
然而这个度量有一个复杂的问题, 即它对微扰是非常敏感的.
我们无法用微扰矩阵的大小来刻画这个度量可能受到的影响.

然而, 对于一族**一致的范数**, 我们定义距离函数

$$
\begin{equation}
    \text{sep}(L_1,L_2) := \inf_{\norm{P}=1} \norm{P L_1 - L_2 P} \ ,
\end{equation}
$$
其中 P 是一个 $\spX_1 \to \spX_2$ 的算子.
这个距离函数有着非常鲁棒的性质

$$
\begin{equation}
    \abs{\text{sep}(L_1+E,L_2+F) - \text{sep}(L_1,L_2)}
    \leq \norm{E} + \norm{F} \ .
\end{equation}
$$

并且它给出了下界

$$
\begin{equation}
    \text{sep}(L_1,L_2) \leq \min\abs{\lambda(L_1) - \lambda(L_2)} \ .
\end{equation}
$$

## 扰动的大小

一族一致范数已经足够我们讨论一个矩阵, 甚至其子空间投影的大小.
但是对于微扰理论而言, 我们还需要一个量来刻画两个子空间的距离.
在上一章[矩阵微扰 - 算子的矩阵表示]({{ 'mathmatical%20tools/Matrix_Perturbation-1' | absolute_url }}), 我们给出了两个子空间的正则角的定义.
一个很自然的想法是, 两个子空间的夹角越小, 它们就应该越接近.
但是, 正则角是一个向量, 我们还是需要一个*数*来表示这个夹角.

### 一对子空间距离

给定一个范数 $\nu$, 我们可以构造一个度量函数 $d_\nu(x,y):= \nu(x-y)$.
基于这个度量, 我们还可以构造一个向量与空间之间的度量函数:

$$
    d_\nu(\spX,y) := \min_{x\in \spX} d_\nu(x,y) \ .
$$

在这个基础上, 我们可以定义两个子空间之间的**隙**:

$$
\begin{equation}
    d_{g,\nu}(\spX,\spY) := \max\qty{
        \max_{\nu(x)=1, x\in\spX} d_\nu(x,\spY),
        \max_{\nu(y)=1, y\in\spY}d_\nu(\spX,y)}  \ .
\end{equation}
$$

对于两个等价的范数 $\alpha \mu(x) \leq \nu(x) \leq \beta \mu(x)$, 它们导出的隙也是等价的:

$$
\begin{equation}
    \frac{\alpha}{\beta} d_{g,\mu}(\spX,\spY) \leq d_{g,\nu}(\spX,\spY)
    \leq \frac{\beta}{\alpha} d_{g,\mu}(\spX,\spY) \ .
\end{equation}
$$

虽然两个子空间的隙给出了一个符合直觉的空间距离的度量, 但是我们最终希望能得到一个与正则角相关的度量.
在上一章[矩阵微扰 - 算子的矩阵表示]({{ 'mathmatical%20tools/Matrix_Perturbation-1' | absolute_url }})中我们看到, $\Pi_\spX-\Pi_\spY ~ \Sigma\oplus -\Sigma$.
我们可以定义一个度量

$$
\begin{equation}
    d_{p,\nu}(\spX,\spY) := \nu(\Pi_\spX - \Pi_\spY) \ .
\end{equation}
$$

当 $\nu$ 是酉不变范数时, 显然这个度量仅与 $\Theta(\spX,\spY)$ 有关.
如果我们选择 $\nu$ 为欧几里得范数,

$$
\begin{equation}
    d_{p,2}(\spX,\spY) = d_{g,2}(\spX,\spY) \ .
\end{equation}
$$

实际上这几乎是唯一一种可以由隙导出的正则角相关度量.
因为空间中所有的酉不变范数都等价于欧几里得范数.
