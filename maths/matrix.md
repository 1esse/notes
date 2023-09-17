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

$等价：A、B同型，存在可逆矩阵P、Q，使得PAQ=B$

:::tip 提示
相似、正交相似、合同都是等价
:::

$相似：A、B同阶方阵，存在可逆矩阵P，使得P^{-1}AP=B$

$正交相似：A、B同阶方阵，存在可逆正交矩阵P，使得P^{-1}AP=B$

:::tip 提示
$因为正交矩阵P^T=P^{-1}，所以正交矩阵既相似也合同$
:::

$合同：A、B同阶方阵，存在可逆矩阵P，使得P^TAP=B$

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

### 逆矩阵
$
A=\left[\begin{matrix}
  B&0\\
  0&C
\end{matrix}\right]
$

$
A^{-1}=\left[\begin{matrix}
  B^{-1}&0\\
  0&C^{-1}
\end{matrix}\right]
$

$
B=\left[\begin{matrix}
  0&C\\
  D&0
\end{matrix}\right]
$

$
B^{-1}=\left[\begin{matrix}
  0&D^{-1}\\
  C^{-1}&0
\end{matrix}\right]
$

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

## 秩
非零子式的最高阶数，就是矩阵的**秩**

$记作r(A)=r，同时r(0)=0$

$若A_{m\times n}，0\leqslant r(A)\leqslant \min{\{m,n\}}$

$r(A)=r(A^T)$

$r(A)=min{\{m,n\}}满秩\begin{cases}
  r(A)=m，代表取了所有行，叫行满秩\\
  r(A)=n，代表取了所有列，叫列满秩
\end{cases}$

$r(A)<min{\{m,n\}}降秩$

$如果A是方阵，满秩\iff A可逆\iff |A|\neq 0$

$若A_{m\times n}，P为m阶可逆方阵，Q为n阶可逆方阵，则：$

$r(A)=r(PA)=r(AQ)=r(PAQ)$

$若AB=0，则r(A)+r(B)\leqslant n$

$r(AB)\leqslant \min{\{r(A),r(B)\}}$

$r(A^*)=\begin{cases}
  n\quad r(A)=n\\
  1\quad r(A)=n-1\\
  0\quad r(A)<n-1
\end{cases}$

### k阶子式
:::tip 定义
一个矩阵任取k行k列的行列式，就是k阶子式

$\left(
  \begin{matrix}
  1&1&1&1\\
  2&3&4&5\\
  6&7&8&9
  \end{matrix}
\right)\xrightarrow{取第1,2行，第3,4列}\left|
  \begin{array}{cccc}
    1&1\\
    4&5
  \end{array}
\right|$
:::

### 阶梯形✨
1. 若有零行，零行在非零行的下边
2. 左起的首非零元素左边零的个数随行数增加而严格增加 
3. $r(A)=非零行的行数$
4. 初等变换不改变矩阵的秩，所以求秩时一般先用初等（行）变换化成阶梯型

#### 行简化阶梯型✨✨✨
1. 非零行的首非零元素是1
2. 首非零元素所在列的其余元素是0

## 向量
$由n个数a_1\cdots a_n组成的有序数组(a_1,a_2\,\cdots,a_n)$

### 向量间的线性关系
#### 线性组合
$\beta,\alpha_1,\alpha_2\cdots\alpha_n是m维向量$

$若存在K_1,K_2\cdots K_n，使$

$\beta=K_1\alpha_1+K_2\alpha_2+\cdots+K_n\alpha_n$

1. 零向量可有任意向量组表示

$0 = 0\times\alpha_1+0\times\alpha_2+\cdots+0\times\alpha_n$

2. 向量组中任一向量可由向量组表示

$\alpha_1 = 1\times\alpha_1+0\times\alpha_2+\cdots+0\times\alpha_n$

3. $任一向量可由\epsilon_1=(1,0,\cdots,0)，\epsilon_2=(0,1,\cdots,0)，\epsilon_n=(0,0,\cdots,1)表示$

