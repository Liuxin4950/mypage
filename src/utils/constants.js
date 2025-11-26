// 应用常量定义
export const APP_CONFIG = {
  TITLE: 'Tab老年版本1.0',
  VERSION: '1.0.0',
  DESCRIPTION: '为老年人设计的简洁易用的标签页应用'
};

// 默认标签页配置
export const DEFAULT_TABS = [
  {
    title: '首页',
    content: '欢迎使用Tab老年版本1.0，这是一个简洁的标签页应用。',
    shortcuts: [
      {
        id: 1,
        title: '百度',
        url: 'https://www.baidu.com',
        icon: 'https://www.baidu.com/favicon.ico'
      },
      {
        id: 2,
        title: '微信',
        url: 'https://weixin.qq.com',
        icon: 'https://weixin.qq.com/favicon.ico'
      },
      {
        id: 3,
        title: '支付宝',
        url: 'https://www.alipay.com',
        icon: 'https://www.alipay.com/favicon.ico'
      },
      {
        id: 4,
        title: '淘宝',
        url: 'https://www.taobao.com',
        icon: 'https://www.taobao.com/favicon.ico'
      }
    ]
  },
  {
    title: '新闻',
    content: '这里提供最新新闻资讯。',
    shortcuts: [
      {
        id: 5,
        title: '腾讯新闻',
        url: 'https://news.qq.com',
        icon: 'https://news.qq.com/favicon.ico'
      },
      {
        id: 6,
        title: '网易新闻',
        url: 'https://news.163.com',
        icon: 'https://news.163.com/favicon.ico'
      },
      {
        id: 7,
        title: '今日头条',
        url: 'https://www.toutiao.com',
        icon: 'https://www.toutiao.com/favicon.ico'
      }
    ]
  },
  {
    title: '娱乐',
    content: '娱乐休闲区域。',
    shortcuts: [
      {
        id: 8,
        title: '腾讯视频',
        url: 'https://v.qq.com',
        icon: 'https://v.qq.com/favicon.ico'
      },
      {
        id: 9,
        title: '爱奇艺',
        url: 'https://www.iqiyi.com',
        icon: 'https://www.iqiyi.com/favicon.ico'
      },
      {
        id: 10,
        title: '优酷',
        url: 'https://www.youku.com',
        icon: 'https://www.youku.com/favicon.ico'
      }
    ]
  },
  {
    title: '健康',
    content: '健康生活相关资讯。',
    shortcuts: [
      {
        id: 11,
        title: '平安好医生',
        url: 'https://www.111.com.cn',
        icon: 'https://www.111.com.cn/favicon.ico'
      },
      {
        id: 12,
        title: '丁香医生',
        url: 'https://dxy.com',
        icon: 'https://dxy.com/favicon.ico'
      }
    ]
  }
];

// 响应式断点
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200
};