---
outline: deep
---
# 行列式
:::tip
$n阶行列式：n行n列，n^2个元素$

$元素可用a_{ij}表示，其中i代表行标，j代表列标$
:::

## 行列式相关概念
### 排列
由1,2,...,n组成的一个**有序数组**，叫n级排列，一共有 n! 种排列方式

$如：123,132,213,231,312,321是三级排列$

$注：3145不是5级排列，因为它中间缺少数字2，不算有序$

### 逆序
大数排在小数的前面，即构成一个逆序

**逆序数**：指逆序的总数

**逆序数计算方法示例**：“4213”中，4比2，1，3大，有3个逆序，2比1大，有1个逆序，所以4213的逆序数为N(4213)=3+1=4

**偶排列**：逆序数为偶数

**奇排列**：逆序数为奇数

$n级排列中，奇排列，偶排列各占\frac{n!}{2}$

$N(123...n)=0\quad标准排列（自然排列）$

$N(n(n-1)...321)=n-1+n-2+...+2+1=\frac{n(n-1)}{2}$

$N(54123)=4+3=7$

### 对换
每交换两个数，即是一次对换

$N(54123)=4+3=7$

做一次对换后

$N(54213)=4+3+1=8$

可以看出，做一次对换后，奇偶性改变（偶数次对换后，奇偶性不变）

### 一阶行列式
**基本计算**

$|a_{11}|=a_{11}$

### 二阶行列式
**基本计算**

$
\left|
  \begin{array}{cc}
    a_{11} & a_{12}\\
    a_{21} & a_{22}
  \end{array}
\right|=a_{11}a_{12}-a_{21}a_{22}
$

### 三阶行列式
**基本计算**

$
\left|
  \begin{array}{cccc}
    a_{11} & a_{12} & a_{13}\\
    a_{21} & a_{22} & a_{23}\\
    a_{31} & a_{32} & a_{33}
  \end{array}
\right|=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}
$

### n阶行列式
**基本计算**

#### 按行
1. 行标取标准排列
2. 列标取排列的所有可能，共有 n! 项
3. 从不同行，不同列取出三个元素相乘，符号由列标排列的奇偶性决定。（偶排列为＋，奇排列为－）

$
\left|
  \begin{array}{cccc}
    a_{11} & a_{12} & \cdots & a_{1n}\\
    a_{21} & a_{22} & \cdots & a_{2n}\\
    \vdots & \vdots & \vdots & \vdots\\
    a_{n1} & a_{n2} & \cdots & a_{nn}\\
  \end{array}
\right|=\sum_{j_1j_2\cdots j_n}(-1)^{N(j_1j_2j_n)}a_{1j_1}a_{2j_2}\cdots a_{nj_n}
$

$记作 D=|a_{ij}|$

#### 按列
行标与列标替换

#### 既不按行也不按列
只考计算后结果的正负号

$\sum(-1)^{N(i_1\cdots i_n)+N(j_1\cdots j_n)}a_{i_1 j_1}a_{i_2 j_2}\cdots a_{i_n j_n}$

### 三角行列式
:::tip
上三角，下三角，对角形行列式，主要根据对角线计算。主对角线直接相乘，次对角线还要考虑正负号。
:::
**基本计算**

#### 主对角线
$
\left|
  \begin{array}{cccc}
      a_{11} & & & \\
      & a_{22} & & \\
      & & \cdots &\\
      & & & a_{nn}\\
  \end{array}
\right|=a_{11}a_{22}\cdots a_{nn}
$

#### 次对角线
$
\left|
  \begin{array}{cccc}
      & & & a_{1n}\\
      & & a_{2n-1} &\\
      & \cdots & &\\
      a_{n1} & & &\\
  \end{array}
\right|=(-1)^{\frac{n(n-1)}{2}}a_{1n}\cdots a_{n1}
$

## 行列式的性质
:::tip 性质1
转置
$
D=\left|
    \begin{array}{cccc}
      1 & 2 & 3\\
      1 & 1 & 1\\
      8 & 8 & 8
    \end{array}
  \right|
