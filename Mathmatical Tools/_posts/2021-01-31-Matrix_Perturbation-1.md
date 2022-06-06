---
title: 矩阵微扰 - 算子的矩阵表示
layout: note

tag: 矩阵分析
math: true
---

* content
{:toc}

微扰是物理中非常重要的工具之一.
物理并不是一门仅仅处理**'真空中的球形鸡'**的学科, 我们的自然不可避免的存在大量的噪声.
我们能够在自然中总结出物理定律的前提便是找到一个对噪声不敏感的角度去表示自然.
只有当我们理论预测的结果在微小的扰动下, 只产生微小的偏差, 我们才有可能保证物理实验的可重复性.

在经典物理中, 我们常用的工具是函数的*泰勒级数*, 即

$$
\begin{equation}
    f(x) = f(x_0) + c_1 \epsilon + c_2 \epsilon^2 + c_3 \epsilon^3 + \cdots \ ,
\end{equation}
$$

其中 $\epsilon = x-x_0$.
当我们考虑 $x_0$ 周围的现象时, 我们可以假设 $\epsilon$ 为一个小量, 因而

$$f(x) \approx f(x_0) + c_1 \epsilon \ .$$

当然, 由于一阶项是线性的, 在多数问题中这个结果是平凡的, 我们研究的物理问题往往出现在极值点 $c_1 = 0$ 的位置.
也就是  $f(x) \approx f(x_0) + c_2 \epsilon^2$.
这类微扰问题可以简单地被推广到高维空间中, 即向量的微扰问题.

而另一个常见的微扰问题便是量子物理中的微扰, 即 $\tilde{H} = H_0 + \lambda V$.
通常我们希望用 $H_0$ 的本征态展开 $\tilde{H}$.
在 $\lambda$ 是一个小值的假设下, 我们也同样可以用泰勒级数的方法处理这个问题.
但是我们可以看到, 本质上这将一个向量的微扰问题推广到了线性算子上.

类似与一般的量子信息理论, 在这里, 我们只考虑有限维的算子问题.
一个有限维的线性算子总是可以被表示为矩阵的形式.
然而算子的矩阵表示并不一定唯一.
在多数情况下, 即使我们用矩阵来表示一个算子, 我们关心的总是那些与表示无关的矩阵的性质.

为了讨论线性算子的性质, 我们首先要关注一类非常关键的算子: **酉算子**.
根据定义, 酉算子 $U$ 需要满足

$$
\begin{equation}
U^\dagger U = U U^\dagger = \id \ .
\end{equation}
$$

我们可以任意找一个标准正交基来展开单位算子 $\id$, 同时我们也可以将 $U$ 用同一套基底展开成矩阵.
此时, 考虑 $U$ 的任意一列 $\ket{U_i}$. 则根据矩阵乘法的定义我们发现

$$
\begin{equation}
\braket{U_i}{U_j} =  \delta_{i,j} \ .
\end{equation}
$$

也就是说, $U$ 的所有的列构成了一个标准正交基.
同样地, $U$ 的所有行向量也构成了对偶空间的一个标准正交基.
对于任意一个酉算子的表示 $U$, $U^\dagger$ 将其对角化的过程可以被看作从当前基底转移到 $U$ 所表示的基底的过程.
而一个线性算子的性质不应当受到基底选择的影响.
因此, 我们可以认为一个 $\spX \to \spY$ 的算子的核心性质是那些不受 $\hilb^A$ 或 $\hilb^B$ 上的酉变换所影响的性质.
这引入了矩阵的核心表示之一: 奇异值分解

``` infor
所有线性算子 $M : \spX \to \spY$, 在任意基底的表示下, 都存在酉算子$U,V$ 使得
$$M = U\Sigma V^\dagger\ .$$
```

## 空间的分解

用狄拉克符号表示, 奇异值分解可以被写成

$$
\begin{equation}
    M = \sum_{i=1}^r \sigma_i \ketbra{y_i}{x_i} \ ,
\end{equation}
$$

