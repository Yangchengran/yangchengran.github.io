---
title: 量子过程的表示
layout: note

tag: 量子信息
math: true
---

* content
{:toc}

如[量子信息初探 - 态, 测量与信道]({{ 'quantum%20information/Intro_to_QI/' | absolute_url }})中所说, 量子信息是一门关于密度算子与量子信道的学科.
但是实际上算子是一个非常抽象的概念.
就像一个实验室中运动的粒子, 我们需要先找到一个坐标系, 然后才能用坐标去描述它运动的轨迹;
对于一个量子系统所处的态, 我们也需要一个坐标系来表示它的密度算子.
当然, 鉴于我们讨论的是有限维密度算子, 这个表示实际上便是线性代数课程中开篇就讨论的线性算子与矩阵的对应关系.

## 算子与矩阵

在具体的研究中, 我们很可能有时聚焦于算子本身抽象的概念, 也有可能聚焦于算子数值上的表示.
很多情况下它们可能被混为一谈, 但是区分二者有助于我们看到某个具体的问题到底是一个数学问题还是一个计算问题.

在这里, 我们主要集中于有限维希尔伯特空间 $\mathcal{H}$ 之间的物理过程.
我们可以用空间 $\spX, \spY$ 来表示某个具体的物理系统.
用来描述它的希尔伯特空间会被标记为 $\mathcal{H}^\spX$ 与 $\mathcal{H}^\spY$.
由于量子信息中讨论的基本元素是密度算子, 而非向量, 一般我们将 $\spX$ 上的密度算子标记为 $\rho^\spX$, 而不用重复标记算子的值域与定义域.
只有当我们讨论量子信道时, 我们才需要标记信道的源与目标 $\Phi^{\spX\to\spY}$.
但是上述标记只是一种抽象的表示法.
如果我们需要对具体的量子过程进行描述与计算, 我们需要用数字把它们写下来.

为了与量子计算中的表述一致, 我这里使用 John Watrous 的记号重述一遍有限维线性算子的矩阵表示.
首先, 在这里我们假设一个 $d$ 维的希尔伯特空间 $\mathcal{H}$ 中有一个自然的标准正交基, 我们叫它**计算基底** (computational basis).
对于这样的系统, 我们可以赋予它一个包含 $d$ 个字符的字母表 $\Gamma$, 并且给这个基底中的每一个单位向量 $\ket{e_a}$ 赋予一个唯一的字符 $a\in \Gamma$.
我们可以把这样的表示方法记为 $\mathcal{H}^\Gamma$.
在这个设定下, 对于任意的向量 $\ket{v} \in \mathcal{H}$, 我们都可以用内积 $v^a := \braket{v}{e_a}$ 来表示.
给定所有的 $v^a$, 我们即可以重构出原来的向量 $\ket{v} = \sum_a v^a \ket{e_a}$.
如果我们赋予字母表 $\Gamma$ 中的字符一个全序关系: $\Gamma = \qty{a_0, a_1, \cdots, a_{d-1}}$,
那么我们可以用数组

$$(v^0, v^1, \cdots, v^{d-1})$$

来记录这个向量.

```note
在传统的线性代数中, 我们一般用列向量来表示原空间中的向量.
但是在这里, 我们可以把这个数组理解为计算机中储存的一个数组, 我并没有赋予它行或者列的性质.
行向量与列向量的区别其实在于每个数字用的是上角标还是下角标.
```

如果我们考虑两个希尔伯特空间, $\mathcal{H}_1$ 与 $\mathcal{H}_2$, 以及它们分别被赋予的字母表 $\Gamma$ 与 $\Sigma$,
对于任意的线性算子 $A: \mathcal{H}_1\to \mathcal{H}_2$, 我们可以用 $A^b\_{\phantom{b}a} := \bra{e_b}A\ket{e_a}, a\in \Gamma, b\in \Sigma$ 来唯一地表示.
这一点从标准正交基与算子的线性性质可以很容易得到.
在这个记号下, 矩阵计算公式可以简单的被写做

