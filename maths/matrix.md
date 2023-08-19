# 矩阵
:::tip 定义
$\left[\begin{matrix}
  a_{11}&a_{12}&\cdots&a_{1n}\\
  a_{21}&a_{22}&\cdots&a_{2n}\\
  \vdots&\vdots&\vdots&\vdots\\
  a_{m1}&a_{m2}&\cdots&a_{mn}
\end{matrix}\right]\rightarrow数表，m\times n矩阵$

$其中，m是行数，n是列数，a_{mn}是元素$

$矩阵一般用ABCE表示，记作A_{m\times n}，表示m行n列的矩阵$
:::

## 与行列式的区别
1. 本质：**行列式**是一个数，**矩阵**是数表
2. 符号：**行列式**是| |，**矩阵**是( )或[ ]
3. 形状：**行列式**行数等于列数，**矩阵**行数与列数可以不想等

## 概念
1. $行矩阵：只有一行。\left[\begin{matrix}1&1&1\end{matrix}\right]$
   
2. $列矩阵：只有一列。\left[\begin{matrix}1\\1\\1\end{matrix}\right]$
   
3. $零矩阵：元素都是0。\left[\begin{matrix}0&0&0\\0&0&0\end{matrix}\right]$

4. $负矩阵：矩阵元素都取相反数。A\rightarrow-A$

5. $n阶方阵：行数=列数，记作A_n$

6. $单位阵：主对角线都是1，其余的都是0。E_3=\left[\begin{matrix}1&&\\&1&\\&&1\end{matrix}\right]$

7. $一行一列的矩阵：等于它本身。[a]=a$

8. $同型矩阵：形状一样的矩阵。如A_{3\times 5} B_{3\times 5}$

9. $矩阵相等：✳同型✳矩阵对应的元素相等，记作A=B$

## 矩阵计算
### 加/减法
矩阵加/减法，各项元素直接相加/减就行，**只有同型矩阵才能相加减**。

$
\left[
  \begin{matrix}
    1&1&1\\
    1&1&1
  \end{matrix}
\right]+\left[
  \begin{matrix}
    0&2&3\\
    -1&1&1
  \end{matrix}
\right]=\left[
  \begin{matrix}
    1&3&4\\
    0&2&2
  \end{matrix}
\right]
$

#### 公式
与普通加减法公式一致

### 数乘
一个数k，乘以一个矩阵，等于这个矩阵所有元素乘以k

$
k\left[
  \begin{matrix}
    1&2&3\\
    4&5&6
  \end{matrix}
\right]=\left[
  \begin{matrix}
    k&2k&3k\\
    4k&5k&6k
  \end{matrix}
\right]
$

#### 公式
1. $k(A+B)=kA+kB$
2. $(k+l)A=kA+lA$
3. $k(lA)=(kl)A$

### 提公因子
矩阵所有元素均有公因子，公因子外提1次

### 乘法
:::info 前提条件
第一个矩阵的列数等于第二个矩阵的行数
:::
:::info 结果矩阵形状
行数=第一个矩阵的行数

列数=第二个矩阵的列数
:::

中间相等取两头：

$AB叫A左乘B，B右乘A$

$A_{3\times 4}B_{4\times 5}=C_{3\times 5}$

每行元素乘以相对应每列元素后相加，与行列式乘法一致。

#### 矩阵乘法不满足的规律

1. $AB\neq BA，AB有意义，BA不一定有意义$

   $AB=BA，AB可交换，且AB必须是同阶$

主要看两个矩阵行列数是否相同。

2. $AB=0推不出A=0或B=0$

3. $AB=AC，且A\neq0，推不出B=C$

#### 与零矩阵相乘
$A_{4\times 3}0_{3\times 2}=0_{4\times 2}$

#### 与单位阵E相乘
$左乘AE=A，右乘EB=B$

#### 结合律
$(AB)C=A(BC)$

$k(AB)=(kA)B=A(kB)$

#### 分配律
$(A+B)C=AC+BC$

$C(A+B)=CA+CB$