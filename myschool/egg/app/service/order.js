/*
 * @Author: heinan 
 * @Date: 2020-07-14 09:58:45 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-16 12:10:37
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');

class OrderService extends Service {
    async add({ list, aid, uid, summary, total, status }) {
        const oid = idCreator(uid);
        const $params = [oid, list, aid, uid, summary, total, status];
        const $sql = 'insert into `order` (oid,list, aid, uid, summary, total, status ) values (?,?,?,?,?,?,?)';
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async del({ cid }) {
        const $sql = 'delete from `order` where cid=?';
        const $params = [cid];
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async edit({ cid, tit, start_time, end_time, img, type }) {
        const $sql = 'update `order` set tit=?, start_time=?, end_time=?,img=?,type=? where cid=?';
        const $params = [tit, start_time, end_time, img, cid, type];
        return await this.ctx.app.mysql.query($sql, $params)
    };
    async list({ uid, status }) {
        // 判断是否传递了订单状态
        // 没有传递显示全部订单
        const $sql = status === undefined ?
            'select * from `order` where uid=?' :
            'select * from `order` where uid=? and status=?';
        return await this.ctx.app.mysql.query($sql, [uid, status])
    }
    async getDetail({ s_type }) {
        const $sql = 'select * from sort where s_type = ?';
        return await this.ctx.app.mysql.query($sql, [s_type])
    }
    async gethomeDetail({ pid }) {
        const $sql = 'select * from product where pid = ?';
        return await this.ctx.app.mysql.query($sql, [pid])
    }
}

module.exports = OrderService;