$$(AB)^b_{\phantom{b}c} = \sum_{a\in\Gamma} A^b_{\phantom{b}a} B^a_{\phantom{a}c} \ .$$

如果我们用约定 $A^\Sigma\_{\phantom{\Sigma}\Gamma} B^\Gamma\_{\phantom{\Gamma}\Delta} := \sum_{a\in \Gamma} A^\Sigma_{\phantom{\Sigma}a} B^a_{\phantom{a}\Delta}$, 这其实就是爱因斯坦求和约定.
为了方便起见, 我们同时约定符号在上下角标挪动时元素需要取复共轭: $v^\Gamma = v_\Gamma^\ast$.

需要说明的是, 量子信息的基本元素是密度算子, 它的两个字母表是一致的.
为了以示区分, 我们可以将其表示为 $\rho^\Gamma\_{\phantom{\Gamma}\Gamma^\prime}$.
因为在我们的记号中, 如果出现两个一样的字母表, 我们需要把角标取和缩并.
记号 $\rho^\Gamma\_{\phantom{\Gamma}\Gamma}$ 实际表示的是 $\rho$ 的迹 $\tr[\rho]$.
另外需要注意的是, 不同于经典张量, 这里的角标一般而言是不对易的.

到目前为止, 我们的讨论还未超出基础线性代数的范围.
在量子过程的表示中, 更复杂的情况在于如何表示量子信道.
当然, 我知道线性算子本身构成一个线性空间, 所以一个自然的想法是直接找到算子空间的一组标准正交基,
然后按照算子的表示方法去构造超算子的表示.
对于一个信道 $\Phi$, $\Phi(\rho^\Gamma\_{\phantom{\Gamma}\Gamma^\prime}) = \sigma^\Sigma\_{\phantom{\Sigma}\Sigma^\prime}$.
既然信道也是线性的, 我们可以表示为 $\Phi^{\phantom{\Gamma}\Gamma^\prime \Sigma}\_{\Gamma\phantom{\Gamma^\prime\Sigma}\Sigma^\prime}$.
这被称为信道 $\Phi$ 的**自然表示**.

显然, 既然量子信道也是一个线性过程, 我们可以不断重复这个过程, 从而构造超信道, 超超信道, 超超超信道的表示.
但是如果我们继续使用爱因斯坦求和符号, 随着我们研究的系统越来越复杂, 我们需要的符号越来越多.
为了省去符号, 我们可以使用张量网络来表示所有的张量计算.

## 张量网络

```note*
张量网络的方向

要注意的是, 张量网络的绘制方向在物理系与计算机系中是不同的.
在物理中, 我们张量的绘制基于相对论的习惯是从下往上的; 而在计算机系我们的绘制的习惯是从左往右的.
这里我选择的是计算机系横向的画法.
但这个画法有一个很容易出错的地方, 即我们传统的矩阵计算是从右往左的.
这在读图的时候可能会有一定的误导性, 因此在相互转换时需要特别注意.
```

张量网络的基本单元就是张量与其引脚.
一个简单的向量 $\psi^\Gamma$ 可以被表示为一个几何图形与从该图形中伸出来的一个向右的引脚.
在简单的系统中, 对于向量我们甚至可以直接用狄拉克符号代替几何图形.

![vec_simple]({{ 'vec_simple.png' | prepend: site.figure_url}})

相应地, 对偶向量可以被表示为向左的引脚

![vec_dull_simple]({{ 'vec_dull_simple.png' | prepend: site.figure_url}})

对于算子而言, 我们可以将 $A^\Sigma\_{\phantom{\Sigma}\Gamma}$ 表示为

![op_simple]({{ 'op_simple.png' | prepend: site.figure_url}})

