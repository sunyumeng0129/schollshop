/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-15 11:44:31
 */
'use strict';

const fs = require('fs');
const path = require('path');
const Service = require('egg').Service;
const { idCreator, passwordCreator } = require('../utils');

class UserService extends Service {
    async login({ username, password, uid }) {
        const pwd = passwordCreator(password).substring(0, 20);
        const $params = [username, pwd, uid];
        const $sql = 'select * from login where username=? and password=?';
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async registry({ username, password }) {
        const uid = idCreator(username);
        const pwd = passwordCreator(password)
        const $params = [uid, username, pwd];
        const $sql = 'insert into login (uid,username,password) values (?,?,?)';
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async find({ username }) {
        const $sql = 'select username from login where username=?';
        const $params = [username];
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async getUserInfo({ uid }) {
        // const $sql = 'SELECT login.username,user.nickname,user.email FROM login,user WHERE login.uid=user.uid AND login.uid=?';
        const $sql = 'select * from user where uid = ?'
        const $params = [uid]
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async upload(file) {
        console.log(file)
        const uploadData = fs.readFileSync(file.path);
        const uploadDir = path.join(process.cwd(), '/app/public/upload', file.name);
        const uploadError = fs.writeFileSync(uploadDir, uploadData);
        return uploadError;
    }
    async addIdentiry({ identity_text, identity_type }) {
        const identity_id = idCreator(identity_text);
        const $params = [identity_id, identity_text, identity_type];
        const $sql = 'insert into identity (identity_id,identity_text,identity_type) values (?,?,?)';
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async identiryList() {
        const $sql = 'select * from `identity`';
        return await this.ctx.app.mysql.query($sql)
    }
}

module.exports = UserService;