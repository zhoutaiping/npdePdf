# NODE-PDF

## 环境依赖

node > 10

## 安装 Node 依赖

```sh
# 在本项目目录运行
cnpm i
```

> Centos 依赖安装

```sh
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y

# 安装完毕更新 nss 库
yum update nss -y
```

## 运行

```sh
node start [url] [path]

# 示例
node start.js http://yundun.com/console-service-report-new/69b6a8a2fa1801e0948082d6e3cc8bb8 demo.pdf
```