$(1,2,3)=1\times(1,0,0)+2\times(0,1,0)+3\times(0,0,1)$

4. $\beta=(-3,2,-4), \alpha_1=(1,0,1), \alpha_2(2,1,0), \alpha_3=(-1,1,-2)$

$解：设\beta=K_1\alpha_1+K_2\alpha_2+K_3\alpha_3$

$(-3,2,-4)=K_1(1,0,1)+K_2(2,1,0)+K_3(-1,1,-2)$

$\begin{cases}
  K_1+2K_2-K_3=-3\\
  K_2+K_3=2\\
  K_1-2K_3=-4
\end{cases}\begin{cases}
  K_1=2\\
  K_2=-1\\
  K_3=3
\end{cases}$

$\beta=2\alpha_1-\alpha_2+3\alpha_3$

:::tip
$是否线性组合\iff方程组有解$
:::

#### 向量组的等价
:::tip 定义
两个向量组可以相互表示，记作

$\{\alpha_1\cdots\alpha_m\}\cong\{\beta1\cdots\beta_n\}$
:::
1. $反身性：\{\alpha_1\cdots\alpha_m\}\cong\{\alpha_1\cdots\alpha_m\}$
2. $对称性：\{\alpha_1\cdots\alpha_m\}\cong\{\beta1\cdots\beta_n\}\quad\{\beta1\cdots\beta_n\}\cong\{\alpha_1\cdots\alpha_m\}$
3. $传递性：\{\alpha_1\cdots\alpha_m\}\cong\{\beta1\cdots\beta_n\}\quad\{\beta1\cdots\beta_n\}\cong\{\gamma_1\cdots\gamma_s\}\quad\{\alpha_1\cdots\alpha_m\}\cong\{\gamma_1\cdots\gamma_s\}$

### 线性相关与线性无关
:::tip 线性相关定义
$\alpha_1\cdots\alpha_n是n个m维向量，$

$若存在一组不全为0的K_1\cdots K_n，存在$

$K_1\alpha_1+K_2\alpha_2+\cdots+K_n\alpha_n=0$

$\alpha_1\cdots\alpha_n是线性相关$
:::

:::danger 线性无关定义
$\begin{cases}
  1.不是线性相关\\
  2.找不到一组不全为0的K_1\cdots K_n使(*)成立\\
  3.(*)成立，K_1\cdots K_n必全为0
\end{cases}$
:::

**结论**
1. 向量组中两向量成比例，则此向量组一定线性相关
2. 含零向量的任意向量组必线性相关
3. 一个零向量必线性相关
4. 一个非零向量必线性无关
5. $一个向量\alpha线性相关\iff\alpha=0$
6. $部分组\alpha_1\cdots\alpha_r线性相关，则整体组\alpha_1\cdots\alpha_r\alpha_{r+1}\cdots\alpha_s线性相关$
7. $整体组线性无关，则部分组线性无关$
8. 线性无关的向量组，接长向量组也线性无关。线性相关的向量组，截短向量组也线性相关
9. $n个n维向量（向量个数=向量维数），行列式D\neq 0\iff线性无关，D=0\iff线性相关$

**举例**
$求(1,0,-1),(-1,-1,2),(2,3,-5)是否线性相关$

$解：设K_1,K_2,K_3，K_1\alpha_1+K_2\alpha_2+K_3\alpha_3=0$

$K_1(1,0,-1)+K_2(-1,-1,2)+K_3(2,3,-5)=0$

$\begin{cases}
  K_1-K_2+2K_3=0\\
  -K_2+3K_3=0\\
  -K_1+2K_2-5K_3=0
\end{cases}\begin{cases}
  K_1=K_2\\
  K_2=3K_3
\end{cases}\rightarrow K_3=1,K_1=1,K_2=3$

