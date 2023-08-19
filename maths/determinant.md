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

### 例题
#### 纯数字计算
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

## 按行（列）展开
### 余子式
$
\left|
  \begin{array}{cccc}
    1 & 1 & 0 & 3\\
    1 & 1 & 1 & 1\\
    2 & 2 & 3 & 4\\
    5 & 5 & 6 & 6
  \end{array}
\right|\xrightarrow{去掉第三行，第二列}M_{32}=\left|
  \begin{array}{cccc}
    1 & 0 & 3\\
    1 & 1 & 1\\
    5 & 6 & 6
  \end{array}
\right|
$

### 代数余子式
:::tip
对比余子式，前面增加了符号
:::
$
A_{32}=(-1)^{3+2}\left|
  \begin{array}{cccc}
    1 & 0 & 3\\
    1 & 1 & 1\\
    5 & 6 & 6
  \end{array}
\right|
$

:::tip 定理：按行（列）展开
$按行：D=a_{i1}A_{i1}+a_{i2}A_{i2}+\cdots+a_{in}A_{in}$

$按列：D=a_{1j}A_{1j}+a_{2j}A_{2j}+\cdots+a_{nj}A_{nj}$

其中，a是行列式元素，A是元素（自己）对应的代数余子式

$D=\sum某行（列）元素\times自己的代数余子式$
:::

### 例子
$
\left|
  \begin{array}{cccc}
    1 & 1 & 2\\
    0 & 1 & 0\\
    2 & 3 & 5
  \end{array}
\right|
$

$
\xlongequal{按第一行展开}1\times(-1)^{1+1}\left|
  \begin{array}{cccc}
    1 & 0\\
    3 & 5
  \end{array}
\right|+1\times(-1)^{1+2}\left|
  \begin{array}{cccc}
    0 & 0\\
    2 & 5
  \end{array}
\right|+2\times(-1)^{1+3}\left|
  \begin{array}{cccc}
    0 & 1\\
    2 & 3
  \end{array}
\right|
$

$
\xlongequal{按第二行展开}1\times(-1)^{2+2}\left|
  \begin{array}{cccc}
    1 & 2\\
    2 & 5
  \end{array}
\right|
$

可以看出，**行列式取0多的行或列展开**，会更方便计算

### 异乘变零
:::tip 定理
某行元素与另一行元素的代数余子式乘积之和为0 
:::

$
\left|
  \begin{array}{cccc}
    1 & 1 & 2 & 3\\
    0 & 0 & 8 & 9\\
    2 & 5 & 5 & 4\\
    9 & 9 & 9 & 10
  \end{array}
\right|
$

$
\xlongequal{第4行元素与第1行元素的代数余子式相乘}9\times A_{11}+9\times A_{12}+9\times A_{13}+10\times A_{14}=0
$

### 拉普拉斯k阶子式
:::tip 定理
取定k行，由k行元素组成的所有k阶子式与代数余子式乘积之和等于D。
:::
$
\left|
  \begin{array}{cccc}
    1 & 3 & 4 & 4\\
    1 & 1 & 2 & 5\\
    1 & 1 & 0 & 8\\
    9 & 9 & 9 & 10
  \end{array}
\right|
$

$
\xlongequal{取第12行，第12列展开}二阶子式=\left|
  \begin{array}{cccc}
    1 & 3\\
    1 & 1
  \end{array}
\right|
$

$
\xlongequal{取第12行，第12列展开}余子式=\left|
  \begin{array}{cccc}
    0 & 8\\
    9 & 10
  \end{array}
\right|
$

$
\xlongequal{取第12行，第12列展开}代数余子式=(-1)^{1+2+1+2}\left|
  \begin{array}{cccc}
    0 & 8\\
    9 & 10
  \end{array}
\right|
$

$
=\left|
  \begin{array}{cccc}
    1 & 3\\
    1 & 1
  \end{array}
\right|\times(-1)^{1+2+1+2}\left|
  \begin{array}{cccc}
    0 & 8\\
    9 & 10
  \end{array}
\right|
$

#### 例题
$
\left|
  \begin{array}{cccc}
    1 & 2 & 0 & 0 & 0\\
    3 & 4 & 0 & 0 & 0\\
    1 & 2 & 3 & 4 & 5\\
    1 & 1 & 1 & 1 & 1\\
    6 & 6 & 8 & 3 & 1
  \end{array}
\right|=\left|
  \begin{array}{cccc}
    1 & 2\\
    3 & 4
  \end{array}
\right|\times(-1)^{1+2+1+2}\left|
  \begin{array}{cccc}
    3 & 4 & 5\\
    1 & 1 & 1\\
    8 & 3 & 1
  \end{array}
\right|
$

## 行列式相乘
:::tip 定理
两个**同阶**行列式相乘，用一个行列式的n行元素分别乘以另一个行列式的1~n列元素，先相乘再相加，得到新的行列式的n行1~n列的元素。

**行列式乘法与矩阵乘法相同**
:::
$
\left|
  \begin{array}{cccc}
    1 & 2 & 1\\
    2 & 1 & 1\\
    1 & 1 & 2
  \end{array}
\right|\times\left|
  \begin{array}{cccc}
    1 & 0 & 2\\
    0 & 1 & 0\\
    2 & 0 & 1
  \end{array}
\right|=\left|
  \begin{array}{cccc}
    3 & 2 & 3\\
    4 & 1 & 5\\
    5 & 1 & 4
  \end{array}
\right|
$

## 特殊行列式

