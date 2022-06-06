---
title: 黑盒理论与贝尔不等式 (II)
layout: note

tag: 量子信息
math: true
---

* content
{:toc}

在前一章[黑盒理论与贝尔不等式 (I)]({{ 'quantum%20information/Blackbox_and_Bell_Inequality_1' | absolute_url}}) 中, 我介绍了黑盒模型以及该语境下的(演化的)局域性模型, 也就是"无信号" (non-signaling), 以及由两种不同内积导出的模型: "量子" (quantum) 与 "局域/经典" (local/classical) 模型.

在前一章最后我提到了 $\text{local}\subsetneq\text{quantum}\subsetneq\text{non-signaling}$ 的包含关系.
在讨论这个关系之前, 让我们先详细介绍一下黑盒模型, 并严格定义这三种模型的数学表达.
本章将以数学推导为主.

# 黑盒模型

正如上一章所说, 在设备无关测量中我们只讨论一切测量的性质, 而不关心某个具体测量设备的性质.
我们可以把实验设备抽象成一个盒子, 上面有很多个按钮以及很多个指示灯 (在信息学中我们经常用 flag 表示输出, 但是似乎这不符合中国人的直觉).
当我们按下一个按钮, 有且仅有一个灯会亮起.
至于哪一个灯会亮是一个概率事件.
按钮代表着我们可以选择的测量方式, 我们把测量集合叫做 $\Gamma$,
每一种测量用符号 $A\in\Gamma$ 表示.
指示灯代表着所有可能的结果, 我们用字母表 $X$ 编码所有的结果, 每一个结果分配一个字符 $a\in X$.
条件概率 $\prob{a\vert A}$ 唯一地定义了一个设备无关测量.

