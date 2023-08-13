---
outline: deep
---
# 不定积分

## 性质
1. $(\int{f(x)}dx)'=f(x), d\int{f(x)}dx=f(x)dx$
   
2. $\int{f'(x)}dx=f(x)+C, \int df(x)=f(x)+C$
   
3. $\int{[f(x)\pm g(x)]}dx=\int{f(x)}dx\pm\int{g(x)}dx$
   
4. $\int{kf(x)}dx=k\int{f(x)}dx（k为常数）$

## 基本公式
1. $\int{0}dx=C$
   
2. $\int{x^a}dx=\frac{1}{a+1}x^{a+1}+C（a\neq-1）$
   
3. $\int{\frac{1}{x}}=\ln|x|+C$
   
4. $\int{a^x}dx=\frac{a^x}{\ln a}+C（a>0,a\neq1）$

5. $\int{e^x}dx=e^x+C$

6. $\int{\sin x}dx=-\cos x+C$
   
7. $\int{\cos x}dx=\sin x+C$
   
8. $\int{\sec^2x}dx=\tan x+C$
   
9.  $\int{\csc^2x}dx=-\cot x+C$
    
10. $\int{\sec x\tan x}dx=\sec x+C$
    
11. $\int{\csc x\cot x}dx=-\csc x+C$
    
12. $\int{\frac{1}{\sqrt{1-x^2}}}dx=\arcsin x+C$
    
13. $\int{\frac{1}{1+x^2}}dx=\arctan x+C$
    
14. $\int{\frac{dx}{\sqrt{a^2-x^2}}}=\arcsin\frac{x}{a}+C$
    
15. $\int{\frac{dx}{a^2+x^2}}=\frac{1}{a}\arctan\frac{x}{a}+C$
    
16. $\int{\frac{dx}{x^2-a^2}}=\frac{1}{2a}\ln|\frac{x-a}{x+a}|+C$
    
17. $\int{\frac{dx}{\sqrt{x^2+a^2}}}=\ln(x+\sqrt{x^2+a^2})+C$
    
18. $\int{\frac{dx}{\sqrt{x^2-a^2}}}=\ln|x+\sqrt{x^2-a^2}|+C$
    
19. $\int{\sec x}dx=\ln|\sec x+\tan x|+C$
    
20. $\int{\csc x}dx=-\ln|\csc x+\cot x|+C$

## 凑微分
### 定理
$设\int{f(u)}du=F(u)+C，u=\varphi(x)存在连续导数，则$

$\int{f[\varphi(x)]}\varphi'(x)dx=\int{f[\varphi(x)]}d\varphi(x)=F[\varphi(x)]+C$

### 例子
1. $\int{\sec^4x}dx$

$=\int{sec^2x}d(\tan x)$

$=\int{(\tan^2x+1)}d(\tan x)$
   
$=\frac{1}{3}\tan^3x+\tan x+C$

2. $\int{\frac{(\ln x+2)^2}{x}}dx$

$=\int{(\ln x+2)^2}d(\ln x+2)$

$=\frac{1}{3}(\ln x+2)^3+C$

## 换元法
### 定理(略)
### 常用的三种变量代换
1. $被积函数含有\sqrt{a^2-x^2}，令x=a\sin t(或a\cos t)$
2. $被积函数含有\sqrt{a^2+x^2}，令x=a\tan t$
3. $被积函数含有\sqrt{x^2-a^2}，令x=a\sec t$

### 例子
1. $\int{\frac{x^2}{\sqrt{a^2-x^2}}}dx$

:::tip 解题思路
$令x=a\sin t$

$则t=\arcsin\frac{x}{a}，\sin t=\frac{x}{a}，\cos t=\frac{\sqrt{a^2-x^2}}{a}$
:::

$=\int{\frac{a^2\sin^2t}{a\cos t}}\cdot a\cos tdt$

$=\frac{a^2}{2}\int{(1-\cos2t)}dt$

$=\frac{a^2}{2}(t-\frac{1}{2}\sin2t)+C$

$=\frac{a^2}{2}[\arcsin\frac{x}{a}-\frac{1}{2}(2\sin t\cos t)]$

$=\frac{a^2}{2}\arcsin\frac{x}{a}-\frac{x}{2}\sqrt{a^2-x^2}+C$

## 分部积分
### 公式
$\int{u}dv=uv-\int{v}du$
:::tip 
分部积分法比较适用于两类不同函数相乘。

分部积分法中u，v的选取，通常采用”反对幂指三“，**顺序靠后的和dx凑**。

其中：

反：反三角函数

对：对数函数

幂：幂函数

指：指数函数

三：三角函数
:::