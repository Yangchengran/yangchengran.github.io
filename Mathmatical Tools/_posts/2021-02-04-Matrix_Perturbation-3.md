---
title: 矩阵微扰 - 不变子空间
layout: note

tag: 矩阵分析
math: true
---

* content
{:toc}


## 不变子空间的微扰

不变子空间的微扰的核心便是, 对于一个矩阵, 在微扰下, 我们要如何给出扰动前后不变子空间的差异的大小.
在[矩阵微扰 - 算子的矩阵表示]({{ 'mathmatical%20tools/Matrix_Perturbation-1' | absolute_url }})中我们看到,
给定一个矩阵 $A$, 以及其不变子空间 $\spX_1$, 我们有

$$
\begin{equation}
\begin{aligned}
    (X_1:Y_2)^\dagger A (X_1:Y_2) &=
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

$A\to \tilde{A}$ 被扰动后, 不变子空间 $\spX_1$ 的扰动实际可以由

$$S := X_1^\dagger \tilde{A} (\id - \Pi_\spX); \quad R:= (\id - \Pi_\spX) \tilde{A} X_1$$

两个量给出.
对给定的一对互补子空间 $(X_1:Y_2)$, 不失一般性地,

$$
\begin{equation}
(X_1:Y_2)^\dagger \tilde{A} (X_1:Y_2) = \mqty(\tilde{L}_1&\tilde{H}\\ G&\tilde{L}_2 ) \ .
\end{equation}
$$

令 $P: \spX_1 \to \spY_2$ 为

$$
\begin{equation}\label{eq:approx_equation}
P\tilde{L}_1 - \tilde{L}_2 P = G - P\tilde{H}P
\end{equation}
$$

的解.
则

$$
\begin{equation}
\begin{aligned}
    \hat{X}_1 := (X_1+Y_2P)(\id + P^\dagger P)^{-1/2} \ ; \\
    \hat{Y}_2:= (Y_2-X_1P^\dagger)(\id + PP^\dagger)^{-1/2} \ ;
\end{aligned}
\end{equation}
$$

或者说

$$
\begin{equation}
\begin{aligned}
    \qty(\hat{X}_1:\hat{Y}_2) := \qty(X_1:Y_2)
    \mqty(\sqrt{Z_\spX} & -P^\dagger \sqrt{Z_\spY} \\ P \sqrt{Z_\spX} & \sqrt{Z_\spY}) \ ,
\end{aligned}
\end{equation}
$$

其中 $Z_\spX:= \id_\spX + P^\dagger P; Z_\spY:= \id_\spY + P P^\dagger$ 是归一化系数.
因此

$$
\begin{equation}
(\hat{X}_1:\hat{Y}_2)^\dagger \tilde{A} (\hat{X}_1:\hat{Y}_2)
= \mqty(\hat{L}_1&\hat{H}\\ 0&\hat{L}_2 ) \ .
\end{equation}
$$

给出了矩阵 $\tilde{A}$ 的(右/左)不变子空间.
在这个框架下, 我们可以给出不变子空间微扰理论最重要的定理 (**近似定理**):

{: style = .highlight }
给定一族一致的范数 $\norm{\cdot}$, 令 $\gamma := \norm{G};\quad \eta:= \norm{H}$, 以及 $ \delta:= \text{sep}(L_1,L_2)$.
如果 $$\frac{\gamma\eta}{\delta^2}< \frac{1}{4} \ ,$$
则等式 \eqref{eq:approx_equation} 有唯一解.
其中
$$
\begin{equation}
\norm{P} \leq \frac{2\gamma}{\delta+\sqrt{\delta^2-4\gamma\eta}} < \frac{2\gamma}{\delta} \ .
\end{equation}
$$

``` quote
证明见 'Matrix Perturbation Theory' 的定理 V.2.11, 其利用了函数 $T(P) = PL_1 - L_2 P$ 可逆, 且存在不动点的性质.
这也是上述定理中不等式的由来.
```

如果 $\norm{\cdot}$ 是酉不变的.
那么我们可以用子空间的性质来表示上述定理:

{: style = .highlight }
设
$$
\begin{equation}
\begin{aligned}
R&:= \tilde{A}X_1 - X_1\tilde{L}_1; \quad S:= X_1^\dagger \tilde{A} - \tilde{L}_1X_1^\dagger \ .
\end{aligned}
\end{equation}
$$
如果 $\frac{\norm{R}\norm{S}}{\delta^2}<\frac{1}{4}$
则存在一个 $A$ 的**简单不变子空间** $\spX^\ast$ 使得
$$
\begin{equation}
\norm{\tan\qty[\Theta(\spX,\spX^\ast) ]} < \frac{2\norm{R}}{\delta} \ .
\end{equation}
$$

可以看到 $(X_1:Y_2)^\dagger R = (0:G)^\dagger$, $S (X_1:Y_2) = (0:H)$, 所以 $\norm{R}=\norm{G}, \norm{S}=\norm{H}$.
而 $(\id-\Pi_\spX)\Pi_{\hat{\spX}} = Y_2Y_2^\dagger \hat{X}_1\hat{X}_1^\dagger \simeq P(\id+P^\dagger P)^{-1/2}$.
根据空间正则角与投影的关系, 它的奇异值即扰动前后不变子空间的夹角 $\sin(\Theta)$.

