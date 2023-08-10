# 导数

## 运算法则
加法法则
$[f(x)+g(x)]'=f'(x)+g'(x)$

减法法则
$[f(x)-g(x)]'=f'(x)-g'(x)$

乘法法则
$[f(x)g(x)]'=f'(x)g(x)+f(x)g'(x)$

除法法则
$[\frac{g(x)}{f(x)}]'=\frac{g'(x)f(x)-g(x)f'(x)}{(f(x))^2}$

## 基本求导公式
$(x^a)'=ax^{a-1}$

$(a^x)'=a^x\ln a$

$(e^x)'=e^x$

$(\log_ax)'=\frac{1}{x\ln a}$

$(\ln x)'=\frac{1}{x}$

$(\tan x)'=\sec^2x$

$(\arctan x)'=\frac{1}{1+x^2}$

$(\sin x)'=\cos x$

$(\arcsin x)'=\frac{1}{\sqrt{1-x^2}}$

$(\cos x)'=-\sin x$

$(\arccos x)'=-\frac{1}{\sqrt{1-x^2}}$

$(\cot x)'=-csc^2x$

$(arccot x)'=-\frac{1}{1+x^2}$

$(\sec x)'=\sec x\tan x$

$(\csc x)'=-\csc x\cot x$

## 参数方程求导
:::tip
求二阶导的时候，不是直接对一阶导求导就行，因为一阶导是对t求导，二阶导是对x求导，所以求二阶导，还需要在求一阶导的导数基础上再乘以dt/dx，又dt/dx等于dx/dt的倒数，所以二阶导数为一阶导数乘以x方程的导数的倒数
:::
例题：
$设函数y=y(x)由参数方程
\begin{cases}
    x=t-\ln(1+t)\\
    y=t^3+t^2
\end{cases}
所确定，则\frac{d^2y}{dx^2}=\underline{\qquad}$

$求一阶导：\frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}=\frac{3t^2+2t}{1-\frac{1}{1+t}}=3t^2+5t+2$

$求二阶导：\frac{d^2y}{dx^2}=(6t+5)\cdot\frac{dt}{dx}=(6t+5)\cdot(\frac{dx}{dt})^{-1}=(6t+5)\cdot(\frac{1+t}{t})=\frac{(6t+5)(t+1)}{t}$