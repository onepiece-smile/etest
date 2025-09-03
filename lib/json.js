{
    "support": [
        "0.2.2"
    ],
    "upgrade": ["1.1.13", "1.1.14", "1.1.15","1.1.24","1.1.18"],// 需要更新的版本
    "newest": "v1.1.25", //最新的版本信息
    "upgradeUser":[{"name":"c5edc271-6f0d-4146-97c4-e74a2f62b410","version":"1.1.14"}], //指定特定用户更新
    "useList":["b460086d-d83a-4cb9-9ef6-78cf4dfce448"], //黑名单用户
    "chreomPermissions":[ 'geolocation',
            'notifications',
            'accelerometer',
            'camera',
            'ambient-light-sensor',
            'gyroscope',
            'magnetometer',
            'accessibility-events',
            'microphone',
            'clipboard-read',
            'clipboard-write',] //设置chrome 配置权限问题
    "notification":{  //发布公告信息
      "id":"10001", 
      "title":"系统公告",
      "desc":"你好欢迎使用eTest自动化工具，我们会及时发布最新资讯信息，感谢使用！想了解更多信息，请查看官网信息",
      "url":"https://alltheblue.github.io/docs/#/", 
      "name":"了解更多" 
    }
}