其中 $\sigma_i >0$, 而 $\ket{y},\ket{x}$ 分别为 $U$ 与 $V$ 的列向量, 而这个分解的项数等于 $M$ 的秩 $r$.
显然 $\Pi_{\spX_M} := \sum_i \ketbra{x_i}$ 与 $\Pi_{\spY_M} := \sum_i \ketbra{y_i}$ 分别构成了 $\spX$ 与 $\spY$ 上的投影算子.
并且 $\Pi_{\spY_M} M = M = M\Pi_{\spX_M}$.
我们将 $\Pi_{\spX_M}$ 对应的子空间记为 $\spX_M \leq \spX$, 而其正交补空间为 $\spX_M^\perp$.
同样地, $\Pi_{\spY_M}$ 对应的子空间与正交补分别为 $\spY_M$ 与 $\spY_M^\perp$.
因此, 对于一个给定的算子 $M$, 输入与输出空间分别被分成 $\spX = \spX_M \oplus \spX_M^\perp$ 与 $\spY = \spY_M \oplus \spY_M^\perp$.
一个非常重要的性质在于, **$\spX_M$ 与 $\spY_M$ 的维度是相等的**.

在线性代数中, 它们分别被命名为

| :------: | :---: |
| $\spY_M$ | 列空间 |
| $\spY_M^\perp$ | 上核/左零空间 |
| $\spX_M$ | 行空间 |
| $\spX_M^\perp$ | 核/(右)零空间 |

给定 $\spX$ 的一个基底 $\qty{\ket{i}}$ 以及 $\spX_M$ 的任意一个基底 $\qty{\ket{x_i}}$,
我们可以构造 $\hilb\to\spX$ 的**保距算子** $P := \sum_i^r \ketbra{x_i}{i}$, 使得 $PP^\dagger = \Pi_{\spX_M}$.
同样的, 对于 $\spY_M$, 在给定的 $\spY$ 的基底 $\qty{\ket{j}}$ 下, 我们可以构造保距算子 $QQ^\dagger = \Pi_{\spY_M}$.
选择 $U = Q + \Pi_{\spY_M^\perp}$ 与 $V = P + \Pi_{\spX_M^\perp}$.
不难验证, $U,V$ 分别为 $\spY$ 与 $\spX$ 上的酉算子, 并且满足奇异值分解 $M = U\Sigma V^\dagger$.

可以看到,

$$
\begin{equation}
    Q^\dagger M = \Pi_{\spY_M}\Sigma V^\dagger := R \ .
\end{equation}
$$

我们便得到了一个 $\spX_M\to \spY_M$ 的方算子 $R$.
这实质上便给出了矩阵 $M$ 的 QR 分解.
我们只需要使用  Gram-Schmidt 过程来构造 $\spX_M$ 的基底 $\qty{\ket{x_i}}$, $R$ 便是一个上三角矩阵.

## 方算子的分解

在大部分情况下, 我们关心的其实是同一空间中的变换.
也就是我们关心的算子是一个空间 $\hilb$ 的自同态 $A: \hilb \to \hilb$.
在矩阵的表示下, 它们是一个方阵.
当我们考虑同一空间中的变换时, 我们自然会想知道哪些量是不变的.
其中最常见的便是本征态与本征值

$$
\begin{equation}
    A\ket{x} = \lambda \ket{x}  \ .
\end{equation}
$$

当然, 由于线性空间与其对偶空间同构, 我们同样可以考虑*左本征态*与*左本征值*

$$
\begin{equation}
    A^\dagger \ket{y} = \lambda \ket{y}  \ .
\end{equation}
$$

注意, 如果 $\ket{x}$ 是一个本征态, 则对所有非零常数 $c$, $c\ket{x}$ 也是一个本征态.
我们通常选择 $\braket{x} = 1$ 的态作为本征态.
但其实这个选择还是不唯一.
对于复数域上的线性变换而言, $e^{i\theta} \ket{x}$ 都可以被选为本征态.
因此, 本征态的一个自然的表示是 $\ketbra{x}$.
这其实是一个投影到 $\ket{x}$ 张成的空间上的投影算子 $\Pi_x$.
我们有 $A \Pi_x = \lambda \Pi_x$, 这个投影算子对应的空间 $\hilb_x^1$ 在 $A$ 的作用下不变.

显然地, $\hilb_x^1 \leq \spY_A$, 并且 $\hilb_x^1 \leq \spX_A$.
我们可以定义 $\hilb_x^2 := \qty{\ket{x} : A\ket{x} \in \hilb_x^1} - \spX_A^\perp$.
不难看出 $\hilb_x^1 \leq \hilb_x^2 \leq \spX_A$ 构成一个子空间.
同样的我们可以定义 $\hilb_x^3,\hilb_x^4,\cdots$, 直到某个 $\hilb_x^k = \hilb_x^{k+1}$.
我们便得到了一个子空间链:

$$
\begin{equation}
    \hilb_x^1 \leq \cdots \leq \hilb_x^k \leq \spX_A \ ,
\end{equation}
$$