对应于爱因斯坦表示, 上标代表的引脚在右, 下标代表的引脚在左.
对于张量的几何形状其实并没有严格的规定.
只要能将不同的张量区分开, 任意的简单几何形状都可以被用来表示张量.
对于自伴算子, 比如说**密度算子**, 由于其对称性, 我们必然要选择一个对称的形状.
通常酉算子会以圆形出现, 而对角算子被表示为一个实心的原点.
但是这在不同的情况下我们对形状的选择可能有所区别.

在很多问题中, 我们可能会将一个系统分为几个子系统, 而我们可以用子系统的标准正交基去表示总系统的标准正交基.
也就是说, 如果子系统对应的字母表是 $\Gamma_1, \Gamma_2, \dots, \Gamma_k$, 而它们对应的基向量是 $\vec{e}\_{a_1}^1, \vec{e}\_{a_2}^2, \dots, \vec{e}\_{a_k}^k$, 那么这些字母表的笛卡尔积 $\Gamma := \Gamma_1\times \Gamma_2 \times \dots \times \Gamma_k$ 可以是总系统的字母表.
而且每一个 $\vec{e}\_{(a_1,a_2,\dots,a_k)}:=\vec{e}\_{a_1}^1\otimes \vec{e}\_{a_2}^2 \otimes \cdots \otimes \vec{e}\_{a_k}^k$ 都是总系统的一个基向量.
这意味着在张量网络中我们可以做引脚的分裂与合并的操作

![op_split]({{ 'op_split.png' | prepend: site.figure_url}})

张量的矩阵计算由引脚的连结所表示.
矩阵乘法 $A^\Sigma\_{\phantom{\Sigma}\Gamma} B^\Gamma\_{\phantom{\Gamma}\Delta}$ 可以被表示为

![op_contraction]({{ 'op_contraction.png' | prepend: site.figure_url}})

为了方便起见, 如无必要, 我们一般不具体地标注引脚所对应的字母表.
注意, 由于我们绘制张量网络的方向是从左到右, 这个顺序与线性代数中的记号方向是相反的.

