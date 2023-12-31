---
outline: deep
---
# 微分方程
:::tip
通解：如果微分方程的解中含有任意常数，且任意常数的个数与微分方程的阶数相同，则称之为微分方程的通解。

特解：微分方程不含任意常数的解，称之为特解。
:::
## 可分离变量的方程
$能表示为g(y)dy=f(x)dx的方程，称为可分离变量的方程$

$求解的方法是两端积分 \int g(y)dy=\int f(x)dx$

## 齐次线性微分方程
$能化为\frac{dy}{dx}=\varphi(\frac{y}{x})的微分方程称为齐次微分方程$

求解齐次微分方程的一般方法：

$令u=\frac{y}{x}，则y'=u+xu'，从而将原方程化为xu'=\varphi(u)-u$

$再根据可分离变量方程求解$

## 非齐次线性微分方程
$非齐次线性微分方程的通解 y=齐次线性方程的通解+非齐次线性方程的特解$

## 一阶线性微分方程
### 非齐次
$形如y'+p(x)y=q(x)的方程称为一阶线性微分方程$

通解公式：

$y=e^{-\int p(x)dx}[\int q(x)e^{\int p(x)dx}dx+C]$

### 齐次
$形如y'+p(x)y=0的方程称为一阶线性微分方程$

通解公式：

$y=Ce^{-\int p(x)dx}$


## 常系数齐次线性微分方程
$一般形式：y''+py'+qy=0$

$其特征方程为r^2+pr+q=0，设r_1，r_2为该方程的两个根：$

1. $若r_1\neq r_2为两个不相等的实特征根，则方程的通解为$
   
   $y=C_1e^{r_1x}+C_2e^{r_2x}$

2. $若r_1=r_2为二重实特征根，则方程的通解为$
   
   $y=(C_1+C_2x)e^{r_1x}$

3. $若r_1=\alpha+i\beta，r_2=\alpha-i\beta为一对共轭复根，则方程的通解为$
   
   $y=e^{\alpha x}(C_1\cos{\beta x}+C_2\sin{\beta x})$