### 三叉形行列式
$
\left|
  \begin{array}{cccc}
    1+a_1 & 1 & 1 & \cdots & 1\\
    1 & 1+a_2 & 1 & \cdots & 1\\
    \cdots & \cdots & \cdots & \cdots & \cdots\\
    1 & 1 & 1 & \cdots & 1+a_n
  \end{array}
\right|
$

$
\xlongequal{加一行，加一列（加边法）}\left|
  \begin{array}{cccc}
    1 & 1 & 1 & 1 & \cdots & 1\\
    0 & 1+a_1 & 1 & 1 & \cdots & 1\\
    0 & 1 & 1+a_2 & 1 & \cdots & 1\\
    \cdots & \cdots & \cdots & \cdots & \cdots & \cdots\\
    0 & 1 & 1 & 1 & \cdots & 1+a_n
  \end{array}
\right|
$

$
\xlongequal{每一行乘以-1加到下一行}\left|
  \begin{array}{cccc}
    1 & 1 & 1 & 1 & \cdots & 1\\
    -1 & a_1 & & & \cdots &\\
    -1 & & a_2 & & \cdots &\\
    \cdots & \cdots & \cdots & \cdots & \cdots & \cdots\\
    -1 & & & & \cdots & a_n
  \end{array}
\right|
$

$
\xlongequal{每一列乘以\frac{1}{a_{列}}加到第一列}\left|
  \begin{array}{cccc}
    1+\frac{1}{a_1}+\frac{1}{a_2}+\cdots+\frac{1}{a_n} & 1 & 1 & 1 & \cdots & 1\\
    0 & a_1 & & & \cdots &\\
    0 & & a_2 & & \cdots &\\
    \cdots & \cdots & \cdots & \cdots & \cdots & \cdots\\
    0 & & & & \cdots & a_n
  \end{array}
\right|
$

$=(1+\frac{1}{a_1}+\frac{1}{a_2}+\cdots+\frac{1}{a_n})a_1a_2\cdots a_n$

### 范德蒙德行列式
$
\left|
  \begin{array}{cccc}
  1&1&1&\cdots&1\\
  x_1&x_2&x_3&\cdots&x_n\\
  \cdots&\cdots&\cdots&\cdots&\cdots\\
  x_1^{n-2}&x_2^{n-2}&x_3^{n-2}&\cdots&x_n^{n-2}&\\
  x_1^{n-1}&x_2^{n-1}&x_3^{n-1}&\cdots&x_n^{n-1}&
  \end{array}
\right|=\prod_{1\leqslant j<i\leqslant n}(x_i-x_j)
$

$
\left|
  \begin{array}{cccc}
    \cdots & \cdots & \cdots & \cdots\\
    a & b & c & d\\
    \cdots & \cdots & \cdots & \cdots\\
    \cdots & \cdots & \cdots & \cdots\\
  \end{array}
\right|=(b-a)(c-a)(d-a)(c-b)(d-b)(d-c)
$

### 反对称行列式
:::tip 定义
1. 主对角线全为0
2. $上下位置对应成相反数a_{ij}=-a_{ji}$

$
\left|
  \begin{array}{cccc}
    0 & 1 & -2\\
    -1 & 0 & 3\\
    2 & -3 & 0
  \end{array}
\right|
$
:::

:::tip 性质
如果是反对称行列式，且是奇数阶，则D=0

$D=\left|
  \begin{array}{cccc}
    0 & a & b\\
    -a & 0 & c\\
    -b & -c & 0
  \end{array}
\right|=(-1)^{3}\left|
  \begin{array}{cccc}
    0 & -a & -b\\
    a & 0 & -c\\
    b & c & 0
  \end{array}
\right|=-D^T=-D
$

$D=-D\rightarrow D=0$
:::

### 对称行列式
:::tip 定义
1. 主对角线无要求
2. $上下位置对应相等a_{ij}=a_{ji}$

$
\left|
  \begin{array}{cccc}
    1 & 1 & 2\\
    1 & 2 & -3\\
    2 & -3 & 3
  \end{array}
\right|
$
:::

## cramer克莱姆法则（了解）
:::tip
给定方程组与未知量相等，且D不等于0，才可以用克莱姆法则。
:::
$\begin{cases}
  x_1+x_2+x_3=1\\
  x_1-x_2+5x_3=6\\
  -x_1+x_2+6x_3=9
\end{cases}$

提取系数作行列式：

$D=\left|
  \begin{array}{cccc}
    1 & 1 & 1\\
    1 & -1 & 5\\
    -1 & 1 & 6
  \end{array}
\right|$

$D_1=\left|
  \begin{array}{cccc}
    1 & 1 & 1\\
    6 & -1 & 5\\
    9 & 1 & 6
  \end{array}
\right|$

$D_2=\left|
  \begin{array}{cccc}
    1 & 1 & 1\\
    1 & 6 & 5\\
    -1 & 9 & 6
  \end{array}
\right|$

$D_3=\left|
  \begin{array}{cccc}
    1 & 1 & 1\\
    1 & -1 & 6\\
    -1 & 1 & 9
  \end{array}
\right|$

$则x_j=\frac{D_j}{D}$

:::tip 齐次方程组
$\begin{cases}
  x_1+x_2+x_3=0\\
  x_1-x_2+5x_3=0\\
  -x_1+x_2+6x_3=0
\end{cases}$

当齐次方程组D不等于0时，只有0解。

当齐次方程（方程数=未知数）有非零解的充要条件为D=0.
:::