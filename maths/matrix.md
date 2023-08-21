---
outline: deep
---
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
\right]=
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

### 幂（必须为方阵）
1. $A^K=AA\cdots A（k个）$


2. $A^0=E$


3. $A^{K_1}A^{K_2}=A^{K_1+K_2}$


4. $(A^{K_1})^{K_2}=A^{K_1K_2}$


5. $一般情况下，(AB)^K\neq A^KB^K，(A+B)^2\neq A^2+2AB+B^2$

:::tip
如果遇到高次幂计算，一般都是把式子分开后进行抵消。

$(AB)^{10}=ABAB\cdots ABAB=(BA)^9AB$

$其中，BA为一个已经计算出来的具体值$
:::

### 转置
$
A=\left(
  \begin{matrix}
    1&2&3\\
    1&1&1
  \end{matrix}
\right)
$

$
A^T=\left(
  \begin{matrix}
    1&1\\
    2&1\\
    3&1
  \end{matrix}
\right)
$

#### 性质
1. $(A^T)^T=A\quad★$

2. $(A+B)^T=A^T+B^T$

3. $(kA)^T=kA^T$

4. $(AB)^T=B^TA^T\quad★$

5. $(ABCD)^T=D^TC^TB^TA^T\quad★$

## 特殊矩阵
### 数量矩阵（都是方阵）
:::tip 定义
主对角线都相等，其余元素都是0

$
\left(
  \begin{matrix}
    a&&&\\
    &a&&\\
    &&\cdots&\\
    &&&a
  \end{matrix}
\right)=aE
$

零矩阵和单位阵都是特殊的数量矩阵
:::

### 对角形矩阵
:::tip 定义
主对角线元素可以不相等，其余元素都是0（数量矩阵是特殊的对角形矩阵）

$
\left(
  \begin{matrix}
    a_1&&&\\
    &a_2&&\\
    &&\cdots&\\
    &&&a_n
  \end{matrix}
\right)
$

$记作diag(a_1,a_2,...,a_n)$

对角形矩阵相加减及数乘后仍是对角形矩阵，左乘对应行，右乘对应列
:::

### 对称与反对称

#### 对称矩阵
:::tip 定义
$a_{ij}=a_{ji}$

主对角线没有要求

$A^T=A$

转置后的矩阵对于本身，则为对称矩阵

$
\left(
  \begin{matrix}
    1&1&-1\\
    1&2&4\\
    -1&4&3
  \end{matrix}
\right)
$
:::

$如果A，B对称，则AB对称\iff AB可交换$

#### 反对称矩阵
:::tip 定义
$a_{ij}=-a_{ji}$

$a_{ii}=-a_{ii}\rightarrow a_{ii}=0$

主对角线全为0

$A^T=-A$

$
\left(
  \begin{matrix}
    0&1&-3\\
    -1&0&-4\\
    3&4&0
  \end{matrix}
\right)
$
:::

## 逆矩阵
### 方阵的行列式

1. $|A^T|=|A|$

2. $|kA|=k^n|A|\quad★$

3. $|AB|=|A|\cdot|B|$

#### 例1

$A是5阶方阵，且|A|=3，则$

1. $|-A|=(-1)^5|A|=-3$
2. $|2A^T|=2^5|A^T|=2^5\times 3$

### 伴随矩阵
**只有方阵才有伴随矩阵**

1. 求所有元素的代数余子式
2. **按行求的代数余子式按列放**，构成矩阵

求伴随矩阵口诀:**按行求，按列放**

$
A=\left(
  \begin{matrix}
    1&1&1\\
    2&1&3\\
    1&1&4
  \end{matrix}
\right)\xrightarrow{伴随矩阵}A^*=\left(
  \begin{matrix}
    1&-3&2\\
    -5&3&-1\\
    1&0&-1
  \end{matrix}
\right)
$

:::tip 定理1
对于任意方阵，都有

$AA^*=A^*A=|A|E\quad⭐$

推论：

$|A^*|=|A|^{n-1}$

$A^{-1}=\frac{1}{|A|}A^*，A^*=|A|A^{-1}$

$(A^*)^*=|A^*|(A^*)^{-1}=|A|^{n-1}\frac{1}{|A|}A=|A|^{n-2}A$
:::

### 逆矩阵定义
A为n阶方阵，如果存在n阶方阵B，使得AB=BA=E，即B为A的逆矩阵。记作

