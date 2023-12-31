# 树
树是n个结点的有限集合，n=0时，称为空树。在任意一棵非空树中应满足：
1. 有且仅有一个特定的根结点。
2. 当n>1时，其余结点可分为m(m>0)个互不相交的有限集合，其中每个集合本身又是一棵树，并且称为根结点的子树。

**属性描述**
1. 结点的层次（深度）：从上往下数
2. 结点的高度：从下往上数
3. 树的高度（深度）：总共多少层
4. 结点的度：有几个孩子（分支）
5. 树的度：各结点的度的最大值

**树的分类**
1. 有序树：逻辑上看，树中结点的各子树从左到右是**有次序**的，不能互换。
2. 无序树：逻辑上看，树中结点的各子树从左到右是**无次序**的，不能互换。
3. 森林：互不相交的树的集合

## 常考性质
1. 树的结点数=所有结点的总度数+1
2. 度为m的树与m叉树的区别：度为m的树表示树中至少有一个结点的度为m。m叉树表示树中所有结点的度都≤m。
3. $度为m的树或m叉树第i曾最多有m^{i-1}个结点(i≥1)$
4. $高度为h的m叉树最多有\frac{m^h-1}{m-1}个结点$
5. $高度为h的m叉树至少有h个结点，高度为h、度为m的树至少有h+m-1个结点$
6. $具有n个结点的m叉树最小高度为\log_m^(n(m-1)+1)$

## 二叉树
特点：
1. 每个结点最多两棵子树
2. 左右子树不能颠倒（二叉树是有序树）

### 满二叉树
$结点数：2^h-1$

特点：
1. 只有最后一层有叶子节点
2. 不存在度为1的结点
3. 按层序从1开始编号，结点i的左孩子为2i，右孩子为2i+1‘结点i的父结点为i/2
4. 满二叉树也是完全二叉树

### 完全二叉树
当且仅当其每个结点都与高度为h的满二叉树中编号为1~n的结点一一对应时，称为完全二叉树。

特点：
1. 只有最后两层可能有叶子节点
2. 最多只有一个度为1的结点
3. 按层序从1开始编号，结点i的左孩子为2i，右孩子为2i+1‘结点i的父结点为i/2
4. 完全二叉树不一定是满二叉树

### 二叉排序树
特点：
1. 左子树上所有结点的关键字均小于根节点的关键字
2. 右子树上所有结点的关键字均大于根结点的关键字
3. 左子树和右子树又各是一棵二叉排序树

### 平衡二叉树
特点：
1. 树上任意结点的左子树和右子树的深度之差不超过1

### 二叉树的层序遍历
1. 初始化一个辅助队列
2. 根结点入队
3. 若队列非空，则队头结点出队，访问该结点，并将其左、右孩子插入队尾（如果有的话）
4. 重复3直至队列空

### 遍历序列构造二叉树
**必须有中序队列参与**

1. 前序序列第一个结点为根结点
2. 后序序列最后一个结点为根结点
3. 层序序列第一个结点为根结点
4. 中序可以根据根结点位置区分左右子树

### 线索二叉树
设立线索，方便找到结点的前驱和后继。有中序线索化，前序线索化，后续线索化。
存储结构需要增加两个标志位，ltag和rtag，当tag值为1时表示lchild、rchild指针指向的是对应的前驱或后继，为0时表示指向左孩子或右孩子


### 常考性质
1. $设非空二叉树中度为0、1、2的结点个数分别为n_0,n_1,n_2，则n_0=n_2+1$

假设树中结点总数为n，则
1. $n=n_0+n_1+n_2$
2. $n=n_1+2n_2+1$
3. $联立1、2式，得出n_0=n_2+1$