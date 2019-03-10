{
  // 必填 应用名称
  "name": "Minimal PWA", 
  // 可选 在APP launcher和新的tab页显示，如果没有设置，则使用name
  "short_name": "PWA Demo", 
  // 用于描述应用
  "description": "The app that helps you understand PWA",
  // Web应用程序的显示模式。standalone/fullscreen/browser
  "display": "standalone",
  // 应用启动时的url 
  "start_url": "/", 
  // 桌面图标的背景色
  "theme_color": "#313131", 
  // 为web应用程序预定义的背景颜色
  "background_color": "#313131", 
  // 桌面图标，是一个数组
  "icons": [ 
    {
      "src": "icon/lowres.webp",
      "sizes": "48x48",  // 以空格分隔的图片尺寸
      "type": "image/webp"  // 帮助userAgent快速排除不支持的类型
    },
    {
      "src": "icon/hd_hi.ico",
      "sizes": "72x72 96x96 128x128 256x256"
    },
    {
      "src": "icon/hd_hi.svg",
      "sizes": "72x72"
    }
  ]
}