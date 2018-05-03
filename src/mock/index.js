/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-03 17:09:14 
 * @version 0.0.1 
 */
import Mock from 'mockjs';

export default Mock.mock('/api.json', {
  "success": true, // 是否成功
  "errorMsg": "失败时的错误信息", // 失败时的错误信息
  "errorCode": null, //失败时的错误码
  'data': {
    'list|10': [
      {
        'id|+1': 1,
        'name|1-5': '@cname',
        'updataTime|1000-5000': 1000,
        'img': '@image',
        'imgRetina': '@image',
        'href': '@url',
        'color': '@color',
        'useHtml|0-1': 1,
        'html|+1': '<p>' + 1 + '</p>',
        'status|1-2': 1
      }
    ]
  }

});