有了张量的图形表示以后, 我们就可以简单的画出算子间复杂的网络.
在量子计算中, 最基本的量子线路的画法本质上就是一个张量网络, 其中每一个引脚都是二维的.
比如[谷歌的量子霸权](https://www.nature.com/articles/s41586-019-1666-5)中使用的这种随机的复杂算子的组合如果不使用张量网络的话我们很难将这个过程用人可以阅读的方式表现出来.
在下面这张图中, 每一个正方形就是一个 $2\times 2$ 的矩阵, 而每一个哑铃形是一个 $4\times 4$ 的矩阵.
通过张量缩并的方法, 我们就可以写下描述这整个过程的矩阵 (当然, 这个复杂度是非常高的).

![Google_supremacy](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-019-1666-5/MediaObjects/41586_2019_1666_Fig3_HTML.png?as=webp)

## 信道的表示

在量子信息中, 我们很多时候更关心的是量子信道而非具体的态.
而这处理起来其实有些麻烦.
根据我们对量子信道自然表示的定义, $\Phi^{\phantom{\Gamma}\Gamma^\prime \Sigma}\_{\Gamma\phantom{\Gamma^\prime\Sigma}\Sigma^\prime}$
的张量网络表示为一个凹陷的形状

![channel]({{ 'channel.png' | prepend: site.figure_url}})

然而在张量网络中, 我们并没有限定张量的形状.
而且我们只规定了引脚的方向, 并没有规定引脚出现的先后顺序.
因此我们在张量网络中左边的信道与右边的算子是等价的, 而右边正是该信道的**自然表示**.
那么我们如何才能区分信道与一般的两进两出的算子呢?

我们知道密度算子是对称的, 因而它的表示必然也是对称的.
而密度算子的性质可以简单的用两条约束表示出来:

![DO_constrains]({{ 'DO_constrains.png' | prepend: site.figure_url}})

左边的约束意味着 $\rho^\Gamma_\Gamma = \tr[\rho] = 1$ (矩阵的左右两个引脚被链接了起来), 右边的约束意味着它是半正定的.
这里的三角形代表着任意的向量.

我们有了密度算子的图形化表示, 那么信道的 CPTP 性质又意味着什么呢?
有意思的是, 实际上信道的性质也可以用两条约束表示出来:

* 信道的保迹 (TP) 性质等价于

![TP]({{ 'TP.png' | prepend: site.figure_url}})

* 而它的全正性 (CP) 等价于

![CP]({{ 'CP.png' | prepend: site.figure_url}})

这里一条横线代表着单位算子 $\mathbb{I}$.
我们将 $\Gamma$ 与 $\Gamma^\prime$ 交换后的算子 $\Phi^{\Gamma\phantom{\Gamma^\prime} \Sigma}\_{\phantom{\Gamma}\Gamma^\prime\phantom{\Sigma}\Sigma^\prime}$ 记作 $J^\Phi$.
这被称为信道 $\Phi$ 的 **Choi 表示 / Choi 算子**.

![Choi]({{ 'Choi.png' | prepend: site.figure_url}})

算子与信道的这种对应关系叫做 Choi-Jamiołkowski 同构, 或者*信道-算子对偶*.
有了这一层关系, 我们就可以把 "保持 XX 不变" 这种性质转化成具体的数学表达, 从而可以使用各种数学工具去处理它们.
实际上, 如果我们仔细观察, 会发现密度算子与量子信道的约束非常的相像.
好像从某种方向看它们可以被统一起来.
事实也确实如此, 在[资源理论 - 基础概念]({{ 'quantum%20information/Quantum_Resource_Theory/' | absolute_url }})中我提到,
复数域本身也是一个 Hilbert 空间, 我们完全可以把算子当作一个输入空间为平凡空间 $\mathcal{H}^\qty{0}$ 的量子信道.
由于数字 $1$ 是平凡 Hilbert 空间中的单位算子, 密度算子的约束与信道的约束其实是完全等价的.
密度算子 $\rho$ 的 Choi 算子就是它本身.

然而将量子过程全部用 Choi 算子表示也为我们带来了很多的麻烦.
虽然它们都是算子, 但是量子信道的复合过程却不是常见矩阵计算过程.
为了处理信道的复合, 我们定义了一种**链乘 (link product)** $\star$ 的概念.

$$J^\Phi \star \rho := \tr_\Gamma [\qty(J^\Phi)^{T_\Gamma} \rho] = \sum_{a,b \in \Gamma} \Phi^{\phantom{a}b \Sigma}_{a\phantom{b}\phantom{\Sigma}\Sigma^\prime} \rho^a_{\phantom{a}b}$$

也就是我们先对 $\Gamma$ 所对应的系统做部分转置, 然后再进行角标缩并.
在张量网络中我们可以看到很有意思的一点: 虽然我们的张量网络是从左往右画的, 但是量子过程的时间演化却是从下往上的:

![Time Evolution]({{ 'Time_evolution.png' | prepend: site.figure_url}})

虽然这个链乘的公式里面奇怪的包含了转置与偏迹, 但实际上它是一种超算子复合中很自然的作用.
对于算子的 Hadamard 积 (即对应元素之间直接相乘) $(A\circ B)^a\_{\phantom{a}b} = A^a\_{\phantom{a}b} B^a\_{\phantom{a}b}$,
我们有 $\sum_a (A\circ B)^a\_{\phantom{a}b} = (B^TA)^b\_{\phantom{b}b}$.
或者说 $A^\Gamma\_{\phantom{\Gamma}\Sigma}B^\Gamma\_{\phantom{\Gamma}\Sigma} = \tr[B^TA]$.
对应链乘的公式可知, 这个转置再角标缩并实质上是将 $\mathcal{H}^\Gamma$ 空间中的算子直接看成向量, 然后进行内积的结果.
这种算子的向量化其实就是信道自然表示的构造过程.
只是这里我们将数学上不容易处理的 Hadamard 积通过上述性质转换成了矩阵乘法,
因而我们额外的做了一次转置.

## 信道与酉演化

量子信息中一个让人比较迷惑的地方在于, 这套密度算子的语言与基础的量子物理中酉演化的表达方式似乎难以对应.
在传统量子物理中, 我们一般讨论的是波函数, 即 Hilbert 空间中的向量, 而非密度算子.
但其实二者的转化可以从张量网络中很容易看出来.

首先, 我们可以看到, 所有量子过程的 Choi 矩阵都是半正定的.
我们知道半正定算子 $A$ 都存在谱分解 $A = \sum_k \lambda_k \ketbra{u_k}{u_k}$.
其中 $\lambda_k$ 是正实数, 且其数量等于算子 $A$ 的秩.
我们可以把 $\lambda_k$ 看作一个对角矩阵, 因而我们有

![Spectral decomposition]({{ 'Spect_decompose.png' | prepend: site.figure_url}})

如果我们对所有的 Choi 矩阵都做如上分解, 我们有

![Process decomposition]({{ 'Process_decompose.png' | prepend: site.figure_url}})

如果一个 Choi 矩阵的秩为 $1$, 那么中间的对角矩阵实际上作用在平凡空间 $\mathcal{H}^\qty{0}$ 上.
因此我们可以直接隐藏掉中间的引脚, 然后将垂直的两束张量像拉开拉链一样展平.
由于中间的引脚被剪断, 整个张量网络被分成了相互共轭的两部分.

![Split tensor]({{ 'Split_tensor.png' | prepend: site.figure_url}})

这里每一个展平后的正方形都是原来的三角形的下引脚做部分转置后得到的算子 $U_i$.
量子信道的保迹性保证了每一个 $U_i$ 都满足 $U_i^\dagger U_i = \mathbb{I}$, 即它们都是保距算子.
如果信道的输入与输出空间的大小相同, 那么保距算子等价于酉算子.
而所有的密度算子被分解成了一对 Hilbert 空间中的向量与对偶向量.
这便是有限维量子态的波函数.

在这种所有 Choi 矩阵的秩都为 $1$ 的情况下, 我们便可以去掉共轭的部分, 只画一边的张量.
这样的画法就归约到了我们量子线路的结构.
更一般地, 对于 Choi 矩阵的谱分解, 我们可以修改特征向量的归一化条件, 使得
$J^\Phi = \sum_k \ketbra{u_k}{u_k}$, 而 $\braket{u_k}{u_k} = \lambda_k >0$.
此时我们中间的对角算子的元素就全部变成了 $1$, 即单位算子.
我们把谱分解写成加和的形式

![Spectral decomposition]({{ 'Spect_as_sum.png' | prepend: site.figure_url}})

此时我们就可以把所有的量子过程写成横向的平直过程的加和的形式.
这样的分解被称为量子过程的 **Kraus 表示**.
在 Kraus 表示中, 我们就可以将量子过程写成 $K_i K^\prime\_j \ket{\psi}$ 的形式, 其中每个 $K_i$, $K^\prime\_j$ 代表了一个 Kraus 表示中的正方形, 叫做 Kraus 算子.
这更符合传统量子物理中的习惯.

然而不幸的是, 信道的 Kraus 表示并不能简单的用保距算子的倍数所表示.
因而即便信道的输入空间与输出空间相同, 一般的信道也无法用随机哈密顿量的演化所表述.
这造成了我们在开放系统演化模型的物理意义与第一性原理间不得不做出一定妥协.
为了方便起见, 很多时候我们都会假设我们的信道可以用随机哈密顿量的演化 (或者说等价地, 随机酉算子演化) 所描述.
这样的信道被称为*混合酉信道*.