并且对于 $i>1$ 有 $A\hilb_x^i = \hilb_x^{i-1} \leq \hilb_x^i$.
另外, 如果 $\ket{z}\in \hilb_x^i$ 且 $\ket{z} \in \hilb_y^j$.
令 $l = \max\qty{i,j}$, 则

$$
\begin{equation}
    A^l \ket{z} \in \hilb_x^1 \ \text{ 且 }\ A^l\ket{z} \in \hilb_y^1 \ .
\end{equation}
$$

如果 $\ket{x} \perp \ket{y}$, 即 $\hilb_x^1 \cap \hilb_y^1 = \qty{0}$,
则根据 $\hilb_x^i$ 的定义, $\ket{z} = 0$.
也就是说, 两个正交向量生成的子空间链 $\hilb_x^i, \hilb_y^j$ 都是正交的.

令所有 $\hilb_x^k$ 张成的空间为 $\hilb^+$, 其正交补记为 $\hilb^-$.
则根据 $\hilb_x^k$ 的定义, 所有 $\ket{z}\in \hilb^-$ 都要求有 $A \ket{z}\in \hilb^-$.
那么 $\Pi_{\hilb^-} A \Pi_{\hilb^-} \ket{z} = A \ket{z}$.
我们知道所有的方阵必然至少有一个本征态.
因此 $\Pi_{\hilb^-} A \Pi_{\hilb^-}$ 在 $\hilb^-$ 上至少有一个本征态.
将这个本征态的链加入 $\hilb^+$, 再构造下一个 $\hilb^-$.
最多经过 $\text{dim}(\hilb)$ 次, $\hilb^+$ 的维度将等于 $\hilb$ 的维度.
也就是说 $\hilb^+ = \hilb$, 而它是由所有本征态的链直和出的空间.

这个事实意味着, 根据每一个 $A$, 我们总可以把空间 $\hilb$ 分解成相互正交的几个子空间 $(\hilb_i^{k_i}, \lambda_i)$.
每一个子空间都对应了一个本征值为 $\lambda_i$ 的本征向量.
实际上每一条链都对应了一个若尔当块.
如上分解实际上构成了矩阵 $A$ 的若尔当标准型.

``` definition*
不变子空间

每一个 $\hilb_x^i$ 都是 $A$ 的一个(右)**不变子空间**.

$$
  A\hilb_x^i \subseteq \hilb_x^i \ .
$$
```

当然, 我们也可以类似的定义**左不变子空间** $\spY_i A \subseteq \spY_i$.

作为一个线性变换的不变量, $(\lambda_i, \hilb_i^{k_i})$ 便是微扰理论的讨论的核心.
这些不变子空间可以直接由其若尔当标准型给出.
在标准型中, 每一个若尔当块

$$\mqty(\lambda & 1 & 0 \\ 0 & \lambda & 1 \\ 0 & 0 & \lambda) \ ,$$

都代表了一个不变子空间.
其中每个若尔当块的左上角的 $i\times i$ 的子阵都代表了不变子空间链中的第 $i$ 个子空间 $\hilb_x^i$.
虽然若尔当标准型给出了不变子空间的非常简单的表示, 但是若尔当标准型对微扰非常的敏感.
比如矩阵 $\mqty(1&1\\\\ \epsilon&1)$ 的若尔当标准型在 $\epsilon=0$ 时是 
$\mqty(1&1\\\\ 0&1),$ 但是 $\epsilon$ 不为零时是
$\mqty(1+\sqrt{\epsilon}&0\\\\ 0&1-\sqrt{\epsilon})$.
我们需要一个更具鲁棒性的表示.
实际上若尔当标准型的不稳定性来源于其对非对角元归一化的要求.
如果我们将矩阵的变换限制在酉变换上, 则我们将得到更鲁棒的 Schur 分解

$$A = QRQ^\dagger \ ,$$

其中 $R$ 是一个上三角矩阵.
但是 Schur 分解中失去了不变子空间的信息.

为了解决这个问题, 我们先将空间 $\hilb$ 分成 $\hilb= \spX\oplus \spY$ 两部分.
我们可以分别构造 $\hilb\to\spX$ 与 $\hilb\to\spY$ 上的保距算子 $X$ 与 $Y$.
我们有 $XX^\dagger = \Pi_\spX$ 以及 $YY^\dagger = \Pi_\spY$.
由于它们分别作用在正交的子空间上, $YX^\dagger = XY^\dagger = 0$.
在这个定义下, 我们可以看到 $X+Y$ 是 $\hilb$ 上的一个酉算子.