#### 定理
1. $\alpha_1\cdots\alpha_s线性相关\iff至少一个向量可由其余向量表示$
2. $\alpha_1\cdots\alpha_s线性无关，\alpha_1\cdots\alpha_s\beta线性相关，\beta可由\alpha_1\cdots\alpha_s唯一表示$
3. $\alpha_1\cdots\alpha_s线性无关，可由\beta_1\cdots\beta_t表示，则s\leqslant t$

#### 推论
1. $m>n，m个n维向量线性相关，n+1个n维向量线性相关$
2. $两个等价的线性无关组含向量的个数是相同的$

### 向量组的秩
#### 定义
极大线性无关组所含向量的个数，记作
$r(\alpha_1\alpha_2\cdots\alpha_n)$

**注**
1. $0\leqslant r(\alpha_1\alpha_2\cdots\alpha_n)\leqslant \min{\{向量的个数，维数\}}$
2. $\alpha_1\alpha_2\cdots\alpha_n无关\iff r=n$
3. $\alpha_1\alpha_2\cdots\alpha_n相关\iff r<n$

#### 极大线性无关组
:::tip 定义
$\alpha_1\alpha_2\alpha_3\alpha_4\alpha_5的部分组\alpha_1\alpha_2$
1. $\alpha_1\alpha_2线性无关$
2. $每个向量都可由\alpha_1\alpha_2表示$
:::

求向量组的极大线性无关组
1. 不管向量组是行或列，均按列构成矩阵
2. 只做初等行变换化成行简化阶梯型
3. 首非零元所在列做极大线性无关组
4. 其余向量表示系数直接写出来

$\left[\begin{matrix}
  1&2&-2&3\\
  -2&-4&4&-6\\
  2&8&-2&0\\
  -1&0&3&-6
\end{matrix}\right]\xrightarrow{初等行变换}\left[\begin{matrix}
  1&0&-3&6\\
  0&1&\frac{1}{2}&-\frac{3}{2}\\
  0&0&0&0\\
  0&0&0&0
\end{matrix}\right]$

$\alpha_1, \alpha_2是极大线性无关组$

$\alpha_3=-3\alpha_1+\frac{1}{2}\alpha_2$

$\alpha_4=6\alpha_1-\frac{3}{2}\alpha_2$

### 行秩与列秩
向量分割矩阵的行与列形成的向量组。

**行秩=列秩=矩阵的秩r(A)**

$r(AB)\leqslant\min{\{r(A),r(B)\}}$

**初等行变换不改变矩阵列向量组的线性关系**

## 线性方程组
### 有解判定
$\begin{cases}
  x_1+x_2+x_3=1\\
  x_1-x_2-x_3=-3\\
  2x_1+9x_2+10x_3=11
\end{cases}$

$\xrightarrow{系数矩阵}A=\left(\begin{matrix}
  1&1&1\\
  1&-1&-1\\
  2&9&10
\end{matrix}\right)$

$\xrightarrow{增广系数矩阵}\overline{A}=\left(\begin{matrix}
  1&1&1&\vdots&1\\
  1&-1&-1&\vdots&-3\\
  2&9&10&\vdots&11
\end{matrix}\right)$

$\left(\begin{matrix}
  1&0&0&\vdots&1\\
  0&1&0&\vdots&2\\
  0&0&1&\vdots&3
\end{matrix}\right)\begin{cases}
  x_1=1\\
  x_2=2\\
  x_3=3
\end{cases}，唯一解，r(A)=r(\overline{A})=3=未知量个数$

$\left(\begin{matrix}
  1&0&1&\vdots&5\\
  0&1&1&\vdots&9\\
  0&0&0&\vdots&0
\end{matrix}\right)\begin{cases}
  x_1=5-x_3\\
  x_2=9-x_3
\end{cases}，无穷解，r(A)=r(\overline{A})=2<3$

$\left(\begin{matrix}
  1&0&1&\vdots&3\\
  0&1&0&\vdots&4\\
  0&0&0&\vdots&1
\end{matrix}\right)\begin{cases}
  x_1+x_3=3\\
  x_2=4\\
  0=1
