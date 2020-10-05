/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-14 16:45:35
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');

class CarouselService extends Service {
    async add({ tit, start_time, end_time, img, type }) {
        const cid = idCreator(tit);
        type = type || 0;
        const $params = [cid, tit, start_time, end_time, img, type];
        const $sql = 'insert into carousel (cid,tit,start_time,end_time,img,type) values (?,?,?,?,?,?)';
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async del({ cid }) {
        const $sql = 'delete from carousel where cid=?';
        const $params = [cid];
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async edit({ cid, tit, start_time, end_time, img, type }) {
        console.log(cid, tit, start_time, end_time, img, type);
        const $sql = 'update carousel set tit=?, start_time=?, end_time=?,img=?,type=? where cid=?';
        const $params = [tit, start_time, end_time, img, type, cid];
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async list() {
        // if (type === 'all') {
        const $sql = `select * from carousel`;
        return await this.ctx.app.mysql.query($sql)

        // } else {
        // const $sql = `select * from carousel where type=${type === undefined ? 1 : type}`;
        // return await this.ctx.app.mysql.query($sql)
        // }

    }
}

module.exports = CarouselService;