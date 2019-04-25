"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();
const { Translate } = require('@google-cloud/translate');
const projectId = 'bestway';
const translate = new Translate({
  projectId: projectId,
});

/************** 接口 **************/

// 注册账号
router.post('/api/login/registerAccount', (req, res) => {
  let newAccount = new models.Login({
    account: req.body.account,
    password: req.body.password
  });
  newAccount.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('createAccount successed');
    }
  });
});

//翻译功能
router.post('/api/translate', (req, res) => {
  var text = req.body.textcon
  var target = 'en'
  translate
    .translate(text, target)
    .then(results => {
      const translation = results[0];
      res.send(translation)
      console.log(`Text: ${text}`);
      console.log(`Translation: ${translation}`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
})

//景点查询
router.post('/api/searchFor', (req, res) => {
  models.Location.findOne({ locationName: req.body.locationName }, (err, data) => {
    res.send(data);
  });
});

// 登录
router.post('/api/login/loginAccount', (req, res) => {
  models.Login.findOne({ account: req.body.account }, (err, data) => {
    res.send(data);
  });
});

// 在线用户
router.post('/api/state', (req, res) => {
  models.Login.findOneAndUpdate({ function: 'ustate' }, { onName: req.body.onName }, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      console.log('User online')
    }
  })
});

//用户离线
router.post('/api/stateChange', (req, res) => {
  models.Login.findOneAndUpdate({ function: 'ustate' }, { onName: '' }, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
      console.log('User outline')
    }
  })
})

//获取在线用户ID
router.get('/api/getInf', (req, res) => {
  models.Login.findOne({ function: 'ustate' }, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})



// 获取已有账号
router.get('/api/login/getAccount', (req, res) => {
  // 通过模型去查找数据库
  models.Login.findOne({ account: 'admin' }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
      console.log('success')
    }
  });
});

//获取评论数据
router.get('/api/getComment', (req, res) => {
  models.Comment.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
})

//增加评论
router.post('/api/newComment', (req, res) => {
  let newComment = new models.Comment({
    uid: req.body.uid,
    comment: req.body.comment
  });
  newComment.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('createAccount successed');
    }
  });
})

//修改密码
router.post('/api/newPassword', (req, res) =>{
  models.Login.findOneAndUpdate({ account: req.body.account }, { password: req.body.password }, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
      console.log('new password')
    }
  })
})
module.exports = router;