\end{cases}，无解，r(A)=2\neq r(\overline{A})=3$

**结论**
1. $当r(A)=r(\overline{A})，有解\begin{cases}
  r(A)=r(\overline{A})=n，唯一解\\
  r(A)=r(\overline{A})<n，无穷多解
\end{cases}$

2. $当r(A)\neq r(\overline{A})，无解$ 

3. 其中，m为方程个数，n为未知量个数

**解题步骤**
1. $写出\overline{A}$
2. $只做初等行变换，化为阶梯形$
3. $看r(A)和r(\overline{A})是否相等$
4. 化为行简化阶梯形，不管零行，非零行的首非零元(1)留在左边，其余变量挪到右边，得一般解。如果化简化阶梯形的时候带参数，参数不能放分目，因为不能确定参数是否为0。

### 齐次线性方程组
方程等号右边都是0，就是齐次方程。（齐次方程一定有解，至少有零解）

$r(A)=r(\overline{A})有解\begin{cases}
  =n，唯一解\\
  <n，无穷多解
\end{cases}$

1. $r(A)=r(\overline{A})=n，有唯一的零解\iff r(A)=n$
2. $有非零解\iff r(A)<n$
3. $方程个数m<未知量个数n，有非零解。r(A)\leqslant\min{\{m,n\}}=m<n$
4. $方程个数=未知数个数，有非零解\iff |A|=0$
5. $AB=0,r(A)+r(B)\leqslant n$

### 方程组解的结构
#### 齐次
1. $\eta_1\cdots\eta_s线性无关$
2. $任何解都可由\eta_1\cdots\eta_s表示$
3. $解题个数n-r(A)$

**解题例子**
$A=()\xrightarrow{初等行变换}\left(\begin{matrix}
  1&0&-\frac{9}{4}&-\frac{3}{4}&\frac{1}{4}\\
  0&1&\frac{3}{4}&-\frac{7}{4}&\frac{5}{4}\\
  0&0&0&0&0
\end{matrix}\right)\begin{cases}
  x_1=\frac{9}{4}x_3+\frac{3}{4}x_4-\frac{1}{4}x_5\\
  x_2=-\frac{3}{4}x_3+\frac{7}{4}x_4-\frac{5}{4}x_5
\end{cases}$

$x_3,x_4,x_5是自由未知量$

$令\left(\begin{matrix}
  x_3\\
  x_4\\
  x_5
\end{matrix}\right)取\left(\begin{matrix}
  1\\
  0\\
  0
\end{matrix}\right),\left(\begin{matrix}
  0\\
  1\\
  0
\end{matrix}\right),\left(\begin{matrix}
  0\\
  0\\
  1
\end{matrix}\right)$

$\eta_1=\left(\begin{matrix}
  \frac{9}{4}\\
  -\frac{3}{4}\\
  1\\
  0\\
  0
\end{matrix}\right),\eta_2=\left(\begin{matrix}
  \frac{3}{4}\\
  \frac{7}{4}\\
  0\\
  1\\
  0
\end{matrix}\right),\eta_3=\left(\begin{matrix}
  -\frac{1}{4}\\
  -\frac{5}{4}\\
  0\\
  0\\
  1
\end{matrix}\right)$

$\eta_1,\eta_2,\eta3是基础解系$

#### 非齐次
1. $\alpha_1,\alpha_2是Ax=b的解，\alpha_1-\alpha_2是Ax=0的解$
2. $\alpha_0是Ax=b的解，\eta是Ax=0的解，\alpha_0+\eta是Ax=b的解$
3. $\alpha_0是Ax=b的一个解（特解），\eta是Ax=0的通解$

$\eta=C_1\eta_1+C_2\eta_2+\cdots+C_{n-r}\eta_{n-r}$

$\eta_1,\eta_2,\cdots,\eta_{n-r}是Ax=0基础解系$

$\alpha_0+C_1\eta_1+C_2\eta_2+\cdots+C_{n-r}\eta_{n-r}是Ax=b的通解$