$A^{-1}=B$

逆矩阵满足以下规律：
1. 未必所有方阵均可逆
2. 若可逆，则逆矩阵唯一 

#### 性质
1. $若A可逆，A^{-1}可逆，则(A^{-1})^{-1}=A（与转置类似）$

2. $若A、B均可逆，则AB可逆，(AB)^{-1}=B^{-1}A^{-1}（与转置类似）$

3. $若A可逆，则A^T可逆，且(A^T)^{-1}=(A^{-1})^T$

4. $k\neq 0，则(kA)^{-1}=\frac{1}{k}A^{-1}$

5. $若A可逆，则|A^{-1}|=|A|^{-1}$

6. $若A可逆，则A^*也可逆，且(A^*)^{-1}=\frac{1}{|A|}A$

#### 伴随矩阵法求逆矩阵
$A可逆\iff|A|\neq 0$

$A^{-1}=\frac{1}{|A|}A^*$

推论：

$AB=E，A可逆，A^{-1}=B$

#### 初等变换法求逆矩阵
$根据条件凑出AA^{-1}=E$

### 矩阵方程
:::tip
矩阵方程解题中，需要注意以下问题：
1. 要严格执行左乘与右乘，因为矩阵位置一换，意义就变了。
2. 用到可逆的时候，需要先判断是否可逆。
3. 出现矩阵加减一个数的时候，需要给数补上单位阵。
4. 不要把矩阵放在分母上
:::

## 分块矩阵
分块就是划线，一线到底切割矩阵。

### 标准型
从左上角开始的一串1，不间断，其余的都是0，则称为标准型，标准型不一定是方的。

$D=\left[\begin{matrix}
  1&&&\\
  &\ddots&&\\
  &&1&\\
  &&&&
\end{matrix}\right]_{m\times n}$

### 分块加法
$\left[\begin{matrix}
  A_1&A_2\\
  A_3&A_4
\end{matrix}\right]+\left[\begin{matrix}
  B_1&B_2\\
  B_3&A_4
\end{matrix}\right]=\left[\begin{matrix}
  A_1+B_1&A_2+B_2\\
  A_3+B_3&A_4+B_4
\end{matrix}\right]$

### 数乘
$k\left[\begin{matrix}
  A_1&A_2\\
  A_3&A_4
\end{matrix}\right]=\left[\begin{matrix}
  kA_1&kA_2\\
  kA_3&kA_4
\end{matrix}\right]$

### 乘法
$\left[\begin{matrix}
  A_1&A_2\\
  A_3&A_4
\end{matrix}\right]\left[\begin{matrix}
  B_1&B_2\\
  B_3&B_4
\end{matrix}\right]=\left[\begin{matrix}
  A_1B_1+A_2B_3&A_1B_2+A_2B_4\\
  A_3B_1+A_4B_3&A_3B_2+A_4B_4
\end{matrix}\right]$

前提是保证子块能相乘

### 转置
$A=\left[\begin{matrix}
  A_1&A_2&A_3\\
  A_4&A_5&A_6
\end{matrix}\right]$

$A^T=\left[\begin{matrix}
  A_1^T&A_4^T\\
  A_2^T&A_5^T\\
  A_3^T&A_6^T\\
\end{matrix}\right]$

## 逆矩阵
$
H=\left[\begin{matrix}
  A&C\\
  0&B
\end{matrix}\right]\quad A，B，m\times n阶可逆
$

$
H^{-1}=\left[\begin{matrix}
  A^{-1}&-A^{-1}CB^{-1}\\
  0&B^{-1}
\end{matrix}\right]
$

$
\left[\begin{matrix}
  A&\\
  &B&\\
  &&C
\end{matrix}\right]^{-1}=\left[\begin{matrix}
  A^{-1}&&\\
  &B^{-1}&\\
  &&C^{-1}
\end{matrix}\right]\quad
$