$$
\begin{equation}
    P^2 (\id +P^2)^{-1} \simeq \sin^2(\Theta) \ ,
\end{equation}
$$

因而对于酉不变范数, $\norm{P} = \norm{\tan\qty(\Theta )}$.

有了如上工具, 我们便可以用 $A$ 的扰动来给 $\spX$ 的扰动一个上界:

{: style = .highlight }
给定 $A$ 的一个简单不变子空间 $(X_1:Y_2)$, 以及微扰 $E$ 使得
$$
\begin{equation}
(X_1:Y_2)^\dagger E (X_1: Y_2) = \mqty(E_{11}&E_{12}\\E_{21}&E_{22}) \ .
\end{equation}
$$
设
$$
\begin{equation}
\begin{aligned}
\tilde{\gamma}&:= \norm{E_{21}} \\
\tilde{\eta}&:= \norm{H}+\norm{E_{12}} \\
\tilde{\delta}&:= \text{sep}(L_1,L_2) - \norm{E_{11}} - \norm{E_{22}} > 0\ .
\end{aligned}
\end{equation}
$$
则当 $\frac{\tilde{\gamma}\tilde{\eta}}{\tilde{\delta}^2} <\frac{1}{4}$ 时,
存在唯一的 $P$ 满足
$$
\begin{equation}
  \norm{P} \leq 2 \frac{\tilde{\gamma}}{\tilde{\delta}} \ ,
\end{equation}
$$
使得 
$$
\begin{equation}
\begin{aligned}
\tilde{X}_1 &= (X_1 + Y_2P)(I+P^\dagger P)^{-1/2}; \\
\tilde{Y}_2 &= (Y_2 - X_1P)(I+P P^\dagger)^{-1/2};
\end{aligned}
\end{equation}
$$
给出了 $A+E$ 的一个不变子空间.

这个定理只需要将 $A+E$ 代入 $\tilde{A}$ 就可以很容易的从近似定理得到.
但是如上形式的分解给出的 $\hat{L}_1$ 的形式非常复杂.
为了得到更好的形式, 这个定理也可以用谱分解表达:

{: style = .highlight }
给定 $A$ 的一个简单不变子空间 $(X_1:Y_2)$, 以及微扰 $E$ 使得
$$
\begin{equation}
(Y_1:Y_2)^\dagger E (X_1: X_2) = \mqty(F_{11}&F_{12}\\F_{21}&F_{22}) \ .
\end{equation}
$$
设
$$
\begin{equation}
\begin{aligned}
\tilde{\gamma}&:= \norm{F_{21}} \\
\tilde{\eta}&:= \norm{F_{12}} \\
\tilde{\delta}&:= \text{sep}(L_1,L_2) - \norm{F_{11}} - \norm{F_{22}} > 0\ .
\end{aligned}
\end{equation}
$$
则当 $\frac{\tilde{\gamma}\tilde{\eta}}{\tilde{\delta}^2} <\frac{1}{4}$ 时,
存在唯一的 $P$ 满足
$$
\begin{equation}
  \norm{P} \leq 2 \frac{\tilde{\gamma}}{\tilde{\delta}} \ ,
\end{equation}
$$
使得 
$$
\begin{equation}
\begin{aligned}
\tilde{X}_1 &= X_1 + X_2 P; \\
\tilde{Y}_2 &= Y_2 - Y_1 P^\dagger;
\end{aligned}
\end{equation}
$$
给出了 $A+E$ 的一个不变子空间.
另外扰动后的矩阵的谱分解为
$$
\begin{equation}
\tilde{L_1} = L_1 + F_{11} +F_{12}P;
\quad \tilde{L_2} = L_2+F_{22} -PF_{12} \ .
\end{equation}
$$

---

**证明**:

对矩阵
$$
\begin{equation}
(Y_1:Y_2)^\dagger (A+E) (X_1: X_2)
= \mqty(L_1+F_{11}&F_{12}\\F_{21}&L_2+F_{22})
\end{equation}
$$
使用*近似定理*, 以消除 $F_{21}$.
此时我们不再要求归一化.

设 $\gamma=\norm{F_{21}}, \eta=\norm{F_{12}},
\delta=\text{sep}(L_1+F_{11},L_2+{F_{22}})$ 且 $\frac{\gamma\eta}{\delta^2}< \frac{1}{4}$, 则
存在 $P$ 使得 $P(L_1 + F_{11}) - (L_2 + F_{22}) P = F_{21} - PF_{12}P$.
因而

$$
\begin{equation}
\begin{aligned}
&\mqty(\id_\spX & -P^\dagger \\ 0 & \id_\spY)^\dagger
\mqty(L_1+F_{11}&F_{12}\\F_{21}&L_2+F_{22})
\mqty(\id_\spX & 0 \\ P & \id_\spY) \\
=& \mqty(\tilde{L}_1 & F_{12} \\ 0 & \tilde{L}_2) \ .
\end{aligned}
\end{equation}
$$