**解题例子**
1. $写出\overline{A}，只做初等行变换化为行简化阶梯形$
2. $找出Ax=b的特解（自由未知量均取0）$
3. $找出Ax=0的基础解系$

$\overline{A}=\left(\begin{matrix}
  1&5&-1&-1&\vdots&-1\\
  1&-2&1&3&\vdots&3\\
  3&8&-1&1&\vdots&1\\
  1&-9&3&7&\vdots&7
\end{matrix}\right)\xrightarrow{行}\left(\begin{matrix}
  1&0&\frac{3}{7}&\frac{13}{7}&\vdots&\frac{13}{7}\\
  0&1&-\frac{2}{7}&-\frac{4}{7}&\vdots&-\frac{4}{7}\\
  0&0&0&0&\vdots&0\\
  0&0&0&0&\vdots&0\\
\end{matrix}\right)\begin{cases}
  x_1=\frac{13}{7}-\frac{3}{7}x_3-\frac{13}{7}x_4\\
  x_2=-\frac{4}{7}+\frac{2}{7}x_3-\frac{4}{7}x_4\\
\end{cases}$

$x_3,x_4为自由未知量$

$取\left(\begin{matrix}
  x_3\\
  x_4
\end{matrix}\right)=\left(\begin{matrix}
  0\\
  0
\end{matrix}\right),\alpha_0=\left(\begin{matrix}
  \frac{13}{7}\\
  -\frac{4}{7}\\
  0\\
  0
\end{matrix}\right)是Ax=b的一个特解$

$导出组的同解方程组为\begin{cases}
  x_1=-\frac{3}{7}x_3-\frac{13}{7}x_4\\
  x_2=\frac{2}{7}x_3-\frac{4}{7}x_4\\
\end{cases}$

$x_3,x_4为自由未知量$

$令\left(\begin{matrix}
  x_3\\
  x_4
\end{matrix}\right)取\left(\begin{matrix}
  1\\
  0
\end{matrix}\right)\left(\begin{matrix}
  0\\
  1
\end{matrix}\right)$

$\eta_1=\left(\begin{matrix}
  -\frac{3}{7}\\
  \frac{2}{7}\\
  1\\
  0
\end{matrix}\right),\eta_2=\left(\begin{matrix}
  -\frac{13}{7}\\
  \frac{4}{7}\\
  0\\
  1
\end{matrix}\right)$

$通解为\alpha_0+C_1\eta_1+C_2\eta_2（代入即可）$

## 特征值与特征向量
:::tip 定义
$A为n阶方阵，若存在数\lambda，非零列向量\alpha，使得A\alpha=\lambda\alpha$

$则称\lambda为特征值，\alpha为对应于\lambda的特征向量$

$\lambda可以为0，\alpha不能为0$
:::

1. $\lambda是A的特征值，\alpha是\lambda对应的特征向量，C\alpha也是\lambda的特征向量(C\neq 0)$
2. $\alpha_1,\alpha_2是\lambda的特征向量，C_1\alpha_1+C_2\alpha_2是\lambda的特征向量$
3. $计算|\lambda E-A|=0的行列式求出\lambda，代入(\lambda E-A)\alpha=0求出特征向量$

**解题例子**

$A=\left(\begin{matrix}
  1&-2&2\\
  -2&-2&4\\
  2&4&-2
\end{matrix}\right)$

$|\lambda E-A|=\left|\begin{array}{cccc}
  \lambda-1&2&-2\\
  2&\lambda+2&-4\\
  -2&-4&\lambda+2
\end{array}\right|$

$=\left|\begin{array}{cccc}
  \lambda-1&2&-2\\
  2&\lambda+2&-4\\
  -2&\lambda-2&\lambda-2
\end{array}\right|$

$=(\lambda-2)\left|\begin{array}{cccc}
  \lambda-1&2&-2\\
  2&\lambda+2&-4\\
  0&1&1
\end{array}\right|$

