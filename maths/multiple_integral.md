---
outline: deep
---
# 重积分
## 计算
### 利用直角坐标计算
1. 先y后x
   
   $积分区域D可以用a\leqslant x\leqslant b，\varphi_1(x)\leqslant y\leqslant \varphi_2(x)表示，$

   $\iint_D f(x,y)\,d\sigma=\int_a^b dx\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)dy$

2. 先x后y
   
   $积分区域D可以用c\leqslant y\leqslant d，\varphi_1(y)\leqslant x\leqslant \varphi_2(y)表示，$

   $\iint_D f(x,y)\,d\sigma=\int_a^b dy\int_{\varphi_1(y)}^{\varphi_2(y)}f(x,y)dx$

### 利用极坐标计算
$先r后\theta$

$积分区域D可以用\alpha\leqslant\theta\leqslant\beta，\varphi_1(\theta)\leqslant r\leqslant \varphi_2(\theta)表示，$

$\iint_D f(x,y)\,d\sigma=\int_\alpha^\beta d\theta\int_{\varphi_1(\theta)}^{\varphi_2(\theta)}f(r\cos\theta,r\sin\theta)rdr$
