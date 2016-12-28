# vw-shim
a shim for vw

`vw` is a good CSS3 feature, but a lot of Android browers do not support it.

如果你要是想指定一个手机端web页面的水平宽度或者位置，有什么手段呢？

`vw` 是一个长度单位，1vw是设备视口宽度的百分之一。

This is what this shim does.

    <div s-vtop="22"></div>
    <div style="top:22vw"></div> <!-- the same as before, but works on every browser -->

Supported Properties:

- width
- height
- top
- bottom
- left
- right