对一个任意的矩阵 $A$, 我们将考虑它的一个*(右) 不变子空间* $\spX$, 即 $A\spX \subseteq \spX$.
根据不变子空间的定义, $Y^\dagger AX = Y^\dagger \Pi_\spX AX = 0$.
显然 $\spY$ 也是 $A$ 的一个 *左不变子空间*.
为了方便起见, 我们用 $(X:Y)$ 表示酉算子 $X+Y$.
如果我们选择 $\spX$ 与 $\spY$ 的基底共同决定的 $\hilb$ 的基底来表示这个算子, $(X:Y)$ 即是这个矩阵的一个分割.
另外, 我们将 $\spX$ 重新标记为 $\spX_1$, 而 $\spY$ 标记为 $\spY_2$, 我们有

$$
\begin{equation}
\begin{aligned}
    \tilde{A} & = (X_1:Y_2)^\dagger A (X_1:Y_2) =
    \begin{pmatrix}
    X_1^\dagger AX_1 & X_1^\dagger AY_2 \\
    Y_2^\dagger AX_1 & Y_2^\dagger AY_2
    \end{pmatrix} \\\\
    & =
    \begin{pmatrix}
    X_1^\dagger AX_1 & X_1^\dagger AY_2 \\
    0 & Y_2^\dagger AY_2
    \end{pmatrix} :=
    \begin{pmatrix}
    L_1 & H \\
    0 & L_2
    \end{pmatrix}
\end{aligned}
\end{equation}
$$

这是一个块上三角矩阵.

另外, $\lambda(\tilde{A})=\lambda(A)$.
我们可以看到, $AX_1 = X_1 L_1$.
这个 $L_1$ 被称为 $A$ 在 $\spX_1$ 上的表示.
我们可以对 $L_2$ **继续进行类似的分解**, 便可以得到一个块上三角矩阵.
其中对角块 $L_i$ 为 $A$ 在对应的不变子空间上的表示.

另外, 我们注意到, $\tilde{A}$ 的本征值

$$\lambda(\tilde{A}) = \lambda(L_1) \cup \lambda(L_2)\ .$$

如果 $L_1$ 与 $L_2$ 的本征值两两不相等, 则不变子空间 $\spX$ 被称为**简单的**.
矩阵 $A$ 的如上分解引出了一个非常重要的定理, Sylvester 等式的唯一解的存在性:

``` theorem*
当且仅当 $\spX$ 是简单不变子空间时, 等式 $L_1 Q- QL_2 = -H$ 存在唯一解.
```

定义 $X_2 = Y_2 + X_1Q$ 与 $Y_1 = X_1 - Y_2 Q^\dagger$, 则

$$A = (X_1:X_2) \mqty(L_1 & 0 \\ 0 & \tilde{L}_2) (Y_1:Y_2)^\dagger,$$

这里 $L_1 = Y_1^\dagger A X_1 = X_1^\dagger A X_1$ 与 $\tilde{L}_2 = Y_2^\dagger A X_2 = L_2 + HQ$.
$A$ 的如上表示被称为其关于 $\spX_1$ 沿 $\spX_2$ 的**谱分解(spectral resolution)**.
另外我们还可以定义**谱投影** $P_1:= X_1Y_1^\dagger$ 与 $P_2:= X_2Y_2^\dagger$.
注意, 如果 $X_1\neq Y_1$, $X_2 \neq Y_2$, 这个谱投影不是厄米的, 这被称为*斜投影*.
同时 $(X_1: X_2)$ 与 $(Y_1: Y_2)$ 不再是酉算子, 但是它们满足
$(X_1:X_2)^\dagger (Y_1: Y_2)=(Y_1:Y_2)^\dagger (X_1: X_2) = \id$.
对于厄密的 $A$, 我们有 $X_1=Y_1; X_2=Y_2$.

有意思的是, $X_1 A = X_1 Y_1 L_1 X_1 = L_1$, $X_2 A = L_2 X_2$, $AY_1 = Y_1 L_1$ 以及 $AY_2 = Y_2 L_2$.
也就是说, $X_1, X_2$ 分别给出了算子的两个**互补**(右)不变子空间; 而 $Y_1,Y_2$ 给出了**互补**左不变子空间.
同时 $A = P_1 A P_1 + P_2 A P_2$.

同样地, 我们可以逐对进行块对角化.
当 $L_i$ 每一块都有不同本征值时, 我们便得到了一个完整的块对角表示.
这便给出了矩阵 $A$ 在若尔当标准型与 Schur 分解之间的一个表示.
它既揭示了矩阵的所有本征值对应的不变子空间, 同时又处理了若尔当标准型中的病态行为.

