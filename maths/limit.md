---
outline: deep
---
# 极限

## 极限运算法则
::: tip
可以通过四则运算拆解并简化极限，通常有些极限拆解出来后可以直接代入变量求值。
:::
$设\lim f(x) = A，\lim g(x) = B，则$

$\Longrightarrow \lim f(x) \pm g(x) = A \pm B$

$\Longrightarrow \lim f(x)\cdot g(x) = A\cdot B$

$\Longrightarrow \lim cf(x) = cA$

$\Longrightarrow \lim \frac{f(x)}{g(x)} = \frac{A}{B}(B\neq 0)$

## 常见的等价无穷小
::: tip
等价无穷小一般只能在乘除中替换，在加减中替换有时会出错。
:::
$当x\rightarrow 0时，$

$\sin x\sim\tan x\sim\arcsin x\sim\arctan x\sim x$

$\ln(1+x)\sim e^x-1\sim\ln(x+\sqrt{1+x^2})\sim x$

$a^x-1\sim x\ln a(a>0，a\neq1)$

$\log_a(1+x)\sim\frac{x}{\ln a}(a>0，a\neq1)$

$1-\cos x\sim x-\ln(1+x)\sim\frac{1}{2}x^2$

$(1+\beta x)^\alpha-1\sim\alpha\beta x$

$(1+x)^\alpha-1\sim\alpha x$

$\tan x-x\sim x-\arctan x\sim\frac{1}{3}x^3$

$x-\sin x\sim\arcsin x-x\sim\frac{1}{6}x^3$

## 常用的泰勒公式（麦克劳林公式）
::: tip
有时候用泰勒公式展开会方便计算，特别是分母为x的幂的时候。展开后，精度大于x的幂的都不需要存在。
:::
$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+...+\frac{x^n}{n!}+o(x^n)$

$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}+...+(-1)^{n-1}\frac{x^{2n-1}}{(2n-1)!}+o(x^{2n-1})$

$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}+...+(-1)^n\frac{x^{2n}}{(2n)!}+o(x^{2n})$

$\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}+...+(-1)^{n-1}\frac{x^n}{n}+o(x^n)$

$(1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+...+\frac{a(a-1)...(a-n+1)}{n!}x^n+o(x^n)$

## 求函数的渐近线

### 铅直渐近线
找出函数的间断点，对x趋于函数每个间断点求极限，如果极限为无穷，则该间断点为函数的铅直渐近线。

### 水平渐近线
$对于x\rightarrow\pm\infty，f(x)\rightarrow A(B)，则y=A(B)为函数的水平渐近线$

### 斜渐近线
1. 求斜率：$k=\lim_{x\rightarrow\infty}\frac{f(x)}{x}$
   
2. 求截距：$b=\lim_{x\rightarrow\infty}[f(x)-kx]$
   
3. 得到斜渐近线$y=kx+b$