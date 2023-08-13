---
outline: deep
---
# 定积分

## 定义
$\int_0^1{f(x)}dx=\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_i)\Delta x_i=\lim_{n\to\infty}\frac{1}{n}\sum_{i=1}^{n}f(\frac{i}{n})$

## 不等式性质

1. $若区间[a,b]上f(x)\leqslant g(x)，则\int_a^b f(x)dx\leqslant \int_a^b g(x)dx$
   
2. $若M及m分别是f(x)在[a,b]上的最大值和最小值，则$
   
   $m(b-a)\leqslant\int_a^b f(x)dx\leqslant M(b-a)$

3. $|\int_a^b f(x)dx|\leqslant\int_a^b|f(x)|dx$

## 中值定理
1. $若f(x)在[a,b]上连续，则$
   
   $\int_a^b f(x)dx=f(\xi)(b-a)\qquad(a<\xi<b)$

   $常称\frac{1}{b-a}\int_a^b f(x)dx为函数y=f(x)在区间[a,b]上的平均值$

2. $若f(x),g(x)在[a,b]上连续，g(x)不变号，则$
   
   $\int_a^b f(x)g(x)dx=f(\xi)\int_a^b g(x)dx\qquad(a\leqslant \xi\leqslant b)$

## 变限积分求导
$如果f(x)为[a,b]上的连续函数，\varphi_1(x),\varphi_2(x)为可导函数，则$

$(\int_{\varphi_1(x)}^{\varphi_2(x)}f(t)dt)'=f[\varphi_2(x)]\cdot\varphi_2'(x)-f[\varphi_1(x)]\cdot\varphi_1'(x)$

## 常用计算方法
### 牛顿-莱布尼茨公式
$\int_a^b f(x)dx=F(x)|_a^b=F(b)-F(a)$

### 分部积分
$\int_a^b udv=uv|_a^b-\int_a^b vdu$

### 奇偶性和周期性
1. $设f(x)为[-a,a]上的连续函数(a>0)，则$
   
   $\int_{-a}^a f(x)dx=\begin{cases}
    0,\qquad\qquad\quad f(x)为奇函数时\\
    2\int_0^a f(x)dx,\quad f(x)为偶函数时
   \end{cases}$

2. $设f(x)是以T为周期的连续函数，则对任给数a，总有$
   
   $\int_a^{a+T}f(x)dx=\int_0^T f(x)dx$

## 定积分应用
:::tip 
定积分的应用，离不开建立“微元”的思想
:::
### 平面图形面积
$平面域D由曲线y=f(x),y=g(x),直线x=a,x=b围成，则D的面积为$

$S=\int_a^b[f(x)-g(x)]dx$

### 旋转体体积
$区域D由曲线y=f(x)和直线x=a，x=b及x轴围成，则$

$D绕x轴旋转一周的旋转体体积为 V_x=\pi\int_a^b f^2(x)dx$

$D绕y轴旋转一周的旋转体体积为 V_y=2\pi\int_a^b xf(x)dx$

### 弧长
1. $直角坐标：y=y(x),a\leqslant x\leqslant b\longrightarrow\int_a^b\sqrt{1+(y')^2}dx$
   
2. $参数方程：\begin{cases}
  x=x(t)\\
  y=y(t)
\end{cases}，\alpha\leqslant t\leqslant\beta\longrightarrow\int_\alpha^\beta\sqrt{(x')^2+(y')^2}dt$

1. $极坐标：r=r(\theta),\alpha\leqslant\theta\leqslant\beta\longrightarrow\int_\alpha^\beta\sqrt{r^2+(r')^2}d\theta$