## 初等变换
### 行(列)变换
:::tip 以下内容列同理
:::
$行变换\begin{cases}
  交换两行\left(\begin{matrix}
  1&1&1\\
  2&2&2\\
  3&3&3
  \end{matrix}\right)\rightarrow\left(\begin{matrix}
  2&2&2\\
  1&1&1\\
  3&3&3
  \end{matrix}\right)\\
  用k(k\neq 0)乘某一行\left(\begin{matrix}
  1&1&1\\
  2&2&2\\
  3&3&3
  \end{matrix}\right)\xrightarrow{第一行乘6}\left(\begin{matrix}
  6&6&6\\
  2&2&2\\
  3&3&3
  \end{matrix}\right)\\
  某一行的l倍加到另一行\left(\begin{matrix}
  1&1&1\\
  2&2&2\\
  3&3&3
  \end{matrix}\right)\xrightarrow{第一行-3倍加到第三行}\left(\begin{matrix}
  1&1&1\\
  2&2&2\\
  0&0&0
  \end{matrix}\right)
\end{cases}$

:::tip 本质
对行进行初等变换，用箭头连接而不是等号，因为本质是对矩阵的变化
:::

:::tip 定理
任何矩阵都可通过初等变换化为标准形
:::

### 等价
#### 定义
A矩阵经初等变换得到B矩阵，则两个矩阵等价

$记作A\cong B$

#### 性质
1. $反身性：A\cong A$

2. $对称性：A\cong B\rightarrow B\cong A$

3. $A\cong B，B\cong C\rightarrow A\cong C$

4. $任何矩阵\cong 标准形$

### 初等方阵
:::tip 定义
对E做一次初等变换得到的矩阵

1. 初等方阵均可逆
2. 其逆矩阵也是初等方阵
3. 其转置矩阵也是初等方阵
:::

1. 行变换初等方阵

:::info 行列式值
$|E(i,j)|=-1$
:::

:::info 逆矩阵
$E^{-1}(i,j)=E(i,j)$
:::

2. k乘以某一行初等方阵

:::info 行列式值
$|E(i(k))|=k$
:::

:::info 逆矩阵
$E^{-1}(i(k))=E(i(\frac{1}{k}))$
:::

3. 某一行的l倍加到另一行初等方阵

:::info 行列式
$|E(i,j(l))|=1$
:::

:::info 逆矩阵
$E^{-1}(i,j(l))=E(i,j(-l))$
:::


:::tip 定理
1. 用初等方阵**左乘**一个矩阵A，相当于对A实施相同的**行变换**

2. 用初等方阵**右乘**一个矩阵A，相当于对A实施相同的**列变换**

3. 对于任意A，存在初等矩阵P...，Q...，使得

$P_s\cdots P_1AQ_1\cdots Q_t为标准形$

4. $A可逆\iff A的标准形为E$

5. $A可逆\iff A=P_1\cdots P_s$
:::

:::tip 推论
1. $A，B等价\iff存在可逆初等矩阵P，Q，使得PAQ=B$
:::

### 求逆矩阵
#### 初等行变换法
$Q_1Q_2\cdots Q_tA=E$

$Q_1Q_2\cdots Q_tE=A^{-1}$

$可知，(A,E)\xrightarrow{只做行变换}(E,A^{-1})$

例子：

$
(A,E)=\left(
  \begin{matrix}
  1&0&1&\vdots&1&0&0\\
  2&1&0&\vdots&0&1&0\\
  -3&2&-5&\vdots&0&0&1
  \end{matrix}
\right)
$

$
\rightarrow\left(
  \begin{matrix}
  1&0&1&1&0&0\\
  0&1&-2&-2&1&0\\
  0&2&-2&3&0&1
  \end{matrix}
\right)
$

$
\rightarrow\left(
  \begin{matrix}
  1&0&1&1&0&0\\
  0&1&-2&-2&1&0\\
  0&0&2&7&-2&1
  \end{matrix}
\right)
$

$
\rightarrow\left(
  \begin{matrix}
  1&0&0&-\frac{5}{2}&1&-\frac{1}{2}\\
  0&1&0&5&-1&1\\
  0&0&2&7&-2&1
  \end{matrix}
\right)
$

$
\rightarrow\left(
  \begin{matrix}
  1&0&0&\vdots&-\frac{5}{2}&1&-\frac{1}{2}\\
  0&1&0&\vdots&5&-1&1\\
  0&0&1&\vdots&\frac{7}{2}&-1&\frac{1}{2}
  \end{matrix}
\right)
$

$
A^{-1}=\left(
  \begin{matrix}
  -\frac{5}{2}&1&-\frac{1}{2}\\
  5&-1&1\\
  \frac{7}{2}&-1&\frac{1}{2}
  \end{matrix}
\right)
$