{: style="text-align: right" }
**Q.E.D.**

---

我们可以使用上述方法对角化这个结果, 即对上述矩阵的共轭

$$
\begin{equation}
    \mqty(\tilde{L}_{1}^\dagger & 0 \\ F_{12}^\dagger & \tilde{L}_{2}^\dagger)
\end{equation}
$$

重复这个过程:

$$
\begin{equation}
\begin{aligned}
    &\mqty(\id_\spX & 0\\-Q^\dagger & \id_\spY)
    \mqty(\tilde{L}_1^\dagger & 0 \\ F_{12}^\dagger & \tilde{L}_2)
    \mqty(\id_\spX & 0 \\ Q^\dagger & \id_\spY) \\
    =& \mqty(\tilde{L}_{1}^\dagger & 0 \\ 0 & \tilde{L}_2^\dagger)
\end{aligned}
\end{equation}
$$

或者说

$$
\begin{equation}
\begin{aligned}
    &\mqty(\id_\spX-Q^\dagger P & Q^\dagger \\ -P & \id_\spY)
    \mqty(L_1+F_{11}&F_{12}\\F_{21}&L_2+F_{22})
    \mqty(\id_\spX & -Q^\dagger \\ P & \id_\spY - P Q^\dagger) \\
    =& \mqty(\tilde{L}_1 & 0 \\ 0 &\tilde{L}_2)
\end{aligned}
\end{equation}
$$

并且我们有 $\norm{P} \leq \frac{2\norm{F_{21}}}{\text{sep}(L_1+F_{11},L_2+F_{22})}$
而 $\norm{Q^\dagger} \leq \frac{2\norm{F_{12}^\dagger}}{\text{sep}(\tilde{L}_1^\dagger, \tilde{L}_2^\dagger)}$.

由于这里 $H=0$, 我们只需要保证

$$\text{sep}(\tilde{L}_1^\dagger,\tilde{L}_2^\dagger)>0$$

即可保证 $Q$ 的存在性.

其有下界

$$
\begin{equation}
    \text{sep}(L_1^\dagger,L_2^\dagger)
    -\norm{F_{11}^\dagger}-\norm{P^\dagger F_{12}^\dagger}
    -\norm{F_{22}^\dagger}-\norm{F_{12}^\dagger P^\dagger}
\end{equation}
$$

假设我们选择的范数是酉不变的, 则因为取共轭不改变奇异值, $\norm{A} = \norm{A^\dagger}$.

因此
$$
\begin{equation}
\begin{aligned}
    & \text{sep}(\tilde{L}_1^\dagger,\tilde{L}_2^\dagger) \\
    \geq & \text{sep}(L_1,L_2)-\norm{F_{11}}-\norm{F_{22}}-2\norm{P} \norm{F_{12}} \\
    \geq & \text{sep}(L_1,L_2)-\norm{F_{11}}-\norm{F_{22}}-\frac{4\norm{F_{21}}\norm{F_{12}}}{\text{sep}(L_1,L_2)-\norm{F_{11}}-\norm{F_{22}}} > 0 \ ,
\end{aligned}
\end{equation}
$$
也即是说, 只要 $P$ 存在, $Q$ 必然存在.
这个对角化变换与矩阵从不变子空间表示到谱分解表示的变换有着细微的差别.
这里我们是从原矩阵的谱分解出发, 得到的扰动后的表示.
在对角化的过程中 $\tilde{L}_2$ 并不会发生改变.
然而从不变子空间表示出发, 我们得到的新的 $L_2$ 会有一个与 $Q$ 相关的扰动.

另外, 如果我们考虑的是厄密矩阵, 我们知道 $X_1 = Y_1$, $X_2 = Y_2$.
因此上述两种扰动是等价的 (差一个归一化系数).
并且扰动后的态也应该是酉算子

---

## 误差分析

从 $L_1$ 的微扰中我们可以看到, $$\tilde{L}_1 = L_1 + F_{11} + F_{12}P$$ .
由于 $\norm{P} \leq \frac{2 \norm{F_{21}}}{\tilde{\delta}}$ , 我们可以将其写做

$$
\begin{equation}
    \tilde{L}_1 = L_1 + Y_1^\dagger E X_1 + \order{\frac{\norm{E}^2}{\tilde{\delta}}} \ .
\end{equation}
$$

或者说, 用酉不变范数来表示,
$$
\begin{equation}
    \norm{L_1 - \tilde{L}_1} \leq \norm{Y_1^\dagger}_2 \norm{E X_1}
    = \norm{Y_1}_2 \norm{E}
    = \sec \theta_1 \norm{E} \ .
\end{equation}
$$

这里 $\theta_1$ 指的是原来的右不变子空间 $\spX_1$ 与左不变子空间 $\spY_1$ 之间最大的夹角.
对厄密算子来说, 这两个空间相等, 即 $\norm{L_1 - \tilde{L}_1} \leq \norm{E}$