![Measurement Device]({{ 'Q_Device.png' | prepend: site.figure_url}} "Measurement Device")
<!-- ![Measurement Device](/Blog//asserts/figures/Q_Device.png "Measurement Device") -->

当我们讨论局域性时, 我们需要的是两个类空测量事件, 也即是两个独立的测量事件, 分别用字母表 $\Gamma_A$ 与 $\Gamma_B$ 表示, 而它们的结果分别用字母表 $X$ 与 $Y$ 表示.
对于这样的二分问题, 我们讨论的是联合条件概率 $P(a,b\vert A,B)$. 这里 $a\in X$, $b\in Y$.

---

# 包含关系

## 无信号

最一般地, 如果两个事件是没有因果关系的 (因为类空), 则必然有

$$\sum_a \prob{a,b\vert A,B} = \sum_a \prob{a,b\vert A^\prime,B}$$

也即是 $\prob{b\vert A,B} = \prob{b\vert A^\prime, B}$, $\forall A,A^\prime\in \Gamma_A$, 或者说测量 B 的结果与测量 A 的选择无关.
如果存在两个类空事件违反了无信号模型, 那么狭义相对论就出现了问题, 两个事件之间发生了因果关系.
目前人类并没有观察到这类现象.
当然了, 即使这个现象发生了, 也可能是由于两个事件之间不是类空间隔.

## 量子

正如我之前反复提到的, 量子态由希尔伯特空间上的密度算子(迹为 $1$ 的半正定算子) $\rho\in S(\hilb)$ 所描述.

测量由半正定算子 $M=\qty{E_a}$ 表示, 其中 $\sum_a E_a=\id$.
给定态 $\rho(\lambda)$, 测量结果为 $a$ 的概率为 $\tr[E_a\rho(\lambda)]$.
对于二分系统, 希尔伯特空间应该是一个张量积, 也即是空间由两组独立的自由度组成 $\hilb^A\otimes\hilb^B$.
测量分别作用在两个不同的子空间上.
这个情况下它们的联合概率由 $\tr\qty[(A_a\otimes B_b)\rho]$ 给出, 也就是说

\begin{equation}
    \prob{a,b\vert A,B} = \tr\qty[\qty(A_a\otimes B_b)\rho]
\end{equation}

我们可以看到

\begin{equation}
    \sum_a \prob{a,b\vert A,B} =
    \tr\qty[\sum_a \qty(A_a\otimes B_b) \rho] =
    \tr\qty[\id_A\otimes B_b \rho]
\end{equation}

根据测量的定义, $\sum_a A_a = \id_A$ 对所有的测量都成立,
也就是说量子模型必然满足无信号理论:

> $\text{quantum}\subseteq\text{non-signalling}$

## 局域 (经典)

我们前面提到, 经典理论是实在的, 经典态由希尔伯特空间 $\hilb_A\otimes \hilb_B$ 上的单位(实)向量 $\vec{v} \text{ or } \ket{v}$ 所表示.
根据 Schimidt 分解, $\vec{v} = \sum_\lambda \prob{\lambda}
\ket{u_\lambda}\ket{w_\lambda}$, 其中 $\ket{u_\lambda}, \ket{w_\lambda}$ 分别构成 $A, B$ 上的标准正交基.
另外, 由于 $\ket{v}$ 代表的一个概率分布, $\sum_\lambda \prob{\lambda}= 1$.
因此

$$
\begin{equation}
\begin{aligned}
    \prob{a,b\vert A,B} &= \braket{A_a \otimes B_b}{v} \\
    &= \sum_\lambda \prob{\lambda}\braket{A_a}{u_\lambda} \braket{B_b}{w_\lambda} \\
    &= \sum_\lambda \prob{\lambda}\prob{a\vert A,\lambda}\prob{b\vert B, \lambda} \ .
\end{aligned}
\end{equation}
$$

当然, 对于更一般的情况 ($\hilb_A,\hilb_B$ 不是有限维),
$\prob{a,b\vert A,B} = \int \dd{\lambda} \prob{a\vert A,\lambda}\prob{b\vert B,\lambda}$.
由于参数 $\lambda$ 的存在, 这也被叫做**隐变量**模型.

对于量子模型, 当量子态与 $A,B$ 共对角化 (即它们对易) 的时候, 量子态退化为经典态.

> $\text{local/classical}\subseteq \text{quantum}$

# 拓展的必要性

接下来我们要证明由经典理论拓展到量子理论的必要性, 也就是要证明这三个模型两两不等价.
这就工作就来自于著名的贝尔不等式.
当然, 我们现在通常讨论的是 Clauser, Horne, Shimony, Holt 四人对贝尔不等式进行的推广, CHSH 不等式.
贝尔不等式可以作为 CHSH 不等式的一个特例, 有时我们也把 CHSH 不等式就叫做贝尔不等式.

在这里, Alice 与 Bob 分别可以选择两种测量: $A, A^\prime, B, B^\prime$.
其中每一种测量都有两种结果, 我们在这些结果上定义一个随机变量 $a,b = \pm 1$.

定义 $E_{A,B}=\sum_{a,b=\pm 1}ab\ \prob{a,b\vert A,B}$,

$S = E_{AB} +E_{A^\prime B} +E_{A B^\prime} - E_{A^\prime B^\prime}$ 即为 CHSH 表达式.

## 对于经典模型

$$\prob{a,b\vert A,B}=\sum_\lambda \prob{\lambda}\prob{a\vert A,\lambda}\prob{b\vert B, \lambda}$$

先忽视 $\prob{\lambda}$, 我们有

$$
\begin{equation}
\begin{aligned}
    E_{A,B} + E_{A,B^\prime}
    =& \sum_{a,b}ab\ \prob{a\vert A} \qty(\prob{a\vert B} + \prob{b\vert B^\prime}) \\
    E_{A^\prime,B} - E_{A^\prime,B^\prime}
    =& \sum_{a,b}ab\ \prob{a\vert A^\prime} \qty(\prob{b\vert B}- \prob{b\vert B^\prime}) \ . \\
\end{aligned}
\end{equation}
$$

$$
\begin{equation}
\begin{aligned}
    & \abs{E_{A,B} + E_{A,B^\prime} + E_{A^\prime,B} - E_{A^\prime,B^\prime}} \\
    =& \abs{\ave{a\vert A}\qty(\ave{b\vert B} + \ave{b\vert B^\prime})
    + \ave{a\vert A^\prime} \qty(\ave{b\vert B} - \ave{b\vert B^\prime})} \\
    \leq& \abs{\ave{a\vert A}\qty(\ave{b\vert B} + \ave{b\vert B^\prime})}
    + \abs{\ave{a\vert A^\prime} \qty(\ave{b\vert B} - \ave{b\vert B^\prime})} \\
    \leq& \abs{\ave{b\vert B} + \ave{b\vert B^\prime}} + \abs{\ave{b\vert B} - \ave{b\vert B^\prime}} \\
    =& 2\abs{\ave{b\vert B}} \text{ or } 2\abs{\ave{b\vert B^\prime}} \\
    \leq& 2
\end{aligned}
\end{equation}
$$

由于上式对每一个 $\lambda$ 都成立, 且 $\sum_\lambda \prob{\lambda}=1$, 他们的凸组合

$$\abs{S}\leq 2\ .$$

这个界是紧的.

## 对于量子模型

密度矩阵有谱分解

$$
\begin{equation}
    \prob{a,b\vert A,B} = \tr[A_a\otimes B_b\rho]
    = \sum_\lambda \lambda \bra{v_\lambda}A_a\otimes B_b\ket{v_\lambda}
\end{equation}
$$

其中 $\sum_\lambda \lambda = 1$, 且 $\ket{v_\lambda}$ 都是是单位向量. 
同样先不考虑 $\lambda$.

$$
\begin{equation}
\begin{aligned}
    \sum_{a,b}ab\bra{v}A_a\otimes B_b \ket{v}
    =& \bra{v}\sum_{a,b=\pm 1}  aA_a \otimes b B_b\ket{v} \\
    =& \bra{v}(A_{+1}-A_{-1}) \otimes (B_{+1}-B_{-1})\ket{v}
\end{aligned}
\end{equation}
$$

定义 $\alpha=(A_{+1}-A_{-1})\otimes \id_B, \beta = \id_A\otimes (B_{+1}-B_{-1})$, 则上式可以看作
$\ket{\alpha v}, \bra{\beta v}$ 的内积. (注意, 我们这里所有的算子都是厄米的). 
因此我们可以将 $S$ 写成

$$
\begin{equation}
\begin{aligned}
    \tilde S =&
    \braket{\alpha v}{\beta v}+\braket{\alpha^\prime v}{\beta v}
        +\braket{\alpha v}{\beta^\prime v}
        -\braket{\alpha^\prime v}{\beta^\prime v} \\
    =&\bra{\alpha v}(\ket{\beta v} +\ket{\beta^\prime v})
        +\bra{\alpha^\prime v}(\ket{\beta v}- \ket{\beta^\prime v}) \ .
\end{aligned}
\end{equation}
$$

当 $\ket{\alpha v} /\\! /(\ket{\beta v}+\ket{\beta^\prime v})$ 时第一项达到最大(或最小).
以 $\alpha$ 为例, 考虑该向量的长度 $\sqrt{\braket{\alpha v}} = \sqrt{\ev{\alpha^2}}$
注意, 根据定义, $A_{+1}+A_{-1} = \id_A$, 且它们都是半正定算子.
我们可以把空间 $\hilb_A$ 拆成 3 个子空间: $\Pi_+,\Pi_-,\Pi_\alpha$,
其中 $\Pi_+A_{-1}=0; \Pi_{-}A_{+1}=0$;
$\Pi_\alpha$ 为两个算子重叠的空间.
记 $A_{+1} = \Pi_+ +M; A_- = \Pi_-+(\Pi_\alpha-M)$.

$$ \begin{aligned}
    \alpha^2 =&
        A_{+1}A_{+1} +A_{-1}A_{-1} -A_{-1}A_{+1} -A_{+1}A_{-1} \\
    =& \Pi_++M^2+\Pi_-+(\Pi_\alpha-M)^2 -2M+2M^2 \\
    =& \Pi_++\Pi_-+\Pi_\alpha -4 M+4M^2=(\id_A - 2M)^2
\end{aligned} $$

对于半正定算子

$$
\begin{equation}
    0\leq A_{-1}\leq\id_A
    \Rightarrow -\Pi_+ \leq M \leq\id_A - \Pi_+ \leq \id_A
\end{equation}
$$

由于 $M\geq 0$,

$$-\id_A \leq \id_A -2 M \leq \id_A - 2\Pi_+$$

但是因为 $\Pi_+ M=0$,

$$
\begin{equation}
-\id_A \leq \id_A -2 M \leq \id_A \Rightarrow 0\leq (\id_A-2M)^2 \leq \id_A \ .
\end{equation}
$$

也就是说 $\norm{\ket{\alpha v}}\leq 1$.
这个结论对所有 $\alpha,\beta$ 都成立.
所以, 根据 Cauchy-Schwarz 不等式,

$$
\begin{equation}
\abs{\tilde S} \leq \norm{\ket{\beta v} + \ket{\beta^\prime v}}
+\norm{\ket{\beta v}- \ket{\beta^\prime v}} \leq 2\sqrt{2} \ .
\end{equation}
$$

第二个不等式源于 $\norm{x+y}^2 = \norm{x}^2 + \norm{y}^2 + 2\text{Re}\braket{x}{y}$.
这些结果的凸组合

$$
\begin{equation}
\abs{S} \leq 2\sqrt{2} \ .
\end{equation}
$$

## 对无信号模型

如下 Popescu-Rohrlich box 可以达到 $4$:

|      |      $AB$     |  $AB^\prime$  |  $A^\prime B$ | $A^\prime B^\prime$ |
| :--: |:-------------:|:-------------:|:-------------:|:-------------------:|
| $++$ | $\frac{1}{2}$ | $\frac{1}{2}$ | $\frac{1}{2}$ |         $0$         |
| $+-$ |      $0$      |      $0$      |      $0$      |    $\frac{1}{2}$    |
| $-+$ |      $0$      |      $0$      |      $0$      |    $\frac{1}{2}$    |
|$- -$ | $\frac{1}{2}$ | $\frac{1}{2}$ | $\frac{1}{2}$ |         $0$         |

可以验证如上 PR box 满足无信号模型.

$$\abs{S} \leq 4$$

# 总结

* 对于局域理论 $\abs{S} \leq 2$
* 对于量子理论 $\abs{S} \leq 2\sqrt 2$
* 对于无信号理论 $\abs{S} \leq 4$

我们可以画出相关几何

![CHSH Geometry]({{'Geo_of_CHSH.png' | prepend: site.figure_url}} "Geometry of CHSH")

关于这个图, 有几点要注意

1. 我们这里的论证是单向的: 如果一个理论描述的所有态都落在蓝色正方形内不代表它一定是局域理论;
    但是如果它描述的态在蓝色正方形外, 它一定不是局域理论.
2. 这个几何仅代表 CHSH 不等式, 这个形状不代表所有的非局域关系.
    我们换一个不等式就可能得到完全不同的几何.
3. 这个几何形状源于三种模型允许的态的集合不同.
    可以证明, 经典与无信号模型的态集合一定是一个**多胞体** (即高维的多面体).
    而量子模型中, **每一个边界点都是极点**.
    也就是说, 量子模型的边界上没有直线.
3. 这些不等式是数学上的严格要求, 就算只违背 CHSH 不等式万分之一也是违背,
    事件相关度只要大于 $2$, 就算是 $2+10^{-100}$ 也一定是非经典/局域关系.

我们的黑盒模型表明了"扩充经典理论是否有必要"这件事是可实验证明的.
近些年不断在重复的贝尔实验就是在寻找我们的世界处于这个几何的什么位置.
我们所有的实验结果都表明, 存在蓝色正方形以外的系统, 但是所有结果都在绿色圆形之内.
也就是说, 我们目前的量子理论是充分的.
某种程度上来说它也是必要的, 至少传统的经典理论是远远不够的.

``` info*
但是量子理论的存在引出了一个非常诡异的问题: **我们的世界可以是纠缠的!**
但是注意, 纠缠与非局域并不是等价的.
对于纯态而言, 纠缠就是非局域; 但是对于混态而言, 有些纠缠态是局域的(即不违背 CHSH 不等式).
长程纠缠是现代物理很多前沿问题的核心, 纠缠可以带来很多从直觉上来说很神奇的现象.
```