## 算子相对关系

在现实问题中, 我们讨论的算子并不总是孤立的.
当我们考虑两个不同算子的关系时, 必然会面临两个矩阵分解的空间不同的问题.
因此我们需要在其中一个算子的空间中表示另一个算子的空间.
这通常是通过矩阵的 CS 分解, 即给定一个酉算子 $W$ 与一个子空间 $\spX$ (维度小于整个空间的一半):

$$U^\dagger W V = \mqty(
    \Gamma & -\Sigma & 0 \\
    \Sigma & \Gamma  & 0 \\
    0      & 0       & \id) \ .
$$
其中 $U,V$ 都有着块对角结构 $U = U_\spX \oplus U_{\spX^\perp}$.
$\Gamma, \Sigma$ 都是正实数的对角矩阵, 而且 $\Gamma^2+\Sigma^2 = \id_\spX$.
当然, 实际上当给定了子空间 $\spX$, 它的正交补 $\spX^\perp$ 也同时被给定了.
因此我们其实不需要指定 $\spX$ 的维度小于整个空间 $\hilb$ 的一半,
因为 $\spX$ 与 $\spX^\perp$ 是等价的, 而它们之间总有一个小于整个空间的一半.

给定两个酉算子 $X, Y$, 我们可以选择 $W = U X^\dagger Y V^\dagger$, 因而

$$
\begin{equation}
    X^\dagger Y = \mqty(
    \Gamma & -\Sigma & 0 \\
    \Sigma & \Gamma  & 0 \\
    0      & 0       & \id) \ .
\end{equation}
$$

正如前面所说, 每一个酉矩阵都代表了空间中的一个基底.
如果我们选择 $X$ 所表示的基底, 则 $X = \id$.
设 $\spX$ 是 $X$ 的前 $l$ 列所张成的子空间, 则

$$
\begin{equation}
    Y = \mqty(
    \Gamma & -\Sigma & 0 \\
    \Sigma & \Gamma  & 0 \\
    0      & 0       & \id) \ .
\end{equation}
$$

这里, 矩阵 $\mqty(\Gamma \\\\ \Sigma \\\\ 0)$ 表示了 $Y$ 前 $l$ 列张成的子空间 $\spY$ 相对 $\spX$ 的表示.
换言之, 这个矩阵代表了 $Y$ 相对 $\spX$ 的列空间与 $\spX$ 之间的关系.
由于 $\Gamma^2 + \Sigma^2 = \id$, 我们可以把它们写做 $\Gamma = \cos(\Theta);\ \Sigma = \sin(\Theta)$.
这个对角矩阵 $\Theta$ 被称为两个子空间之间的**正则角** (canonical angle).
这个角度实际刻画了两个空间之间的距离.
关于正则角, 一个重要的性质是, 

$$
\begin{equation}
    \Pi_\spX-\Pi_\spY
    = \mqty(
        \Sigma^2      & -\Gamma\Sigma & 0 \\
        -\Gamma\Sigma & -\Sigma^2     & 0 \\
        0             & 0             & 0 \\
        )
    = \mqty(
        \Sigma  & 0       & 0 \\
        0       & -\Sigma & 0 \\
        0       & 0       & 0 \\
        )
      \mqty(
        \Sigma  & \Gamma & 0 \\
        -\Gamma & \Sigma & 0 \\
        0       & 0      & 0 \\
        )
\end{equation}
$$

右边的矩阵显然是一个 $\mqty(\sin & \cos \\\\ -\cos & \sin)$ 形式的保距算子.
因此它的奇异值由左边的矩阵给出, 即两个 $\sin(\Theta)$.
这给出了两个子空间的投影算子与其正则角之间的关系.

另一个有用的关系是
$$
\begin{equation}
    \Pi_\spX(\id-\Pi_\spY)
    = \mqty(
        \Sigma^2 & -\Gamma\Sigma & 0 \\
        0        & 0             & 0 \\
        0        & 0             & 0 \\
        )
    = \mqty(
        \Sigma  & 0 & 0 \\
        0       & 0 & 0 \\
        0       & 0 & 0 \\
        )
      \mqty(
        \Sigma  & -\Gamma & 0 \\
        \Gamma & \Sigma & 0 \\
        0       & 0      & 0 \\
        )
\end{equation}
$$

它的奇异值等价于 $\sin(\Theta)$.
