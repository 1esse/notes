# 多元函数

## 偏导数
$设z=f(x,y)$

1. $对x偏导\begin{cases}
  y固定在y_0\\
  x在x_0处有\Delta x\\
  \lim_{\Delta x\to0}\frac{f(x_0+\Delta x,y_0)-f(x_0,y_0)}{\Delta x}
\end{cases}$

$若极限存在，则称这个极限值为函数z在P_0(x_0,y_0)处对x的偏导数$

$记为\frac{\partial z}{\partial x}|_{\begin{align}
  x=x_0\\
  y=y_0
\end{align}}或f_x'(x_0,y_0)$

2. $对y偏导，把对x换成对y$
   
$记为\frac{\partial z}{\partial y}|_{\begin{align}
  x=x_0\\
  y=y_0
\end{align}}或f_y'(x_0,y_0)$

## 二阶偏导数
1. $\frac{\partial}{\partial x}(\frac{\partial z}{\partial x})=\frac{\partial^2z}{\partial x^2}或f_{xx}''$
   
2. $\frac{\partial}{\partial y}(\frac{\partial z}{\partial x})=\frac{\partial^2z}{\partial x\partial y}或f_{xy}''$

3. $\frac{\partial}{\partial x}(\frac{\partial z}{\partial y})=\frac{\partial^2z}{\partial y\partial x}或f_{yx}''$

4. $\frac{\partial}{\partial y}(\frac{\partial z}{\partial y})=\frac{\partial^2z}{\partial y^2}或f_{yy}''$

**复合函数微分法**

$设函数z=f[u(x,y),v(x,y)]在点(x,y)处有两个偏导数存在，则$

1. $\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial x}$

2. $\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial y}$  

## 全微分
$dz=\frac{\partial z}{\partial x}dx+\frac{\partial z}{\partial y}dy$

**复合函数全微分**

$dz=\frac{\partial z}{\partial x}dx+\frac{\partial z}{\partial y}dy=\frac{\partial z}{\partial u}du+\frac{\partial z}{\partial v}dv$