$=(\lambda-2)(\lambda-2)(\lambda+7)$

$\lambda_1=-7,\lambda_2=\lambda_3=2$

$1) \lambda_1=-7, \lambda E-A=\left(\begin{matrix}
  -8&2&-2\\
  2&-5&-4\\
  -2&-4&-5
\end{matrix}\right)\xrightarrow{行简化}()$

$同解方程组\begin{cases}
  x_1=...\\
  x_2=...\\
  \cdots
\end{cases}，x_1,x_2为自由未知量$

$\cdots\cdots\cdots$

$解出C_1\left(\begin{cases}
  1\\
  2\\
  -2
\end{cases}\right)C_1\neq 0$

$\cdots\cdots\cdots$

### 基本性质
1. $A和A^T有相同的特征值✨✨$
2. $n个特征值\lambda_1,\lambda_2,\cdots,\lambda_n✨✨✨$

$\sum_{i=1}^{n}\lambda_i=\sum_{i=1}^{n}a_{ii}$

所有特征值之和等于主对角线之和，叫迹tr(A)

$\lambda_1\lambda_2\cdots\lambda_n=|A|$

特征值有一个为0，A不可逆

3. $互不相同的特征值\lambda_1,\lambda_2,\cdots,\lambda_m对应的特征向量\alpha_1,\alpha_2,\cdots,\alpha_m线性无关$

4. $k\lambda是kA的特征值，\lambda^2是A^2的特征值$

5. $\frac{1}{\lambda}是A^{-1}的特征值，\frac{1}{\lambda}|A|是A^*的特征值$

## 相似矩阵
:::tip 定义
$A,B为n阶方阵，存在n阶可逆方阵P，使得P^{-1}AP=B，A\sim B$
:::

1. $反身性：A\sim A$
2. $对称性：A\sim B\rightarrow B\sim A$
3. $传递性：A\sim B，B\sim C\rightarrow A\sim C$

### 性质
1. $A\sim B, A,B有相同的特征值，|A|=|B|，tr(A)=tr(B)$
2. $A\sim B, A可逆\iff B可逆，A^{-1}\sim B^{-1}$
3. $A\sim B, A^m\sim B^m$

### 与对角形相似的条件
:::tip 定理
$A\sim \Lambda\iff A有n个线性无关的特征向量$

$A\sim \Lambda\iff r_i重特征根，基础解系有r_i个解$

推论

$A有n个互异的特征值，A\sim \Lambda=\left(
  \begin{matrix}
    \lambda_1&&\\
    &\cdots&\\
    &&\lambda_n
  \end{matrix}
\right)$
:::

### 实对称矩阵的对角化
#### 内积
$\alpha=\left(\begin{matrix}
  a_1\\
  a_2\\
  \cdots\\
  a_n
\end{matrix}\right),\beta=\left(\begin{matrix}
  b_1\\
  b_2\\
  \cdots\\
  b_n
\end{matrix}\right),(\alpha,\beta)=a_1b_1+a_2b_2+\cdots+a_nb_n$

$=[列]\alpha^T\beta=[行]\alpha\beta^T$

1. $(\alpha,\alpha)\geqslant 0$
2. $(\alpha,\beta)=(\beta,\alpha)$
3. $(k\alpha,\beta)=k(\alpha,\beta)$
4. $(k\alpha,k\beta)=k^2(\alpha,\beta)$
5. $(\alpha+\beta,\gamma)=(\alpha,\gamma)+(\beta,\gamma)$

#### 长度(范数，模)
$||\alpha||=\sqrt{(\alpha,\alpha)}$

$||\alpha||^2=(\alpha,\alpha)$

$单位向量：||\alpha||=1(\frac{1}{||\alpha||}\alpha=1)$

性质
1. $||\alpha||\geqslant 0$
2. $||k\alpha||=|k|\cdot||\alpha||$
3. $|(\alpha,\beta)|\leqslant||\alpha||\cdot||\beta||$
4. $||\alpha+\beta||\leqslant||\alpha||+||\beta||$

