# 生成随机密码
## 使用：
### 1.不传参

> 例如：https://webb-l.github.io/randomCode/
>> 默认生成密码长度为4，随机带有大小字母，数字，和符号。

### 2.传参

> 例如：https://webb-l.github.io/randomCode?l=16&t=0,1,2,3
> > 生成密码长度为16，随机带有大小字母，数字，和符号。

| 参数名 | 必填 | 描述               | 默认值                                                       |
| ------ | ---- | ------------------ | ------------------------------------------------------------ |
| l      | true | 需要生成密码的长度 |                                                              |
| t      | true | 密码类型<br />0 = A ~ Z<br />1 = a ~ z<br />2 = 0 ~ 9<br />3 = 符号           | 0,1,2,3 |