\qquad
D^T=\left|
      \begin{array}{cccc}
        1 & 1 & 8\\
        2 & 1 & 8\\
        3 & 1 & 8
      \end{array}
    \right|
$

$D^T=D（转置后值不变）$

**对行成立的性质，对列也成立**
:::

:::tip 性质2
两行互换，值变号

**推论：两行（列）相等，D=-D=0**
:::

:::tip 性质3
某一行都乘以k，等于用k乘以D

$
\left|
  \begin{array}{cccc}
    1 & 2 & 3\\
    4k & 5k & 6k\\
    7 & 8 & 9
  \end{array}
\right|=k\left|
  \begin{array}{cccc}
    1 & 2 & 3\\
    4 & 5 & 6\\
    7 & 8 & 9
  \end{array}
\right|
$

**推论：某一行都有公因子k，k可以提外面。如果所有元素都有公因子k，k可以外提n次**
:::

:::tip 性质4
根据性质2与性质3可知，两行对应成比例，D=0

推论：某一行全为0，D=0
:::

:::tip 性质5
行列式的某一行所有元素都是两项和，则该行列式可以表示两个行列式相加

$
\left|
  \begin{array}{cccc}
    1 & 2 & 3\\
    7+8 & 2+3 & 9+10\\
    8 & 8 & 9
  \end{array}
\right|=\left|
  \begin{array}{cccc}
    1 & 2 & 3\\
    7 & 2 & 9\\
    8 & 8 & 9\\
  \end{array}
\right|+\left|
  \begin{array}{cccc}
    1 & 2 & 3\\
    8 & 3 & 10\\
    8 & 8 & 9\\
  \end{array}
\right|
$
:::

:::tip 性质6 ✳✳✳
某一行乘以一个数，加到另一行上去，D不变

$
\left|
  \begin{array}{cccc}
    1 & 2 & 3\\
    1 & 1 & 0\\
    9 & 9 & 10\\
  \end{array}
\right|\xrightarrow{第一行×5，加到第二行去}\left|
  \begin{array}{cccc}
    1 & 2 & 3\\
    1+5 & 1+10 & 0+15\\
    9 & 9 & 10\\
  \end{array}
\right|
$

$
=\left|
  \begin{array}{cccc}
    1 & 2 & 3\\
    1 & 1 & 0\\
    9 & 9 & 10\\
  \end{array}
\right|+\left|
  \begin{array}{cccc}
    1 & 2 & 3\\
    5 & 10 & 15\\
    9 & 9 & 10\\
  \end{array}
\right|
$

拆开后的第二个行列式中，第一行与第二行成比例，值为0
:::

## 例题
### 纯数字计算
$
D=\left|
    \begin{array}{cccc}
      1 & 2 & 0 & 1\\
      2 & 3 & 10 & 0\\
      0 & 3 & 5 & 18\\
      5 & 10 & 15 & 4
    \end{array}
  \right|
$
$
\xlongequal{1行乘-2，加到2行}\left|
    \begin{array}{cccc}
      1 & 2 & 0 & 1\\
      0 & -1 & 10 & -2\\
      0 & 3 & 5 & 18\\
      5 & 10 & 15 & 4
    \end{array}
  \right|
$

$
\xlongequal{1行乘-5，加到4行}\left|
    \begin{array}{cccc}
      1 & 2 & 0 & 1\\
      0 & -1 & 10 & -2\\
      0 & 3 & 5 & 18\\
      0 & 0 & 15 & -1
    \end{array}
  \right|
$

$
\xlongequal{2行乘3，加到3行}\left|
    \begin{array}{cccc}
      1 & 2 & 0 & 1\\
      0 & -1 & 10 & -2\\
      0 & 0 & 35 & 12\\
      0 & 0 & 15 & -1
    \end{array}
  \right|
$

$
\xlongequal{3行乘-\frac{3}{7}，加到4行}\left|
    \begin{array}{cccc}
      1 & 2 & 0 & 1\\
      0 & -1 & 10 & -2\\
      0 & 0 & 35 & 12\\
      0 & 0 & 0 & -\frac{43}{7}
    \end{array}
  \right|
$

$=215$