#### 正交(垂直)
$(\alpha,\beta)=0,\alpha\perp\beta$

正交向量组（不含零向量）：

$\alpha_1\cdots\alpha_n两两正交$

标准正交向量组：
$\begin{cases}
  (\alpha_i,\alpha_i)=1\\
  (\alpha_i,\alpha_j)=0\\
\end{cases}$

:::tip 定理
$\alpha_1\cdots\alpha_s为正交向量组，\alpha_1\cdots\alpha_s线性无关$
:::

#### 施密特正交化
$给一组线性无关的\alpha_1\cdots\alpha_s$

$求与之等价的正交向量组\beta_1\cdots\beta_s$

$\beta_1=\alpha_1$

$\beta_2=\alpha_2-\frac{(\alpha_2,\beta_1)}{\beta_1,\beta_1}\beta_1$

$\beta_3=\alpha_3-\frac{(\alpha_3,\beta_1)}{\beta_1,\beta_1}\beta_1-\frac{(\alpha_3,\beta_2)}{\beta_2,\beta_2}\beta_2$

 
#### 正交矩阵
$A为n阶方阵，A^TA=E$
1. $A正交：|A|=1或-1，|A^T||A|=1，|A|^2=1$
2. $A正交：A^{-1}=A^T，且A^{-1}和A^T均为正交矩阵$
3. $A,B正交：AB也正交$
4. $A正交，\alpha,\beta为列向量：(A\alpha.A\beta)=(\alpha,\beta)$

:::tip 定理
$A正交\iff A的列(行)向量组是标准正交向量组$
:::

**实对称矩阵定理**
实对称矩阵A的不同特征值对应的特征向量正交

## 二次型
1. $二次型\rightarrow矩阵表达式$
2. 
$x_1^2+2x_1x_2+x_2^2-x_2x_3+2x_3^2-2x_1x_3$

$(x_1,x_2,x_3)\left(\begin{matrix}
  1&1&-1\\
  1&1&-\frac{1}{2}\\
  -1&-\frac{1}{2}&2
\end{matrix}\right)\left(\begin{matrix}
  x_1\\
  x_2\\
  x_3
\end{matrix}\right)$

转化方法：
1. 平方项的系数直接做主对角元素
2. 交叉项的系数除以2，放到两个对称的相应位置上

### 标准形
只有平方项的二次型就是标准形。

### 线性替换
X=CY

### 合同
:::tip 定义
$A,B为n阶方阵，存在可逆矩阵C，使得C^TAC=B$
:::

1. $反身性：A\simeq A$
2. $对称性：A\simeq B\rightarrow B\simeq A$
3. $传递性：A\simeq B, B\simeq C\rightarrow A\simeq C$
4. $A\simeq B，则r(A)=r(B)$
5. $A\simeq B，则A^T=A\iff B^T=B$
6. $A\simeq B，A,B可逆，A^{-1}\simeq B^{-1}$
7. $A\simeq B，则A^T\simeq B^T$

### 化二次型为标准形
#### 配方法
$先配x_1，再配x_2....$

如果题目给的都是交叉性，需要进行变量替换，一般是：
$\begin{cases}
  x_1=y_1-y_2\\
  x_2=y_1+y_2\\
  x_3=y_3\\
  x_4=y_4\\
  \cdots
\end{cases}$

$2x_1x_2-4x_1x_3+10x_2x_3\rightarrow 2y_1^2-2y_2^2+6y_1y_3+14y_2y_3$

#### 初等变换法
1. 对A，E做同样的初等列变换
2. 只对A做相应的初等行变换
3. A化成对角形矩阵之时，E化成的就是C

### 规范形
$y_1^2+\cdots+y_p^2-y_{p+1}^2-\cdots y_r^2$

r(A)=1或-1的总数

正项数：正惯性指数

合同：正惯性指数与负惯性指数相同


# 我累了，毁灭吧😭